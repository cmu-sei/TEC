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
    
    <div class="form-div" v-if='schema.properties'>
      <div class='input-div'>
        <label> <b> Dataset Identifier </b> - {{schema.properties.dataset_identifier.description }}</label>
        <br>
        <input type="text" v-model="model.document.dataset_identifier" class="form-control"/>
      </div>

      <div class='input-div'>
        <label> <b> Dataset Name </b> - {{schema.properties.dataset_name.description }}</label>
        <br>
        <input type="text" v-model="model.document.dataset_name" class="form-control" />
      </div>

      <div class='input-div'>
        <label> <b> Dataset Version </b> - {{schema.properties.dataset_version.description }}</label>
        <br>
        <input type="text" v-model="model.document.dataset_version" class="form-control" />
      </div>

      <div class='input-div'>
        <label> <b> Dataset Description </b> - {{schema.properties.dataset_description.description }}</label>
        <br>
        <textarea type="text" v-model="model.document.dataset_description" class="form-control" />
      </div>

      <div class='input-div'>
        <label> <b> Raw Data Identifier </b> - {{schema.properties.raw_data_identifier.description }}</label>
        <br>
        <input type="text" v-model="model.document.raw_data_identifier" class="form-control" disabled />
      </div>

      <div class='input-div'>
        <label> <b> Schema </b> - {{schema.properties.schema.description }}</label>
        <div class='input-div' v-for="(item, index) in model.document.schema" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label class='split-fourth-label'> Field Name </label>
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
                        {{schema.properties.schema.items.properties.field_name.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.field_name" @input='update_field_name_options()'/>
              <label class='split-fourth-label'> Label Field </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Label Field
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.label_field.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='checkbox' v-model="item.label_field" @change='item.mapping_production_data = []'/>
            </div>
            <div class='input-line-div'>
              <label class='split-fourth-label'> Field Description </label>
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
                        {{schema.properties.schema.items.properties.field_description.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.field_description" />
              <label class='split-fourth-label'> Field Type </label>
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
                        {{schema.properties.schema.items.properties.field_type.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <item-type-multiselect
                :value='item.field_type'
                v-bind:multiple="false"

                @updateSelected='(selections) => {item.field_type = selections}'

                class='split-fourth-input'
              />
            </div>
            <div class='input-line-div'>
              <label class='split-fourth-label'> Expected Values </label>
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
                        {{schema.properties.schema.items.properties.expected_values.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.expected_values" />
              <label class='split-fourth-label'> Missing Values </label>
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
                        {{schema.properties.schema.items.properties.missing_values.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.missing_values" />
            </div>
            <div class="input-line-div">
              <label class='split-fourth-label pb-8'> Mapping to Production Data </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.schema.items.properties.mapping_production_data.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.mapping_production_data'
                :options='pd_schema_field__name_options'
                v-bind:multiple='false'
                :disabled="item.label_field"

                @updateSelected="(selections) => {item.mapping_production_data = selections}"

                class='split-fourth-input inline-block'
              />
            </div>
          </div>
          <sds-button variant="default" v-if='index==0' @click="add_schema()">
            Add Field
          </sds-button>
          <sds-button variant="default" v-if='index!=0' @click="remove_schema(index)">
            Delete Field
          </sds-button>
        </div>
      </div>

      <div class='input-div'>
        <label> <b> Statistics </b> - {{schema.properties.statistics.description }}</label>
        <br>
        <div class="input-div" v-for="(item, index) in model.document.statistics" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label class='split-fourth-label'> Property </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Property
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.statistics.items.properties.property.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <statistics-multiselect
                :value="item.property"
                :multiple="false"

                @updateSelected="(selections) => {item.property = selections}"

                class='split-fourth-input'
              />
              <label class='split-fourth-label'> Field </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Field
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.statistics.items.properties.field.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.field'
                :options='field_name_options'
                v-bind:multiple='false'

                @updateSelected="(selections) => {item.field = selections}"

                class='split-fourth-input'
              />
            </div>
            <div class='input-line-div'>
              <label class='split-fourth-label'> Value </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Value
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.statistics.items.properties.value.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.value"/>
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='index==0' @click="add_statistic()">
              Add Statistic
            </sds-button>
            <sds-button variant="default" v-if='index!=0' @click="remove_statistic(index)" >
              Delete Statistic
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label> <b> Distribution </b> - {{schema.properties.distribution.description }}</label>
        <div class="input-div" v-for="(item, index) in model.document.distribution" :key="index">
          <div class='variable-input-parent-div'>
            <div class="input-line-div">
              <label class='split-fourth-label'> Label </label>
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
                        {{schema.properties.distribution.items.properties.label.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.label" />
              <label class='split-fourth-label'> Percentage </label>
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
                        {{schema.properties.distribution.items.properties.percentage.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='number' min='0' max='100' class='split-fourth-input' v-model.number="item.percentage" />
            </div>
            <div class='input-line-div'>
              <label class='split-fourth-label'> Mapping to Production Data </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.distribution.items.properties.mapping_production_data.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.mapping_production_data'
                :options='pd_distribution_label_options'
                v-bind:multiple='false'

                @updateSelected="(selections) => {item.mapping_production_data = selections}"

                class='split-fourth-input inline-block'
              />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='index==0' @click="add_distribution()">
              Add Label
            </sds-button>
            <sds-button variant="default" v-if='index!=0' @click="remove_distribution(index)">
              Delete Label
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label > <b> Preparation Process </b> - {{schema.properties.preparation_process.description }}</label>
        <div class='input-div' v-for="(item, index) in model.document.preparation_process" :key="index">
          <div class='variable-input-parent-div'>
            <label class='split-fourth-label'>Step </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Step
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.preparation_process.items.properties.data_processing_step.description }}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model="item.data_processing_step" />
            <label class='split-fourth-label'> Detail </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Detail
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.preparation_process.items.properties.data_processing_detail.description }}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model="item.data_processing_detail" />
          </div>
          <sds-button variant="default" v-if='index==0' @click="add_preparation_process()">
            Add Step
          </sds-button>
          <sds-button variant="default" v-if='index!=0' @click="remove_preparation_process(index)">
            Delete Step
          </sds-button>
        </div>
      </div>

      <div class='input-div'>
        <label> <b> Preparation Code </b> - {{schema.properties.preparation_code.description }}</label>
        <br>
        <input type="text" v-model="model.document.preparation_code" class="form-control" />
      </div>

      <div class='input-div'>
        <label> <b> Documentation </b> - {{schema.properties.documentation.description }}</label>
        <div class='input-div' v-for="(item, index) in model.document.documentation" :key="index">
          <div class='variable-input-parent-div'>
            <label class='split-fourth-label'> Description </label>
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
                      {{schema.properties.documentation.items.properties.description.description }}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.description" type="text" class='split-fourth-input' />
            <label class='split-fourth-label'> Location (URI) </label>
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
                      {{schema.properties.documentation.items.properties.location.description }}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.location" type="text" class='split-fourth-input' />
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='index==0' @click="add_documentation()">
              Add Documentation
            </sds-button>
            <sds-button variant="default" v-if='index!=0' @click="remove_documentation(index)">
              Delete Documentation
            </sds-button>
          </div>
        </div>
      </div>
    </div>

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
            dataset_name: '',
            dataset_version: '',
            dataset_description: '',
            raw_data_identifier: '',
            schema: [{
              field_name: '',
              label_field: false,
              field_description: '',
              field_type: [],
              expected_values: '',
              missing_values: '',
              mapping_production_data: [],
            }],
            statistics: [{
              property: [],
              field: [],
              value: ''
            }],
            distribution: [{
              label: '',
              percentage: 0,
              mapping_production_data: []
            }],
            preparation_process: [{
              data_processing_step: '',
              data_processing_detail: ''
            }],
            preparation_code: '',
            documentation: [{
              description: '',
              location: ''
            }]
          }
        },
        field_name_options: [],
        pd_schema_field__name_options: [],
        pd_distribution_label_options: [],

        toasts: [],
        toaster_messages: [
          {
            id: 0,
            variant: 'success',
            title: 'Descriptor submitted',
            text: 'Your descriptor has been successfully submitted.',
            autoHideDelay: 5000
          },
        ]
      }
    },
    methods: {
      async submit (){
        let post_json = {
          project_name: this.project_name,
          descriptor_name: 'training_data',
          document: JSON.parse(JSON.stringify(this.model.document))
        }

        post_json.document.schema.forEach(schema => {
          schema.field_type = schema.field_type.length > 0 ? schema.field_type[0].value : '';
          schema.mapping_production_data = schema.mapping_production_data.length > 0 ? schema.mapping_production_data[0].value : '';
        });

        post_json.document.statistics.forEach(statistic => {
          statistic.property = statistic.property.length > 0 ? statistic.property[0].value : '';
          statistic.field = statistic.field.length > 0 ? statistic.field[0].value : '';
        });

        post_json.document.distribution.forEach(distribution => {
          distribution.mapping_production_data = distribution.mapping_production_data.length > 0 ? distribution.mapping_production_data[0].value : '';
        });

        console.log(post_json);

        await this.$axios.post('/api/documents/insert_document', post_json).then((promise => {
          this.toasts.unshift(this.toaster_messages[0])
        })).catch(error => {
          if(error.response.data.error_list != null){
            let error_list = error.response.data.error_list

            for(let i = 0; i < error_list.length; i++){
              let temp_toast = {
                id: 100 + i,
                variant: 'warning',
                title: 'Submission Error',
                text: error_list[i],
                autoHideDelay: 5000
              }
              this.toasts.unshift(temp_toast)
            }
          }
        });
      },


      update_field_name_options(){
        this.field_name_options = []

        this.model.document.schema.forEach(item => {
          if(item.field_name != ''){
            this.field_name_options.push({id: item.field_name, value: item.field_name})
          }
        })
      },


      add_schema(){
        this.model.document.schema.push({field_name: '', label_field: false, field_description: '', field_type: [], expected_values: '', missing_values: '', mapping_production_data: []});
      },

      remove_schema(index){
        this.model.document.schema.splice(index, 1);
      },


      add_statistic(){
        this.model.document.statistics.push({property: [], field: [], value: ''});
      },

      remove_statistic(index){
        this.model.document.statistics.splice(index, 1);
      },


      add_distribution(){
        this.model.document.distribution.push({label: '', percentage: '', mapping_production_data: []});
      },

      remove_distribution(index){
        this.model.document.distribution.splice(index, 1);
      },


      add_preparation_process(){
        this.model.document.preparation_process.push({data_processing_step: '', data_processing_detail: ''});
      },

      remove_preparation_process(index){
        this.model.document.preparation_process.splice(index, 1);
      },


      add_documentation() {
        this.model.document.documentation.push({description: '', location: ''});
      },

      remove_documentation(index) {
        this.model.document.documentation.splice(index, 1);
      },
    },


    async validate({query, store}){
      return await store.dispatch('validate_project_name', {project_name: query.project_name});
    },


    created(){
      this.project_name = this.$route.query.project_name
      this.page_title = this.project_name + ' - Training Data'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },


    async fetch(){
      await this.$axios.post('/api/get_schema/training_data_schema.json').then(response => {
        this.schema = response.data;
      })

      let td_post_json = {'project_name': this.project_name, 'descriptor_name': 'training_data'}
      await this.$axios.post('/api/documents/get_document', td_post_json).then(response => {
        if(response.data.document != null){
          console.log(response.data)
          this.model.document = JSON.parse(JSON.stringify(response.data.document))

          this.model.document.schema.forEach(schema => {
            schema.field_type = [{id: schema.field_type, value: schema.field_type}];
            schema.mapping_production_data = [{id: schema.mapping_production_data, value: schema.mapping_production_data}];
            if(schema.field_name != ''){
              this.field_name_options.push({key: schema.field_name, value: schema.field_name})
            }
          });

          for(let i = 0; i < response.data.document.statistics.length; i++){
            this.model.document.statistics[i].property = []
            this.model.document.statistics[i].field = []

            let statistic = response.data.document.statistics[i]
            this.model.document.statistics[i].property.push({key: statistic.property, value: statistic.property})
            this.model.document.statistics[i].field.push({key: statistic.field, value: statistic.field})
          };

          this.model.document.distribution.forEach(distribution => {
            distribution.mapping_production_data = [{id: distribution.mapping_production_data, value: distribution.mapping_production_data}];
          })
        }
        else{
          this.model.document.version = this.schema.properties.version.const
          console.log("No document found to load")
        }
      });

      let rd_post_json = {'project_name': this.project_name, 'descriptor_name': 'raw_data'}
      await this.$axios.post('/api/documents/get_document', rd_post_json).then(response => {
        if(response.data.document != null){
          this.model.document.raw_data_identifier = response.data.document.dataset_identifier
        }
      });

      let pd_post_json = {'project_name': this.project_name, 'descriptor_name': 'production_data'}
      await this.$axios.post('/api/documents/get_document', pd_post_json).then(response => {
        if(response.data.document != null){
          response.data.document.schema.forEach(schema => {
            if(schema.field_name != ''){
              this.pd_schema_field__name_options.push({id: schema.field_name, value: schema.field_name});
            }
          });
          response.data.document.distribution.forEach(distribution => {
            if(distribution.label != ''){
              this.pd_distribution_label_options.push({id: distribution.label, value: distribution.label});
            }
          });
        }
      });
    },


    beforeRouteLeave (to, from , next) {
      this.$confirm_leave_form(next);
    }
  }
</script>