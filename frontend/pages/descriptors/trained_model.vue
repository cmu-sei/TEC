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
        <label for="model_name"> <b> Model Name </b> - {{schema.properties.model_name.description}} </label>
        <br>
        <input type="text" class='form-control' v-model="model.document.model_name" />
      </div>

      <div class='input-div'>
        <label for="version"> <b> Model Version </b> - {{schema.properties.model_version.description}} </label>
        <br>
        <input type="text" class="form-control" v-model="model.document.model_version" />
      </div>

      <div class='input-div'>
        <label for="model_description"> <b> Model Description </b> -  {{schema.properties.model_description.description}} </label>
        <br>
        <textarea type="text" class='form-control' v-model="model.document.model_description" />
      </div>

      <div class='input-div'>
        <label for="training_date"> <b> Training Date </b> - {{schema.properties.training_date.description}} </label>
        <br>
        <input type="date" class='form-control' v-model="model.document.training_date"/>
      </div>

      <div class='input-div'>
        <label for="model_components"> <b> Model Components </b> - {{schema.properties.model_components.description}} </label>
        <div v-for="(item, model_component_index) in model.document.model_components" :key="'MCI' + model_component_index" >
          <div class='variable-input-parent-div' style='border: 1px solid black'>
            <div class='input-line-div'>
              <div class='variable-input-parent-div py-0'>
              <label for='algorithm' class='split-fourth-label'> Learning Algorithm </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Learning Algorithm
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.model_components.items.properties.learning_algorithm.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <select v-model="item.learning_algorithm.algorithm" @change="learning_algorithm_change(model_component_index)" class='split-fourth-input' >
                <option v-for='(algorithm, select_index) in learning_algorithm_options' :value='algorithm' :key='"SI" + select_index'> {{algorithm}} </option>
              </select>
              <span v-if='item.learning_algorithm.algorithm === "Other"' class='inline'>
                <label for='other_algorithm' class='split-fourth-label'> Please Define Other </label>
                <div class='popover-container'>
                  <sds-popover>
                    <template #trigger>
                      <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                    </template>
                    <template #default>
                      <div class="popover-div">
                        <h3 class="popover-h3">
                          Other Algorithm
                        </h3>
                        <p class="popover-p">
                          {{schema.properties.model_components.items.properties.learning_algorithm.properties.other_algorithm.description}}
                        </p>
                      </div>
                    </template>
                  </sds-popover>
                </div>
                <input type='text' class='split-fourth-input' v-model='item.learning_algorithm.other_algorithm' />
              </span>
              </div>
            </div>
            <div class='input-line-div'>
              <div v-for="(parameter, parameter_index) in item.hyper_parameters" :key="'PI' + parameter_index">
                <div class='variable-input-parent-div py-0'>
                  <div class='input-line-div'>
                    <label for='name' class='split-fourth-label'> Hyperparameter Name </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Hyperparameter Name
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.model_components.items.properties.hyper_parameters.items.properties.parameter_name.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input type='text' class='split-fourth-input' v-model="parameter.parameter_name" />
                    <label for='value' class='split-fourth-label'> Hyperparameter Value </label>
                    <div class='popover-container'>
                      <sds-popover>
                        <template #trigger>
                          <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                        </template>
                        <template #default>
                          <div class="popover-div">
                            <h3 class="popover-h3">
                              Hyperparameter Value
                            </h3>
                            <p class="popover-p">
                              {{schema.properties.model_components.items.properties.hyper_parameters.items.properties.parameter_value.description}}
                            </p>
                          </div>
                        </template>
                      </sds-popover>
                    </div>
                    <input type='text' class='split-fourth-input' v-model="parameter.parameter_value" />
                  </div>
                </div>
                <div class='variable-input-btn-div'>
                  <button v-if='parameter_index==0' @click.prevent="add_hyper_parameter(model_component_index)" class="btn">
                    Add Parameter
                  </button>
                  <button v-if='parameter_index!=0' @click.prevent="remove_hyper_parameter(model_component_index, parameter_index)"  class="btn">
                    Delete Paremter
                  </button>
                </div>
              </div>
            </div>
            <div class='input-line-div'>
              <div class='variable-input-parent-div py-0'>
                <label for='language' class='split-fourth-label'> Programming Languages Used </label>
                <div class='popover-container'>
                  <sds-popover>
                    <template #trigger>
                      <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                    </template>
                    <template #default>
                      <div class="popover-div">
                        <h3 class="popover-h3">
                          Programming Languages Used
                        </h3>
                        <p class="popover-p">
                          {{schema.properties.model_components.items.properties.programming_languages.description}}
                        </p>
                      </div>
                    </template>
                  </sds-popover>
                </div>
                <programming-language-multiselect 
                  :value='item.programming_languages'
                  v-bind:multiple='true'

                  @updateSelected='(selections) => {item.programming_languages = selections}'

                  class='split-fourth-input'
                  style='width: 83.1%'
                />
              </div>
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='model_component_index==0' @click.prevent="add_model_component()" class='btn'>
              Add Component
            </button>
            <button v-if='model_component_index!=0' @click.prevent="remove_model_component(model_component_index)" class='btn'>
              Delete component
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <input type='checkbox' disabled v-model='model.document.ensemble'/>
        <label for='ensemble'> <b> Ensemble </b> - {{schema.properties.ensemble.description}} (trained model consists of more than one model component) </label>
      </div>

      <div class='input-div'>
        <label for="model_composition_details"> <b> Model Composition Details </b> - {{schema.properties.model_composition_details.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.model_composition_details" class="form-control" :disabled='! model.document.ensemble'/>
      </div>

      <div class='input-div'>
        <label for="ml_frameworks"> <b> ML Frameworks </b> - {{schema.properties.ml_frameworks.description}} </label>
        <ml-framework-multiselect
          :value='model.document.ml_frameworks'
          v-bind:multiple='true'

          @updateSelected='(selections) => {model.document.ml_frameworks = selections}'

          class='form-control'
        />
      </div>

      <div class='input-div'>
        <label for="data_pipeline_identifier"> <b> Data Pipeline Identifier </b> - {{schema.properties.data_pipeline_identifier.description}} </label>
        <br>
        <input type="text" v-model="model.document.data_pipeline_identifier" class="form-control" disabled/>
      </div>

      <div class='input-div'>
        <label for="training_data_identifier"> <b> Training Data Identifier </b> - {{schema.properties.training_data_identifier.description}} </label>
        <br>
        <input type="text" v-model="model.document.training_data_identifier" class="form-control" disabled/>
      </div>

      <div class='input-div'>
        <label for="output_spec"> <b> Output Specification </b> - {{schema.properties.output_spec.description}}</label>
        <div v-for="(item, spec_index) in model.document.output_spec" :key="spec_index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='name' class='split-fourth-label'> Data Item Name </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Data Item Name
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.output_spec.items.properties.item_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.item_name" />
              <label for='description' class='split-fourth-label'> Item Description </label>
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
                        {{schema.properties.output_spec.items.properties.item_description.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <textarea v-model="item.item_description" type="text" class='split-fourth-input' style='vertical-align: top'/>
            </div>
            <div class='input-line-div'>
              <label for='type' class='split-fourth-label'> Item Type </label>
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
                        {{schema.properties.output_spec.items.properties.item_type.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <item-type-multiselect
                :value='item.item_type'
                v-bind:multiple="false"

                @updateSelected='(selections) => {item.item_type = selections}'

                class='split-fourth-input'
              />
              <label for='expected_value' class='split-fourth-label'> Expected Value </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Expected Value
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.output_spec.items.properties.expected_values.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type='text' class='split-fourth-input' v-model="item.expected_values" />
            </div>
            <div class='input-line-div'>
              <label for='component' class='split-fourth-label'> Downstream Component in Development Environment </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Downstream Component in Development Environment
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.output_spec.items.properties.component_mapping.properties.component.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.component_mapping.component'
                :options='output_spec_component_options'
                v-bind:multiple='false'

                @updateSelected='update_output_spec_selected_component_mapping($event, spec_index)'

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
                        {{schema.properties.output_spec.items.properties.component_mapping.properties.data_item.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.component_mapping.data_item'
                :options='item.component_mapping.component.length < 1 ? [] : output_spec_data_item_options[output_spec_component_options.findIndex(option => option.key == item.component_mapping.component[0].key)]'
                v-bind:multiple='false'

                @updateSelected='(selections) => {item.component_mapping.data_item = selections}'

                class='split-fourth-input inline-block'
              />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='spec_index==0' @click.prevent="add_output_spec()" class='btn'>
              Add Output
            </button>
            <button v-if='spec_index!=0' @click.prevent="remove_output_spec(spec_index)" class='btn'>
              Delete Output
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <input type='checkbox' v-model='model.document.post_processing' @click='confirm_post_processing_change'/>
        <label for='post_processing'> Post Processing on model output </label>
      </div>

      <div class='input-div' >
        <label> <b> Post Processing Process </b> - {{schema.properties.post_processing_process.description}}</label>
        <div v-for="(item, index) in model.document.post_processing_process" :key="index" >
          <div class='variable-input-parent-div'>
            <textarea :disabled='!model.document.post_processing' v-model="item.value" type="text" class='form-control'/>
          </div>
          <div class='variable-input-btn-div'>
            <button :disabled='!model.document.post_processing' v-if='index==0' @click.prevent="add_post_processing_process()" class="btn">
              Add Step
            </button>
            <button :disabled='!model.document.post_processing' v-if='index!=0' @click.prevent="remove_post_processing_process(index)" class="btn">
              Delete Step
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="final_output_spec"> <b> Final Output Specification </b> - {{schema.properties.final_output_spec.description}}</label>
        <div v-for="(item, spec_index) in model.document.final_output_spec" :key="spec_index">
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
                        {{schema.properties.final_output_spec.items.properties.item_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input :disabled='!model.document.post_processing' v-model="item.item_name" type="text" class='split-fourth-input' />
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
                        {{schema.properties.final_output_spec.items.properties.item_description.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <textarea :disabled='!model.document.post_processing' v-model="item.item_description" type="text" class='split-fourth-input' style='vertical-align: top'/>
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
                        {{schema.properties.final_output_spec.items.properties.item_type.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <item-type-multiselect
                :value='item.item_type'
                v-bind:multiple="false"
                :disabled='!model.document.post_processing'
                @updateSelected='(selections) => {item.item_type = selections}'

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
                        {{schema.properties.final_output_spec.items.properties.expected_values.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input :disabled='!model.document.post_processing' v-model="item.expected_values" type="text" class='split-fourth-input' />
            </div>
            <div class='input-line-div'>
              <label for='component' class='split-fourth-label'> Downstream Component in Development Environment </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Downstream Component in Development Environment
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.final_output_spec.items.properties.component_mapping.properties.component.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.component_mapping.component'
                :options='output_spec_component_options'
                v-bind:multiple='false'
                :disabled='!model.document.post_processing'
                @updateSelected='update_final_output_spec_selected_component_mapping($event, spec_index)'

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
                        {{schema.properties.final_output_spec.items.properties.component_mapping.properties.data_item.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.component_mapping.data_item'
                :options='item.component_mapping.component.length < 1 ? [] : output_spec_data_item_options[ output_spec_component_options.findIndex(option => option.key == item.component_mapping.component[0].key) ]'
                v-bind:multiple='false'
                :disabled='!model.document.post_processing'
                @updateSelected='(selections) => {item.component_mapping.data_item = selections}'

                class='split-fourth-input inline-block'
              />
            </div>  
          </div>
          <div class='variable-input-btn-div'>
            <button :disabled='!model.document.post_processing' v-if='spec_index==0' @click.prevent="add_final_output_spec()" class='btn'>
              Add Output
            </button>
            <button :disabled='!model.document.post_processing' v-if='spec_index!=0' @click.prevent="remove_final_output_spec(spec_index)" class='btn'>
              Delete Output
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label> <b> Error Handling </b> - {{schema.properties.error_handling.description}}</label>
        <div v-for="(error, index) in model.document.error_handling" :key="index">
          <div class='variable-input-parent-div'>
            <label for='error_condition' class='split-fourth-label'> Error Condition </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Error Condition
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.error_handling.items.properties.error_condition.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="error.error_condition" type="text" class='split-fourth-input' />
            <label for='how_handled' class='split-fourth-label'> How Handled </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      How Handled
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.error_handling.items.properties.how_handled.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea v-model="error.how_handled" type="text" class='split-fourth-input' style='vertical-align: top'/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_error()" class="btn">
              Add Error Condition
            </button>
            <button v-if='index!=0' @click.prevent="remove_error(index)" class="btn">
              Delete Error Condition
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="evaluation_dataset"> <b> Evaluation Dataset </b> - {{schema.properties.evaluation_dataset.description}}</label>
        <br>
        <div class='input-line-div'>
            <label for='name' class='split-fourth-label'> Name </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Name
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.evaluation_dataset.properties.name.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model="model.document.evaluation_dataset.name" />
            <label for='holdout_percentage' class='split-fourth-label'> Holdout Percentage </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Holdout Percentage
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.evaluation_dataset.properties.holdout_percentage.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='number' min='0' max='100' class='split-fourth-input' v-model.number="model.document.evaluation_dataset.holdout_percentage"/>
        </div>
        <div class='input-line-div'>
          <label for='seed' class='split-fourth-label'> Seed </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Seed
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.evaluation_dataset.properties.seed.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='number' class='split-fourth-input' v-model.number="model.document.evaluation_dataset.seed"/>
          <label for='Algorithm' class='split-fourth-label'> Algorithm </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Algorithm
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.evaluation_dataset.properties.algorithm.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.evaluation_dataset.algorithm" />
        </div>
          <div class='input-line-div'>
          <label for='file' class='split-fourth-label'> File or Folder (URI) </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    File or Folder (URI)
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.evaluation_dataset.properties.file.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.evaluation_dataset.file" />
        </div>
      </div>

      <div class='input-div'>
        <label for="evaluation_metrics"> <b> Evaluation Metrics </b> - {{schema.properties.evaluation_metrics.description}}</label>
        <div v-for="(item, index) in model.document.evaluation_metrics" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='metric' class='split-fourth-label'> Metric </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Metric
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.evaluation_metrics.items.properties.metric.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <select class="split-fourth-input" name="evaluation-metric" v-model="item.metric" @change="evaluation_metric_change(index)">
                <option v-for='(metric, index2) in evaluation_metrics_options' :value='metric' :key='index2' class='w-3/12'> {{metric}} </option>
              </select>
              <label v-if='item.metric === "Other"' for='other' class='split-fourth-label'> Other Metric </label>
              <div v-if='item.metric === "Other"' class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Other Metric
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.evaluation_metrics.items.properties.other_metric.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-if='item.metric === "Other"' type='text' class='split-fourth-input' v-model='item.other_metric' />
              <br>
            </div>
            <div class='input-line-div'>
              <label for='result' class='split-fourth-label'> Result </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Result
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.evaluation_metrics.items.properties.result.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type="text" class='split-fourth-input' v-model.number="item.result"/>
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_evaluation_metric()" class='btn'>
              Add Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_evaluation_metric(index)" class='btn'>
              Delete Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="test_dataset"> <b> Test Dataset </b> - {{schema.properties.test_dataset.description}}</label>
        <br>
        <div class='input-line-div'>
          <label for='name' class='split-fourth-label'> Name </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Name
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.test_dataset.properties.name.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.test_dataset.name" />
          <label for='description' class='split-fourth-label'> Test Results </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Test Results
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.test_dataset.properties.test_results.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.test_dataset.test_results" />
        </div>
        <div class='input-line-div'>
          <label for='file' class='split-fourth-label'> File or Folder (URI) </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    File or Folder (URI) 
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.test_dataset.properties.file.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.test_dataset.file"  />
        </div>
      </div>

      <div class='input-div'>
        <label for="integration_test_dataset"> <b> Integration Test Dataset </b> - {{schema.properties.integration_test_dataset.description}}</label>
        <br>
        <div class='input-line-div'>
          <label for='name' class='split-fourth-label'> Name </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Name
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.integration_test_dataset.properties.name.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.integration_test_dataset.name" />
          <label for='test_results' class='split-fourth-label'> Test Results </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Test Results
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.integration_test_dataset.properties.test_results.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.integration_test_dataset.test_results"/>
        </div>
        <div class='input-line-div'>
          <label for='file' class='split-fourth-label'> File or Folder (URI) </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    File or Folder (URI) 
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.integration_test_dataset.properties.file.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='text' class='split-fourth-input' v-model="model.document.integration_test_dataset.file"/>
        </div>
      </div>

      <div class='input-div'>
        <label for="test_metrics"> <b> Test Metrics </b> - {{schema.properties.test_metrics.description}}</label>
        <div v-for="(item, index) in model.document.test_metrics" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='metric' class='split-fourth-label'> Metric </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Metric
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.test_metrics.items.properties.metric.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <select class="split-fourth-input" name="test-metric" v-model="item.metric" @change="test_metric_change(index)">
                <option v-for='(metric, index2) in test_metrics_options' :value='metric' :key='index2' class='w-3/12'> {{metric}} </option>
              </select>
              <label v-if='item.metric === "Other"' for='other' class='split-fourth-label'> Other Metric </label>
              <div v-if='item.metric === "Other"' class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Other Metric
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.test_metrics.items.properties.other_metric.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-if='item.metric === "Other"' type='text' class='split-fourth-input' v-model='item.other_metric' />
            </div>
            <div class='input-line-div'>
              <label for='result' class='split-fourth-label'> Result </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Result
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.test_metrics.items.properties.result.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input type="text" v-model.number="item.result" class="split-fourth-input" />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_test_metric()" class='btn'>
              Add Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_test_metric(index)" class='btn'>
              Delete Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="model_output_interpretation"> <b> Model Output Interpretation </b> - {{schema.properties.model_output_interpretation.description}} </label>
        <br>
        <textarea type="text" class='form-control' v-model="model.document.model_output_interpretation" />
      </div>
      
      <div class='input-div'>
        <label for="default_model_output"> <b> Default Model Output </b> - {{schema.properties.default_model_output.description}} </label>
        <br>
        <input type="text" class="form-control" v-model="model.document.default_model_output" />
      </div>

      <div class='input-div'>
        <label for="algorithm_metrics"> <b> Algorithm Metrics </b> - {{schema.properties.algorithm_metrics.description}}</label>
        <div v-for="(item, index) in model.document.algorithm_metrics" :key="index">
          <div class='variable-input-parent-div'>
            <label for='metric' class='split-fourth-label'> Algorithm Metric </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Algorithm Metric
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.algorithm_metrics.items.properties.metric.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model="item.metric" type="text" class='split-fourth-input' />
            <label for='metric' class='split-fourth-label'> Threshold for Notification </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Threshold for Notification
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.algorithm_metrics.items.properties.threshold.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input v-model.number="item.threshold" type="number" class='split-fourth-input' />
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_algorithm_metric()" class='btn'>
              Add Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_algorithm_metric(index)" class='btn'>
              Delete Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="business_metrics"> <b> Business Metrics </b> - {{schema.properties.business_metrics.description}}</label>
        <div v-for="(item, index) in model.document.business_metrics" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='metric' class='split-fourth-label'> Business Metric </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Business Metric
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.business_metrics.items.properties.metric.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.metric" type="text" class='split-fourth-input' />
              <label for='metric' class='split-fourth-label'> Threshold for Notification </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Threshold for Notification
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.business_metrics.items.properties.threshold.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model.number="item.threshold" type="number" class='split-fourth-input'/>
            </div>
            <div class='input-line-div'>
              <label for='metric' class='split-fourth-label'> Business Goal Mapping </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Business Goal Mapping
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.business_metrics.items.properties.business_goal_mapping.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <general-multiselect
                :value='item.business_goal_mapping'
                :options='business_goal_options'
                v-bind:multiple='false'

                @updateSelected='(selections) => {item.business_goal_mapping = selections}'

                class='split-fourth-input inline-block'
              />
            </div>
          </div>
          
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_business_metric()" class='btn'>
              Add Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_business_metric(index)" class='btn'>
              Delete Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label> <b> User and System Feedback </b> - {{schema.properties.user_system_feedback.description}} </label>
        <div v-for="(feedback, index) in model.document.user_system_feedback" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='short_name' class='split-fourth-label'> Short Name </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Short Name
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.user_system_feedback.items.properties.short_name.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="feedback.short_name" type="text" class='split-fourth-input' />
              <label for='details' class='split-fourth-label'> Details </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Details
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.user_system_feedback.items.properties.details.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <textarea v-model.number="feedback.details" type="text" class='split-fourth-input' style='vertical-align: top'/>
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_user_system_feedback()" class='btn'>
              Add Feedback
            </button>
            <button v-if='index!=0' @click.prevent="remove_user_system_feedback(index)" class='btn'>
              Delete Feedback
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="log_data"> <b> Log Data </b> - {{schema.properties.log_data.description}}</label>
        <div v-for="(item, index) in model.document.log_data" :key="index">
          <div class='variable-input-parent-div'>
            <div class='input-line-div'>
              <label for='data' class='split-fourth-label'> Data to Log </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Data to Log
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.log_data.items.properties.log.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.log" type="text" class='split-fourth-input' />
              <label for='format' class='split-fourth-label'> Log Data Format </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Log Data Format
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.log_data.items.properties.log_data_format.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.log_data_format" type="text" class='split-fourth-input'/>
            </div>
            <div class='input-line-div'>
              <label for='history' class='split-fourth-label'> History </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        History
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.log_data.items.properties.history.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="item.history" type="text" class='split-fourth-input' />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_log_data()" class='btn'> 
              Add Log Data
            </button>
            <button v-if='index!=0' @click.prevent="remove_log_data(index)" class='btn'>
              Delete Log Data
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="data_buffering_reqs"> <b> Data Buffering Requirements </b> - {{schema.properties.data_buffering_reqs.description}} </label>
        <br>
        <textarea type="text" class='form-control' v-model="model.document.data_buffering_reqs" />
      </div>

      <div class='input-div'>
        <label> <b> Decisions and Assumptions </b> - {{schema.properties.decisions_assumptions.description}} </label>
        <div v-for="(item, index) in model.document.decisions_assumptions" :key="index">
          <div class='variable-input-parent-div'>
            <textarea v-model="item.value" type="text" class='form-control'/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_decisions_assumptions()" class='btn'>
              Add Assumption
            </button>
            <button v-if='index!=0' @click.prevent="remove_decisions_assumptions(index)" class='btn'>
              Delete Assumption
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="computing_resource_reqs"> <b> Computing Resource Requirements </b> - {{schema.properties.computing_resource_reqs.description}}</label>
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
                    {{schema.properties.computing_resource_reqs.properties.gpu.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resource_reqs.gpu" type="number" class='split-fourth-input'/>
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
                    {{schema.properties.computing_resource_reqs.properties.cpu.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resource_reqs.cpu" type="number" class='split-fourth-input'/>
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
                    {{schema.properties.computing_resource_reqs.properties.memory.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resource_reqs.memory" type="number" class='split-fourth-input' />
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
                    {{schema.properties.computing_resource_reqs.properties.storage.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input v-model.number="model.document.computing_resource_reqs.storage" type="number" class='split-fourth-input' />
        </div>
      </div>

      <div class='input-div'>
        <label for="inference_time"> <b> Inference Time </b> - {{schema.properties.inference_time.description}}</label>
        <br>
        <label for='inference_time' class='split-fourth-label'> Inference Time</label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Inference Time
                </h3>
                <p class="popover-p">
                  {{schema.properties.inference_time.properties.time.description}}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <input v-model.number="model.document.inference_time.time" type="number" class='split-fourth-input'/>
        <label for='data' class='split-fourth-label'> Unit </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Unit
                </h3>
                <p class="popover-p">
                  {{schema.properties.inference_time.properties.unit.description}}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <general-multiselect
            :value="model.document.inference_time.unit"
            :options="unit_options"
            :multiple="false"

            @updateSelected="(selections) => {model.document.inference_time.unit = selections}"

            class="split-fourth-input"
          />
      </div>

      <div class='input-div'>
        <label> <b> System Dependencies </b> - {{schema.properties.system_dependencies.description}} </label>
        <div v-for="(parameter, index) in model.document.system_dependencies" :key="index">
          <div class='variable-input-parent-div'>
            <input v-model="parameter.value" type="text" class='form-control'/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_system_dependency()" class='btn'>
              Add Dependency
            </button>
            <button v-if='index!=0' @click.prevent="remove_system_dependency(index)" class='btn'>
              Delete Dependency
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label> <b> Model Training Code </b> - {{schema.properties.model_training_code.description}} </label>
        <br>
        <input type="text" class='form-control' v-model="model.document.model_training_code" />
      </div>

      <div class='input-div'>
        <label> <b> Trained Model Code </b> - {{schema.properties.trained_model_code.description}} </label>
        <br>
        <input type="text" class='form-control' v-model="model.document.trained_model_code" />
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
            model_name: '',
            model_version: '',
            model_description: '',
            training_date: '',
            ensemble: false,
            model_components: [{
              learning_algorithm: {
                algorithm: '',
                other_algorithm: ''
              },
              hyper_parameters: [{
                parameter_name: '', 
                parameter_value: ''
              }],
              programming_languages: [],
            }],
            model_composition_details: '',
            ml_frameworks: [],
            data_pipeline_identifier: '',
            training_data_identifier: '',
            output_spec: [{
              item_name: '', 
              item_description: '', 
              item_type: [], 
              expected_values: '',
              component_mapping: {
                component: [],
                data_item: [],
              }
            }],
            post_processing: false,
            post_processing_process: [{
              value: '',
            }],
            final_output_spec: [{
              item_name: '',
              item_description: '',
              item_type: [],
              expected_values: '',
              component_mapping: {
                component: [],
                data_item: [],
              }
            }],
            error_handling: [{
              error_condition: '',
              how_handled: '',
            }],
            evaluation_dataset: {
              name: '', 
              holdout_percentage: 0, 
              seed: 0,
              algorithm: '',
              file: ''
            },
            evaluation_metrics: [{
              metric: '', 
              other_metric: '', 
              result: 0
            }],
            test_dataset: {
              name: '',
              test_results: '',
              file: ''
            },
            integration_test_dataset: {
              name: '',
              test_results: '',
              file: ''
            },
            test_metrics: [{
              metric: '', 
              other_metric: '', 
              result: 0
            }],
            model_output_interpretation: '',
            default_model_output: '',
            algorithm_metrics: [{
              metric: '',
              threshold: 0,
            }],
            business_metrics: [{
              metric: '',
              threshold: 0,
              business_goal_mapping: [],
            }],
            user_system_feedback: [{
              short_name: '',
              details: '',  
            }],
            log_data: [{
              log: '',
              log_data_format: '',
              history: ''
            }],
            data_buffering_reqs: '',
            decisions_assumptions: [{value: ''}],
            computing_resource_reqs: {
              gpu: 0,
              cpu: 0,
              memory: 0,
              storage: 0
            },
            inference_time: {
              time: 0,
              unit: [],
            },
            system_dependencies: [{value: ''}],
            model_training_code: '',
            trained_model_code: '',
            documentation: [{
              description: '',
              location: ''
            }]
          },
        },

        learning_algorithm_options: [],

        output_spec_component_options: [],
        output_spec_data_item_options: [],

        evaluation_metrics_options: [],
        test_metrics_options: [],
        business_goal_options: [],
        unit_options: [],

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
            autoHideDelay: 10000
          },

        ],
      }
    },

    methods: {
      async submit () {
        console.log(this.model);
        let post_json = {
          project_name: this.project_name,
          descriptor_name: 'trained_model',
          document: JSON.parse(JSON.stringify(this.model.document))
        }      

        for(let i = 0; i < post_json.document.model_components.length; i++){
          post_json.document.model_components[i].programming_languages = []
          this.model.document.model_components[i].programming_languages.forEach(element => {
            post_json.document.model_components[i].programming_languages.push(element['value']);
          });
        }

        post_json.document.ml_frameworks = []
        this.model.document.ml_frameworks.forEach(element => {
          post_json.document.ml_frameworks.push(element.value)
        });

        post_json.document.output_spec.forEach(spec => {
          spec.item_type = spec.item_type.length > 0 ? spec.item_type[0].value : '';
          spec.component_mapping.component = spec.component_mapping.component.length > 0 ? spec.component_mapping.component[0].value : '';
          spec.component_mapping.data_item = spec.component_mapping.data_item.length > 0 ? spec.component_mapping.data_item[0].value : '';
        });  

        post_json.document.post_processing_process = []
        this.model.document.post_processing_process.forEach(element => {
          post_json.document.post_processing_process.push(element.value)
        });

        post_json.document.final_output_spec.forEach(spec => {
          spec.item_type = spec.item_type.length > 0 ? spec.item_type[0].value : '';
          spec.component_mapping.component = spec.component_mapping.component.length > 0 ? spec.component_mapping.component[0].value : '';
          spec.component_mapping.data_item = spec.component_mapping.data_item.length > 0 ? spec.component_mapping.data_item[0].value : '';
        });
        
        post_json.document.decisions_assumptions = []
        this.model.document.decisions_assumptions.forEach(element => {
          post_json.document.decisions_assumptions.push(element.value)
        });

        post_json.document.business_metrics.forEach(metric => {
          if(metric.business_goal_mapping.length > 0 && metric.business_goal_mapping[0].hasOwnProperty('key')){
            metric.business_goal_mapping = metric.business_goal_mapping[0].key
          }
          else{
            metric.business_goal_mapping = ''
          }
        })

        post_json.document.inference_time.unit = post_json.document.inference_time.unit.length > 0 ? post_json.document.inference_time.unit[0].value : '';

        post_json.document.system_dependencies = []
        this.model.document.system_dependencies.forEach(element => {
          post_json.document.system_dependencies.push(element.value)
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


      confirm_post_processing_change(event){
        if(this.model.document.post_processing){
          if(confirm("This will clear all of the Post Processing Process and Final Output Specification items. Do you want to continue?")){
            this.model.document.post_processing_process = [{value: ''}];
            this.model.document.final_output_spec = [{
              item_name: '',
              item_description: '',
              item_type: [],
              expected_values: '',
              component_mapping: {
                component: [],
                data_item: [],
              }
            }]
          }
          else{
            event.preventDefault();
            return false;
          }
        }
      },


      update_output_spec_selected_component_mapping(selections, spec_index){
        this.model.document.output_spec[spec_index].component_mapping.component = selections;
        this.model.document.output_spec[spec_index].component_mapping.data_item = []
      },

      update_final_output_spec_selected_component_mapping(selections, spec_index,){
        this.model.document.final_output_spec[spec_index].component_mapping.component = selections;
        this.model.document.final_output_spec[spec_index].component_mapping.data_item = []
      },


      add_model_component(){
        let empty_model_component = {
          learning_algorithm: {
            algorithm: '',
            other_algorithm: ''
          },
          hyper_parameters: [{parameter_name: '', parameter_value: ''}],
          programming_languages: [],
        }
        this.model.document.model_components.push(empty_model_component);
        this.model.document.ensemble = true;
      },


      add_hyper_parameter(model_component_index) {
        this.model.document.model_components[model_component_index].hyper_parameters.push({parameter_name: '', parameter_value: ''});
      },


      add_output_spec() {
        this.model.document.output_spec.push({item_name: '', item_description: '', item_type: [], expected_values: '', component_mapping: {component: [], data_item: []}});

      },

      remove_output_spec(spec_index) {
        this.model.document.output_spec.splice(spec_index, 1);
      },

      add_post_processing_process(){
        this.model.document.post_processing_process.push({value: ''});
      },

      add_final_output_spec(){
        this.model.document.final_output_spec.push({item_name: '', item_description: '', item_type: [], expected_values: '', component_mapping: {component: [], data_item: []}});
      },

      remove_final_output_spec(spec_index){
        this.model.document.final_output_spec.splice(spec_index, 1);
      },

      add_error() {
        this.model.document.error_handling.push({error_condition: '', how_handled: ''});
      },

      add_evaluation_metric(){
        this.model.document.evaluation_metrics.push({metric: '', other_metric: '', result: 0})
      },

      add_test_metric(){
        this.model.document.test_metrics.push({metric: '', other_metric: '', result: 0})
      },

      add_algorithm_metric(){
        this.model.document.algorithm_metrics.push({metric: '', threshold: 0})
      },

      add_business_metric(){
        this.model.document.business_metrics.push({metric: '', threshold: 0, business_goal_mapping: []})
      },

      add_user_system_feedback(){
        this.model.document.user_system_feedback.push({short_name: '', details: ''})
      },

      add_log_data(){
        this.model.document.log_data.push({log: '', format: '', history: ''})
      },

      add_decisions_assumptions(){
        this.model.document.decisions_assumptions.push({value: ''})
      },

      add_system_dependency(){
        this.model.document.system_dependencies.push({value: ''})
      },

      add_documentation() {
        this.model.document.documentation.push({description: '', location: ''});
      },

      remove_model_component(index){
        this.model.document.model_components.splice(index, 1);
        if(this.model.document.model_components.length == 1){
          this.model.document.ensemble = false;
        }
      },

      remove_hyper_parameter(model_component_index, parameter_index) {
        this.model.document.model_components[model_component_index].hyper_parameters.splice(parameter_index, 1);
      },

      remove_post_processing_process(index) {
        this.model.document.post_processing_process.splice(index, 1);
      },

      remove_error(index) {
        this.model.document.error_handling.splice(index, 1);
      },

      remove_evaluation_metric(index){
        this.model.document.evaluation_metrics.splice(index, 1);
      },

      remove_test_metric(index){
        this.model.document.test_metrics.splice(index, 1);
      },

      remove_algorithm_metric(index){
        this.model.document.algorithm_metrics.splice(index, 1);
      },

      remove_business_metric(index){
        this.model.document.business_metrics.splice(index, 1);
      },

      remove_user_system_feedback(index){
        this.model.document.user_system_feedback.splice(index, 1);
      },

      remove_log_data(index){
        this.model.document.log_data.splice(index, 1);
      },

      remove_decisions_assumptions(index){
        this.model.document.decisions_assumptions.splice(index, 1);
      },

      remove_system_dependency(index){
        this.model.document.system_dependencies.splice(index, 1);
      },

      remove_documentation(index) {
        this.model.document.documentation.splice(index, 1);
      },

      learning_algorithm_change(model_component_index){
        this.model.document.model_components[model_component_index].learning_algorithm.other_algorithm = '';
      },

      evaluation_metric_change(index){
        this.model.document.evaluation_metrics[index].other_metric = '';
      },

      test_metric_change(index){
        this.model.document.test_metrics[index].other_metric = '';
      },
    },


    async validate({query, store}){
      return await store.dispatch('validate_project_name', {project_name: query['project_name']});
    },


    created(){
      this.project_name = this.$route.query['project_name']
      this.page_title = this.project_name + ' - Trained Model'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },


    async fetch(){
      await this.$axios.post('/api/get_schema/trained_model_schema.json').then((promise) => {
        this.schema = promise['data'];
        this.learning_algorithm_options = this.schema['properties']['model_components']['items']['properties']['learning_algorithm']['properties']['algorithm']['enum']
        this.evaluation_metrics_options = this.schema['properties']['evaluation_metrics']['items']['properties']['metric']['enum']
        this.test_metrics_options = this.schema['properties']['test_metrics']['items']['properties']['metric']['enum']
        this.schema['properties']['inference_time']['properties']['unit']['enum'].forEach(unit => {
          this.unit_options.push({id: unit, value: unit});
        })
      });

      // Bringing in the linked sytstem_context fields
      // business_metrics links to a business_goal in system_context
      let sc_post_json = {'project_name': this.project_name, 'descriptor_name': 'system_context'}
      let sc_document = {}
      await this.$axios.post('/api/documents/get_document', sc_post_json).then(response => {
        if(response['data']['document'] != null){
          sc_document = response['data']['document']

          sc_document['business_goals'].forEach(goal => {
            let option = goal.id + ' - ' + goal.goal
            this.business_goal_options.push({key: goal.id, value: option})
          });
        }
      });

      // Bringing in the linked development_environment fields
      // output_spec and final_output_spec have component and data item options imported from downstream_components in development_environment
      let de_post_json = {'project_name': this.project_name, 'descriptor_name': 'development_environment'}
      await this.$axios.post('/api/documents/get_document', de_post_json).then(response => {
        if(response.data.document != null){
          response.data.document.downstream_components.forEach(component => {
            if(component.component_name != ''){
              this.output_spec_component_options.push({key: component.component_name, value: component.component_name})

              let component_data_items = []
              component.input_spec.forEach(spec => {
                if(spec.item_name != ''){
                  component_data_items.push({key: spec.item_name, value: spec.item_name})
                }
              });
              this.output_spec_data_item_options.push(component_data_items)
            }
          }); 
        }
      });

      let tm_post_json = {'project_name': this.project_name, 'descriptor_name': 'trained_model'}
      await this.$axios.post('/api/documents/get_document', tm_post_json).then(response => {
        if(response['data']['document'] != null){
          response['data']['document'] = response['data']['document']
          this.model.document = JSON.parse(JSON.stringify(response['data']['document']))
        
          for(let i = 0; i < response['data']['document']['model_components'].length; i++){
            this.model.document.model_components[i].programming_languages = []
            response['data']['document']['model_components'][i]['programming_languages'].forEach(element => {
              this.model.document.model_components[i].programming_languages.push({id: element, value: element});
            });
          }

          this.model.document.ml_frameworks = []
          response['data']['document']['ml_frameworks'].forEach(element => {
            this.model.document.ml_frameworks.push({id: element, value: element})
          })

          this.model.document['output_spec'].forEach(spec => {
            spec.item_type = [{key: spec.item_type, value: spec.item_type}]
            spec.component_mapping.component = [{key: spec.component_mapping.component, value: spec.component_mapping.component}]
            spec.component_mapping.data_item = [{key: spec.component_mapping.data_item, value: spec.component_mapping.data_item}]
          });

          this.model.document['final_output_spec'].forEach(spec => {
            spec.item_type = [{key: spec.item_type, value: spec.item_type}]
            spec.component_mapping.component = [{key: spec.component_mapping.component, value: spec.component_mapping.component}]
            spec.component_mapping.data_item = [{key: spec.component_mapping.data_item, value: spec.component_mapping.data_item}]
          });

          this.model.document.post_processing_process = []
          response['data']['document']['post_processing_process'].forEach(element => {
            this.model.document.post_processing_process.push({value: element});
          });

          // Using the descriptor forms this should never need to be validated, but in case the user 
          // imports a document with the business goals not working as expected this will prevent errors
          // TODO : When I add the submit validation to descriptor imports, delete this validation and just adjust
          // the fields to the vue format
          let system_context_business_goals = {}
          let system_context_business_goals_ids = []
          if(Object.keys(sc_document).length > 0){
            system_context_business_goals = sc_document['business_goals'];
            system_context_business_goals_ids = sc_document['business_goals'].map(( {id} ) => id);
          }
          this.model.document['business_metrics'].forEach(metric => {
            if(! system_context_business_goals_ids.includes(metric['business_goal_mapping'])){
              if(metric['business_goal_mapping'] != ''){
                let temp_toast = {
                  id: 100,
                  variant: 'warning',
                  title: 'Loading Error',
                  text: "The Business Goal: " + metric['business_goal_mapping'] + " is no longer available in System Context. The mapping has been cleared.",
                  autoHideDelay: 5000
                }
                this.toasts.unshift(temp_toast)
              }
              metric.business_goal_mapping = []
            }
            else {
              let matched_goal = system_context_business_goals.find( goal => goal.id === metric.business_goal_mapping)
              metric.business_goal_mapping = [{key: metric.business_goal_mapping, value: metric.business_goal_mapping + " - " + matched_goal['goal']} ]
            }
          })

          this.model.document.inference_time.unit = [{id: this.model.document.inference_time.unit, value: this.model.document.inference_time.unit}]

          this.model.document.decisions_assumptions = []
          response['data']['document']['decisions_assumptions'].forEach(element => {
            this.model.document.decisions_assumptions.push({value: element});
          });

          this.model.document.system_dependencies = []
          response['data']['document']['system_dependencies'].forEach(element => {
            this.model.document.system_dependencies.push({value: element});
          });
        }
        else{
          console.log("No document found to load")
          this.model.document.version = this.schema['properties']['version']['const']
        }
      });

      // Bringing in the linked field from Data Pipeline
      let dp_post_json = {'project_name': this.project_name, 'descriptor_name': 'data_pipeline'}
      await this.$axios.post('/api/documents/get_document', dp_post_json).then(response => {
        if(response.data.document != null){
          this.model.document.data_pipeline_identifier = response.data.document.pipeline_identifier
        }
      });

      // Bringing in the linked field from Training Data
      let td_post_json = {'project_name': this.project_name, 'descriptor_name': 'training_data'}
      await this.$axios.post('/api/documents/get_document', td_post_json).then(response => {
        if(response.data.document != null){
          console.log(response.data.document)
          this.model.document.training_data_identifier = response.data.document.dataset_identifier
        }
      });
    },
    

    beforeRouteLeave (to, from , next) {
      this.$confirm_leave_form(next);
    }
  }
</script>