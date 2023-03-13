<!--
TEC - Automated Mismatch Detection Tool
Copyright 2023 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
DM23-0003
-->


<template>
  <base-layout :page_title=page_title :actions_bar_toggle=true>

    <sds-toaster v-model='toasts'/>

    <form @submit.prevent='submit' v-if='schema.properties'>
      <div class='input-div'>
        <label for="dataset_identifier"> <b> Dataset Identifier </b> - {{schema.properties.dataset_identifier.description}}</label>
        <br>
        <input type="text" v-model="model.document.dataset_identifier" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="dataset_version"> <b> Dataset Version </b> - {{schema.properties.dataset_version.description}}</label>
        <br>
        <input type="text" v-model="model.document.dataset_version" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="dataset_name"> <b> Dataset Name </b> - {{schema.properties.dataset_name.description}}</label>
        <br>
        <input type="text" v-model="model.document.dataset_name" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="dataset_description"> <b> Dataset Description </b> - {{schema.properties.dataset_description.description}}</label>
        <br>
        <textarea type="text" v-model="model.document.dataset_description" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="data_sources"> <b> Data Sources </b> - {{schema.properties.data_sources.description}} </label>
        <div v-for="(item, index) in model.document.data_sources" :key="index">
          <div class='variable-input-parent-div'>
            <select v-bind:class="[ item.data_source === 'Other' ? 'variable-input-other' : 'form-control' ]" v-model="item.data_source" @change="data_source_change(index)" style=''>
              <option v-for='(data_source, index) in data_sources_enum' :value='data_source' :key='index'> {{data_source}} </option>
            </select>
            <div v-if='item.data_source === "Other"' class='inline'>
              <label for='other_source' class='split-fourth-label'> Please define other </label>
              <input type='text' v-model='item.other_source' class='split-fourth-input' />
              <br />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_data_source()" class="btn">
              Add Data Source
            </button>
            <button v-if='index!=0' @click.prevent="remove_data_source(index)" class="btn">
              Delete Data Source
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="instance_type"> <b> Instance Type </b> - {{schema.properties.instance_type.description}}</label>
        <br>
        <input type="text" v-model="model.document.instance_type" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="number_of_instances"> <b> Number of Instances </b> - {{schema.properties.number_of_instances.description}}</label>
        <br>
        <input type="text" v-model.number="model.document.number_of_instances" class="form-control" />
      </div>

      <div class='input-div'>
        <label for='labels_distribution'> <b> Labels and Distribution </b> - {{schema.properties.labels_distribution.description}}</label>
        <br />
        <div v-for="(item, index) in model.document.labels_distribution" :key="index">
          <div class='variable-input-parent-div' >
            <label for='label' class='split-fourth-label'> Label </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Label
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.labels_distribution.items.properties.label.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model="item.label" />
            <label for='percentage' class='split-fourth-label'> Percentage </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Percentage
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.labels_distribution.items.properties.percentage.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='number' min='0' max='100' class='split-fourth-input' v-model.number="item.percentage"/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_label_distribution()" class='btn'>
              Add Label
            </button>
            <button v-if='index!=0' @click.prevent="remove_label_distribution(index)" class='btn'>
              Delete Label
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="schema"> <b> Schema </b> - {{schema.properties.schema.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.schema" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='field_name' class='split-fourth-label'> Field Name </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Field Name
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.field_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.field_name" />
              <label for='field_description' class='split-fourth-label'> Field Description </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Field Description
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.field_description.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.field_description"/>
            </div>

            <div class='input-line-div'>
              <label for='field_type' class='split-fourth-label'> Field Type </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Field Type
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.field_type.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.field_type"/>
              <label for='expected_values' class='split-fourth-label'> Expected Values </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Expected Values
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.expected_values.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.expected_values" />
            </div>

            <div class='input-line-div'>
              <label for='interpret_missing' class='split-fourth-label'> Missing Values </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Missing Values
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.interpret_missing.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.interpret_missing" />
              <label for='interpret_special' class='split-fourth-label'> Special Values </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Special Values
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.interpret_special.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.interpret_special"/>
            </div>
          </div>

          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_schema()" class='btn'>
              Add Field
            </button>
            <button v-if='index!=0' @click.prevent="remove_schema(index)" class='btn'>
              Delete Field
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="schema"> <b> Metadata </b> - {{schema.properties['metadata'].description}}</label>
        <br>
        <div class='variable-input-parent-div'>
          <div class='input-line-div'>
            <label for='collection_date' class='split-fourth-label'> Collection Date </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Collection Date
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.metadata.properties.collection_date.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='date' class='split-fourth-input' v-model='model.document.metadata.collection_date' />
             <label for='geographic_location' class='split-fourth-label'> Geographic Location </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Geographic Location
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.metadata.properties.geographic_location.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model='model.document.metadata.geographic_location' />
          </div>
          <div class='input-line-div'>
            <label for='timeframe' class='split-fourth-label'> Timeframe </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Timeframe
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.metadata.properties.timeframe.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model='model.document.metadata.timeframe' />
            <label for='known_issues' class='split-fourth-label'> Known Issues </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Known Issues
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.metadata.properties.known_issues.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top;' v-model='model.document.metadata.known_issues' />
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="restrictions"> <b> Restrictions </b> - {{schema.properties['restrictions'].description}}</label>
        <br>
        <textarea type="text" v-model="model.document.restrictions" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="anonymization"> <b> Anonymization </b> - {{schema.properties['anonymization'].description}}</label>
        <br>
        <textarea type="text" v-model="model.document.anonymization" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="proxy_data"> <b> Proxy Data </b> - {{schema.properties.proxy_data.description}}</label>
        <br>
        <textarea type="text" v-model="model.document.proxy_data" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="documentation"> <b> Documentation </b> - {{schema.properties.documentation.description}}</label>
        <div v-for="(item, index) in model.document.documentation" :key="index" class='relative display:table'>
          <div class='variable-input-parent-div'>
            <label for='description' class='split-fourth-label'> Description </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Description
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.documentation.items.properties.description.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.description" type="text" class='split-fourth-input' />
            <label for='location' class='split-fourth-label'> Location (URI) </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Location (URI)
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.documentation.items.properties.location.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.location" type="text" class='split-fourth-input' />
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_documentation()" class="btn">
              Add Documentation
            </button>
            <button v-if='index!=0' @click.prevent="remove_documentation(index)" class="btn">
              Delete Documentation
            </button>
          </div>
        </div>
      </div>
    </form>

    <template v-slot:actions-bar>
      <nuxt-link :to="{path: '/project_view', query: {project_name: project_name}}" class="ml-auto"> 
        <sds-button variant="light" outline>
          Cancel
        </sds-button>
      </nuxt-link>
      <sds-button variant="default" class="text-primary hover:text-black hover:bg-white" @click="submit()">
        Save
      </sds-button>
    </template>
    
  </base-layout>
</template>

<script>
  export default {
    data() {
      return {
        project_name: '',
        page_title: '',
        schema: {},
        model: {
          document: {
            version: '1.0',
            dataset_identifier: '',
            dataset_version: '',
            dataset_name: '',
            dataset_description: '',
            data_sources: [{
              data_source: '',
              other_source: '',
            }],
            instance_type: '',
            number_of_instances: 0,
            labels_distribution: [{
              label: '',
              percentage: 0
            }],
            schema: [{
              field_name: '',
              field_description: '',
              field_type: '',
              expected_values: '',
              interpret_missing: '',
              interpret_special: '',
            }],
            metadata: {
              collection_date: '',
              geographic_location: '',
              timeframe: '',
              known_issues: ''
            },
            restrictions: '',
            anonymization: '',
            proxy_data: '',
            documentation: [{
              description: '', 
              location: ''
            }],
          },
        },
        data_sources_enum: [],

        toasts: [],
        toaster_messages: [
          {
            id: 0,
            variant: 'success',
            title: 'Successful Submission',
            text: 'Descriptor saved successfully.',
            autoHideDelay: 5000
          },
          {
            id: 1,
            variant: 'warning',
            title: '',
            text: '',
            autoHideDelay: 5000
          }
        ],
      }
    },


    methods: {
      async submit () {
        let post_json = {
          project_name: this.project_name,
          descriptor_name: 'raw_data',
          document: JSON.parse(JSON.stringify(this.model.document))
        }

        console.log(post_json);

        await this.$axios.post('/api/documents/insert_document', post_json).then((promise => {
          console.log(promise.data);
          this.toasts.unshift(this.toaster_messages[0])
        })).catch(error => {
          console.warn(error.response.data)
          this.toaster_messages[1].title = 'Submission Error'
          this.toaster_messages[1].text = 'Please report this error in your evaluation.'
          this.toasts.unshift(this.toaster_messages[1])
        });
      },


      add_data_source(){
        this.model.document.data_sources.push({data_source: '', other_source: ''})
      },

      remove_data_source(index){
        this.model.document.data_sources.splice(index, 1);
      },

      data_source_change(index){
        this.model.document.data_sources[index].other_source = ''
      },


      add_label_distribution(){
        this.model.document.labels_distribution.push({label: '', percentage: 0});
      },

      remove_label_distribution(index){
        this.model.document.labels_distribution.splice(index, 1);
      },


      add_schema(){
        this.model.document.schema.push({field_name: '', field_description: '', field_type: '', expected_values: '', interpret_missing: '', interpret_special: ''});
      },

      remove_schema(index){
        this.model.document.schema.splice(index, 1);
      },


      add_documentation(){
        this.model.document.documentation.push({description: '', location: ''});
      },

      remove_documentation(index){
        this.model.document.documentation.splice(index, 1);
      },
    },


    async validate({query, store}){
      return await store.dispatch('validate_project_name', {project_name: query['project_name']});
    },


    created(){
      this.project_name = this.$route.query['project_name']
      this.page_title = this.project_name + ' - Raw Data'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },
    

    async fetch(){
      await this.$axios.post('/api/get_schema/raw_data_schema.json').then(response => {
        this.schema = response['data'];
        this.data_sources_enum = this.schema['properties']['data_sources']['items']['properties']['data_source']['enum']
      })

      let post_json = {'project_name': this.project_name, 'descriptor_name': 'raw_data'}
      await this.$axios.post('/api/documents/get_document', post_json).then(response => {
        if(response['data']['document'] != null){
          console.log(response['data'])

          this.model.document = JSON.parse(JSON.stringify(response['data']['document']))
        }
        else{
          this.model.document.version = this.schema['properties']['version']['const']
          console.log("No document found to load")
        }
      });
    },


    beforeRouteLeave (to, from , next) {
      this.$confirm_leave_form(next);
    }
  }
</script>