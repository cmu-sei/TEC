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
        <label for='programming_languages'> <b> Programming Languages </b> - {{schema.properties.programming_languages.description}}</label>
        <programming-language-multiselect 
          :value='model.document.programming_languages'
          v-bind:multiple='true'

          @updateSelected='(selections) => {model.document.programming_languages = selections}'

          class='form-control'
        />
      </div>

      <div class='input-div'>
        <label for='ml_frameworks'> <b> ML Frameworks </b> - {{schema.properties.ml_frameworks.description}}</label>
        <ml-framework-multiselect
          :value='model.document.ml_frameworks'
          v-bind:multiple="true"

          @updateSelected='(selections) => {model.document.ml_frameworks = selections}'

          class='form-control'
        />
      </div>

      <div class='input-div'>
        <label for="upstream_components"> <b> Upstream Components </b> - {{schema.properties.upstream_components.description}}</label>
        <div v-for="(item, component_index) in model.document.upstream_components" :key="component_index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='component_name' class='split-fourth-label'> Component Name </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Component Name
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.upstream_components.items.properties.component_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.component_name" type="text" class='split-fourth-input' />
              <label for='ml_component' class='split-fourth-label'> ML Component? </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        ML Component
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.upstream_components.items.properties.ml_component.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.ml_component" type="checkbox" class='' />
            </div>
            <div class='input-line-div'>
              <div v-for='spec, spec_index in item.output_spec' :key='spec_index'>
                <div class='variable-input-parent-div'>
                  <div class='input-line-div'>
                    <label for='item_name' class='split-fourth-label'> Item Name </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Item Name
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.upstream_components.items.properties.output_spec.items.properties.item_name.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input v-model="spec.item_name" type="text" class='split-fourth-input' />
                    <label for='item_description' class='split-fourth-label'> Item Description </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Item Description
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.upstream_components.items.properties.output_spec.items.properties.item_description.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input v-model="spec.item_description" type="text" class='split-fourth-input'/>
                  </div>
                  <div class='input-line-div'>
                    <label for='item_type' class='split-fourth-label'> Item Type </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Item Type
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.upstream_components.items.properties.output_spec.items.properties.item_type.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <item-type-multiselect
                      :value='spec.item_type'
                      v-bind:multiple="false"

                      @updateSelected='(selections) => {spec.item_type = selections}'

                      class='split-fourth-input'
                    />
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
                              {{schema.properties.upstream_components.items.properties.output_spec.items.properties.expected_values.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input v-model="spec.expected_values" type="text" class='split-fourth-input' />
                  </div>
                </div>  
                <div class='variable-input-btn-div'>
                  <sds-button variant="default" v-if='spec_index==0' @click="add_output_spec(component_index)">
                    Add Item
                  </sds-button>
                  <sds-button variant="default" v-if='spec_index!=0' @click="remove_output_spec(component_index, spec_index)">
                    Delete Item
                  </sds-button>
                </div>
              </div>
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='component_index==0' @click="add_upstream_component()">
              Add Component
            </sds-button>
            <sds-button variant="default" v-if='component_index!=0' @click="remove_upstream_component(component_index)">
              Delete Component
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="downstream_components"> <b> Downstream Components </b> - {{schema.properties.downstream_components.description}}</label>
        <div v-for="(item, component_index) in model.document.downstream_components" :key="component_index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='component_name' class='split-fourth-label'> Component Name </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Component Name
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.downstream_components.items.properties.component_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.component_name" type="text" class='split-fourth-input' />
              <label for='ml_component' class='split-fourth-label'> ML Component? </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        ML Component
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.downstream_components.items.properties.ml_component.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.ml_component" type="checkbox" class='' />           
            </div>

            <div class='input-line-div'>
              <div v-for='spec, spec_index in item.input_spec' :key='spec_index'>
                <div class='variable-input-parent-div'>
                  <div class='input-line-div'>
                    <label for='item_name' class='split-fourth-label'> Item Name </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Item Name
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.downstream_components.items.properties.input_spec.items.properties.item_name.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input v-model="spec.item_name" type="text" class='split-fourth-input' />
                    <label for='item_description' class='split-fourth-label'> Item Description </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Item Description
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.downstream_components.items.properties.input_spec.items.properties.item_description.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input v-model="spec.item_description" type="text" class='split-fourth-input'/>
                  </div>
                  <div class='input-line-div'>
                    <label for='item_type' class='split-fourth-label'> Item Type </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Item Type
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.downstream_components.items.properties.input_spec.items.properties.item_type.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <item-type-multiselect
                      :value='spec.item_type'
                      v-bind:multiple="false"

                      @updateSelected='(selections) => {spec.item_type = selections}'

                      class='split-fourth-input'
                    />
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
                              {{schema.properties.downstream_components.items.properties.input_spec.items.properties.expected_values.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input v-model="spec.expected_values" type="text" class='split-fourth-input' />
                  </div>
                </div>  
                <div class='variable-input-btn-div'>
                  <sds-button variant="default" v-if='spec_index==0' @click="add_input_spec(component_index)">
                    Add Item
                  </sds-button>
                  <sds-button variant="default" v-if='spec_index!=0' @click="remove_input_spec(component_index, spec_index)">
                    Delete Item
                  </sds-button>
                </div>
              </div>
            </div>

          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='component_index==0' @click="add_downstream_component()">
              Add Component
            </sds-button>
            <sds-button variant="default" v-if='component_index!=0' @click="remove_downstream_component(component_index)">
              Delete Component
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="milestones"> <b> Milestones </b> - {{schema.properties.milestones.description}}</label>
        <div class="input-div" v-for="(item, index) in model.document.milestones" :key="index">
          <div class='variable-input-parent-div'>
            <label for='milestone' class='split-fourth-label'> Milestone </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Milestone
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.milestones.items.properties.milestone.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.milestone" type="text" class='split-fourth-input' />
            <label for='milestone_data' class='split-fourth-label'> Milestone Date </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Milestone Date
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.milestones.items.properties.milestone_date.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.milestone_date" type="date" class='split-fourth-input' />
          </div>
          <sds-button variant="default" v-if='index==0' @click="add_milestone()" >
            Add Milestone
          </sds-button>
          <sds-button variant="default" v-if='index!=0' @click="remove_milestone(index)" >
            Delete Milestone
          </sds-button>
        </div>
      </div>

      <div class='input-div'>
        <label for="computing_resources"> <b> Available Computing Resources </b> - {{schema.properties.computing_resources.description}}</label>
        <br>
        <div class='input-line-div'>
          <label for='gpu' class='split-fourth-label'> GPUs </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    GPUs
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.computing_resources.properties.gpu.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resources.gpu" type="number" class='split-fourth-input'/>
          <label for='cpu' class='split-fourth-label'> CPUs </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    CPUs
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.computing_resources.properties.cpu.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resources.cpu" type="number" class='split-fourth-input'/>
        </div>
        <div class='input-line-div'>
          <label for='memory' class='split-fourth-label'> Memory </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Memory
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.computing_resources.properties.memory.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resources.memory" type="number" class='split-fourth-input' />
          <label for='storage' class='split-fourth-label'> Storage </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Storage
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.computing_resources.properties.storage.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resources.storage" type="number" class='split-fourth-input' />
        </div>
      </div>

      <div class='input-div'>
        <label for="documentation"> <b> Documentation </b> - {{schema.properties.documentation.description}}</label>
        <div class="input-div" v-for="(item, index) in model.document.documentation" :key="index">
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
            version: '1.0',
            programming_languages: [],
            ml_frameworks: [],
            upstream_components: [{
              component_name: '',
              output_spec: [{
                item_name: '',
                item_description: '',
                item_type: [],
                expected_values: '',
              }],
              ml_component: false,
            }],
            downstream_components: [{
              component_name: '',
              input_spec: [{
                item_name: '',
                item_description: '',
                item_type: [],
                expected_values: '',
              }],
              ml_component: false,
            }],
            milestones: [{
              milestone: '',
              milestone_date: '',
            }],
            computing_resources: {
              gpu: 0,
              cpu: 0,
              memory: 0,
              storage: 0,
            },
            documentation: [{
              description: '',
              location: '',
            }]
          }
        },

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
          descriptor_name: 'development_environment',
          document: JSON.parse(JSON.stringify(this.model.document))
        }

        post_json.document.programming_languages = []
        this.model.document.programming_languages.forEach(element => {
          post_json.document.programming_languages.push(element['value'])
        });

        post_json.document.ml_frameworks = []
        this.model.document.ml_frameworks.forEach(element => {
          post_json.document.ml_frameworks.push(element['value'])
        });

        post_json.document.upstream_components.forEach(component => {
          component.output_spec.forEach(spec => {
            spec.item_type = spec.item_type.length > 0 ? spec.item_type[0].value : '';
          })
        })

        post_json.document.downstream_components.forEach(component => {
          component.input_spec.forEach(spec => {
            spec.item_type = spec.item_type.length > 0 ? spec.item_type[0].value : '';
          })
        })
        
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
      

      add_upstream_component(){
        this.model.document.upstream_components.push({component_name: '', output_spec: [{item_name: '', item_description: '', item_type: [], expected_values: ''}], ml_component: false})
      },

      remove_upstream_component(index){
        this.model.document.upstream_components.splice(index, 1);
      },

      add_output_spec(component_index){
        this.model.document.upstream_components[component_index].output_spec.push({item_name: '', item_description: '', item_type: [], expected_values: ''})
      },

      remove_output_spec(component_index, spec_index){
        this.model.document.upstream_components[component_index].output_spec.splice(spec_index, 1)
      },

      add_downstream_component(){
        this.model.document.downstream_components.push({component_name: '', input_spec: [{item_name: '', item_description: '', item_type: [], expected_values: ''}], ml_component: false})
      },

      remove_downstream_component(index){
        this.model.document.downstream_components.splice(index, 1);
      },

      add_input_spec(component_index){
        this.model.document.downstream_components[component_index].input_spec.push({item_name: '', item_description: '', item_type: [], expected_values: ''});
      },

      remove_input_spec(component_index, spec_index){
        this.model.document.downstream_components[component_index].input_spec.splice(spec_index, 1)
      },

      add_milestone(){
        this.model.document.milestones.push({milestone: '', milestone_date: ''})
      },

      remove_milestone(index){
        this.model.document.milestones.splice(index, 1);
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
      this.page_title = this.project_name + ' - Development Environment'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },


    async fetch(){
      await this.$axios.post('/api/get_schema/development_environment_schema.json').then(response => {
        this.schema = response['data'];
      })

      let post_json = {'project_name': this.project_name, 'descriptor_name': 'development_environment'}
      await this.$axios.post('/api/documents/get_document', post_json).then(response => {
        if(response['data']['document'] != null){
          console.log(response['data'])
          this.model.document = JSON.parse(JSON.stringify(response['data']['document']))

          if(response['data']['version_updated']){
            this.$store.dispatch('generate_version_update_toast').then(toast => {
              this.toasts.unshift(toast);
            })
          }

          this.model.document.programming_languages = []
          response['data']['document']['programming_languages'].forEach(element => {
            this.model.document.programming_languages.push({id: element, value: element});
          });

          this.model.document.ml_frameworks = []
          response['data']['document']['ml_frameworks'].forEach(element => {
            this.model.document.ml_frameworks.push({id: element, value: element})
          });

          this.model.document.upstream_components.forEach(component => {
            component.output_spec.forEach(spec => {
              spec['item_type'] = [{id: spec['item_type'], value: spec['item_type']}]
            })
          })

          this.model.document.downstream_components.forEach(component => {
            component.input_spec.forEach(spec => {
              spec['item_type'] = [{id: spec['item_type'], value: spec['item_type']}]
            })
          })
        }
        else{
          console.log("No document found to load")
        }
      });
    },


    beforeRouteLeave (to, from , next) {
      this.$confirm_leave_form(next);
    }
  }
</script>