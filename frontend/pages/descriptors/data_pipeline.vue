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
        <label for="pipeline_identifier"> <b> Pipeline Identifier </b> - {{schema.properties.pipeline_identifier.description}}</label>
        <br>
        <input type="text" v-model="model.document.pipeline_identifier" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="pipeline_version"> <b> Pipeline Version </b> - {{schema.properties.pipeline_version.description}}</label>
        <br>
        <input type="text" v-model="model.document.pipeline_version" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="pipeline_description"> <b> Pipeline Description </b> - {{schema.properties.pipeline_description.description}}</label>
        <br>
        <textarea type="text" v-model="model.document.pipeline_description" class="form-control" />
      </div>

      <div class="input-div">
        <label for="input_spec"> <b> Input Specification </b> - {{schema.properties.input_spec.description}}</label>
        <div class="input-div" v-for="(item, spec_index) in model.document.input_spec" :key="spec_index">
          <div class="variable-input-parent-div">
            <testable-item
              :item="item"
              :schema="schema.properties.input_spec"
            />
            <div class='input-line-div'>
              <label for='error_type' class='split-fourth-label'> Error Type </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Error Type
                      </h3>
                      <p class="popover-p">
                        {{ schema.properties.input_spec.items.properties.error_handling.properties.error_type.description }}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.error_handling.error_type'
                :options='input_spec_error_type_options'
                v-bind:multiple='false'

                @updateSelected='update_selected_error_type($event, spec_index)'

                class='split-fourth-input inline-block'
              />
              <span v-if="item.error_handling.error_type.length > 0 && item.error_handling.error_type[0].value === 'Return error code'">
                <label for='error_code_value' class='split-fourth-label'> Error Code Value </label>
                <div class='popover-container'>
                  <sds-popover>
                    <template #trigger>
                      <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                    </template>
                    <template #default>
                      <div class="popover-div">
                        <h3 class="popover-h3">
                          Error Code value
                        </h3>
                        <p class="popover-p">
                          {{ schema.properties.input_spec.items.properties.error_handling.properties.error_code_value.description }}
                        </p>
                      </div>
                    </template>
                  </sds-popover>
                </div>
                <input v-model="item.error_handling.error_code_value" type="number" class='split-fourth-input'/>
              </span>
            </div>

            <div class='input-line-div'>
              <label for='component' class='split-fourth-label'> Upstream Component in Development Environment </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Upstream Component in Development Environment
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.input_spec.items.properties.component_mapping.properties.component.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.component_mapping.component'
                :options='input_spec_component_options'
                v-bind:multiple='false'

                @updateSelected='update_selected_component_mapping($event, spec_index)'

                class='split-fourth-input inline-block'
              />
              <label for='data_item' class='split-fourth-label'> Data Item </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Data Item
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.input_spec.items.properties.component_mapping.properties.data_item.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect 
                :value='item.component_mapping.data_item'
                :options='item.component_mapping.component.length < 1 ? [] : input_spec_data_item_options[ input_spec_component_options.findIndex(option => option.key == item.component_mapping.component[0].key) ]'
                v-bind:multiple='false'

                @updateSelected='(selections) => {item.component_mapping.data_item = selections}'

                class='split-fourth-input inline-block'
              />
            </div>
          </div>

          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='spec_index==0' @click="add_input_spec()">
              Add Input
            </sds-button>
            <sds-button variant="default" v-if='spec_index!=0' @click="remove_input_spec(spec_index)">
              Delete Input
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="test_cases"> <b> Test Cases </b> - {{schema.properties.test_cases.description}}</label>
        <div class="input-div relative" v-for="(item, index) in model.document.test_cases" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='test_case_name' class='split-fourth-label'> Test Case Name </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Test Case Name
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.test_cases.items.properties.test_case_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.test_case_name" type="text" class='split-fourth-input' />
              <label for='tested_property' class='split-fourth-label'> Tested Property </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Tested Property
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.test_cases.items.properties.tested_property.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.tested_property" type="text" class='split-fourth-input'/>
            </div>
            <div class='input-line-div'>
              <label for='file' class='split-fourth-label'> File (URI) </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        File (URI)
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.test_cases.items.properties.file.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.file" type="text" class='split-fourth-input' />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='index==0' @click="add_test_case()">
              Add Test Case
            </sds-button>
            <sds-button variant="default" v-if='index!=0' @click="remove_test_case(index)" >
              Delete Test Case
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="pipeline_steps"> <b> Pipeline Steps </b> -  {{schema.properties.pipeline_steps.description}} </label>
        <br>
        <div class='input-div' v-for="(item, index) in model.document.pipeline_steps"  :key='index'>
          <div class='variable-input-parent-div'>
            <label for='data_processing_step' class='split-fourth-label'> Step </label>
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
                      {{schema.properties.pipeline_steps.items.properties.data_processing_step.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type="text" class="split-fourth-input" v-model="item.data_processing_step" />
            <label for='data_processing_detail' class='split-fourth-label'> Detail </label>
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
                      {{schema.properties.pipeline_steps.items.properties.data_processing_detail.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type="text" class='split-fourth-input' style='vertical-align: top' v-model="item.data_processing_detail" />
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='index==0' @click="add_pipeline_step()" >
              Add Step
            </sds-button>
            <sds-button variant="default" v-if='index!=0' @click="remove_pipeline_step(index)">
              Delete Step
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="pipeline_code"> <b> Pipeline Code </b> - {{schema.properties.pipeline_code.description}}</label>
        <br>
        <input type="text" v-model="model.document.pipeline_code" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="documentation"> <b> Documentation </b> - {{schema.properties.documentation.description}}</label>
        <div class='input-div' v-for="(item, index) in model.document.documentation" :key="index">
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
            version: '1.2',
            pipeline_identifier: '',
            pipeline_version: '',
            pipeline_description: '',
            input_spec: [{
              item_name: '',
              item_description: '',
              item_type: [],
              item_specification: {
                min_value: 0,
                max_value: 0,
                resolution_x: 0,
                resolution_y: 0,
                channels: 0,
                image_format: [],
                empty: false,
                numeric: false,
                slashes: false,
                spaces: false,
                special: false
              },
              error_handling: {
                error_type: [],
                error_code_value: 0
              },
              component_mapping: {
                component: [],
                data_item: [],
              }
            }],
            test_cases: [{
              test_case_name: '',
              tested_property: '',
              file: '',
            }],
            pipeline_steps: [{
              data_processing_step: '',
              data_processing_detail: '',
            }],
            pipeline_code: '',
            documentation: [{
              description: '',
              location: ''
            }]
          }
        },
        input_spec_error_type_options: [],
        input_spec_component_options: [],
        input_spec_data_item_options: [],

        toasts: [],
        toaster_messages: [
          {
            id: 0,
            variant: 'success',
            title: 'Successful Submission',
            text: 'Descriptor saved successfully.',
            autoHideDelay: 5000
          },
        ],
      }
    },
    methods: {
      async submit () {
        let post_json = {
          project_name: this.project_name,
          descriptor_name: 'data_pipeline',
          document: JSON.parse(JSON.stringify(this.model.document))
        }

        post_json.document['input_spec'].forEach(spec => {
          spec.item_type = spec.item_type.length > 0 ? spec.item_type[0]['value'] : '';
          spec.item_specification.image_format = spec.item_specification.image_format.length > 0 ? spec.item_specification.image_format[0]['value'] : '';
          spec.error_handling.error_type = spec.error_handling.error_type.length > 0 ? spec.error_handling.error_type[0]['value']: '';
          spec.component_mapping.component = spec.component_mapping.component.length > 0 ? spec.component_mapping.component[0]['value'] : '';
          spec.component_mapping.data_item = spec.component_mapping.data_item.length > 0 ? spec.component_mapping.data_item[0]['value'] : '';
        });

        console.log(post_json);

        await this.$axios.post('/api/documents/insert_document', post_json).then(response => {
          this.toasts.unshift(this.toaster_messages[0])
        }).catch(error => {
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


      update_selected_error_type(selections, spec_index){
        this.model.document.input_spec[spec_index].error_handling.error_type = selections;
        this.model.document.input_spec[spec_index].error_handling.error_code_value = 0;        
      },


      update_selected_component_mapping(selections, spec_index){
        this.model.document.input_spec[spec_index].component_mapping.component = selections;
        this.model.document.input_spec[spec_index].component_mapping.data_item = []
      },


      add_input_spec(){
        this.model.document.input_spec.push(
          {
            item_name: '',
            item_description: '',
            item_type: [],
            item_specification: {
              min_value: 0,
              max_value: 0,
              resolution_x: 0,
              resolution_y: 0,
              channels: 0,
              image_format: [],
              empty: false,
              numeric: false,
              slashes: false,
              spaces: false,
              special: false
            },
            error_handling: {error_type: [], error_code_value: 0},
            component_mapping: {component: [], data_item: []}
          }
        )
      },


      remove_input_spec(spec_index){
        this.model.document.input_spec.splice(spec_index, 1);
      },


      add_test_case(){
        this.model.document.test_cases.push({test_case_name: '', tested_property: '', file: ''});
      },


      remove_test_case(index){
        this.model.document.test_cases.splice(index, 1);
      },


      add_pipeline_step(){
        this.model.document.pipeline_steps.push({data_processing_step: '', data_processing_detail: ''})
      },


      remove_pipeline_step(index){
        this.model.document.pipeline_steps.splice(index, 1);
      },


      add_documentation() {
        this.model.document.documentation.push({description: '', location: ''});
      },
      

      remove_documentation(index) {
        this.model.document.documentation.splice(index, 1);
      },
    },


    async validate({query, store}){
      return await store.dispatch('validate_project_name', {project_name: query['project_name']});
    },


    created(){
      this.project_name = this.$route.query['project_name']
      this.page_title = this.project_name + ' - Data Pipeline'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },


    async fetch(){
      await this.$axios.post('/api/get_schema/data_pipeline_schema.json').then(response => {
        this.schema = response['data'];
        this.schema['properties']['input_spec']['items']['properties']['error_handling']['properties']['error_type']['enum'].forEach(type => {
          this.input_spec_error_type_options.push({id: type, value: type});
        })
      })

      // Populating the option fields in the page with the items from the development environment descriptor
      let de_post_json = {'project_name': this.project_name, 'descriptor_name': 'development_environment'}
      await this.$axios.post('/api/documents/get_document', de_post_json).then(response => {
        if(response['data']['document'] != null){
          response['data']['document']['upstream_components'].forEach(component => {
            if(component.component_name != ''){
              this.input_spec_component_options.push({key: component.component_name, value: component.component_name})

              let component_data_items = []
              component.output_spec.forEach(spec => {
                if(spec.item_name != ''){
                  component_data_items.push({key: spec.item_name, value: spec.item_name})
                }
              });
              this.input_spec_data_item_options.push(component_data_items)
            }
          });
        }
      });

      // Loading the document and adjusting values to display in Vue
      let dp_post_json = {'project_name': this.project_name, 'descriptor_name': 'data_pipeline'}
      await this.$axios.post('/api/documents/get_document', dp_post_json).then(response => {
        if(response['data']['document'] != null){
          console.log(response['data']['document'])
          this.model.document = JSON.parse(JSON.stringify(response['data']['document']))

          if(response['data']['version_updated']){
            this.$store.dispatch('generate_version_update_toast').then(toast => {
              this.toasts.unshift(toast);
            })
          }

          this.model.document['input_spec'].forEach(spec => {
            spec.item_type = [{id: spec.item_type, value: spec.item_type}]
            spec.item_specification.image_format = [{id: spec.item_specification.image_format, value: spec.item_specification.image_format}]
            spec.error_handling.error_type = [{id: spec.error_handling.error_type, value: spec.error_handling.error_type}]
            spec.component_mapping.component = [{id: spec.component_mapping.component, value: spec.component_mapping.component}]
            spec.component_mapping.data_item = [{id: spec.component_mapping.data_item, value: spec.component_mapping.data_item}]
          });
        }
        else{
          console.log("No document found to load")
        }
      }).catch(error => {
        console.warn(error.response.data);

          if(error.response.data.error_list != null){
            let error_list = error.response.data.error_list

            for(let i = 0; i < error_list.length; i++){
              let temp_toast = {
                id: 100 + i,
                variant: 'warning',
                title: 'Load Error',
                text: error_list[i],
                autoHideDelay: 5000
              }
              this.toasts.unshift(temp_toast)
            }
          }
      });
    },


    beforeRouteLeave (to, from , next) {
      this.$confirm_leave_form(next);
    }
  }
</script>