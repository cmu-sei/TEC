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
        <label for="required_inference_time"> <b> Required Inference Time </b> - {{schema.properties.required_inference_time.description}}</label>
        <br>
        <div class='variable-input-parent-div'>
          <label for='time' class='split-fourth-label'> Time </label>
          <div class='popover-container'>
            <sds-popover>
              <template #trigger>
                <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
              </template>
              <template #default>
                <div class="popover-div">
                  <h3 class="popover-h3">
                    Time
                  </h3>
                  <p class="popover-p">
                    {{schema.properties.required_inference_time.properties.time.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <input type='number' class='split-fourth-input' v-model.number='model.document.required_inference_time.time' />
          <label for='unit' class='split-fourth-label'> Unit </label>
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
                    {{schema.properties.required_inference_time.properties.unit.description}}
                  </p>
                </div>
              </template>
            </sds-popover>
          </div>
          <general-multiselect
            :value="model.document.required_inference_time.unit"
            :options="unit_options"
            :multiple="false"

            @updateSelected="(selections) => {model.document.required_inference_time.unit = selections}"

            class="split-fourth-input"
          />
        </div>
      </div>

      <div class='input-div'>
        <label for="computing_resources"> <b> Computing Resources </b> - {{schema.properties.computing_resources.description}}</label>
        <br>
        <div class='variable-input-parent-div'>
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
            <label for='gpu' class='split-fourth-label'> Storage </label>
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
      </div>

      <div class='input-div'>
        <label for="algorithm_metrics"> <b> Algorithm Metrics </b> - {{schema.properties.algorithm_metrics.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.algorithm_metrics" :key="index">
          <div class='variable-input-parent-div'>
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
                      {{schema.properties.algorithm_metrics.items.properties.metric.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <general-multiselect
              :value="item.metric"
              :options="algorithm_metric_options"
              :multiple="false"

              @updateSelected="(selections) => {item.metric = selections}"

              class="split-fourth-input"
            />
            <label for='implementation' class='split-fourth-label'> Implementation </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Implementation
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.algorithm_metrics.items.properties.implementation.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top' v-model="item.implementation"/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_algorithm_metric()" class="btn">
              Add Algorithm Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_algorithm_metric(index)" class="btn">
              Delete Algorithm Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="business_metrics"> <b> Business Metrics </b> - {{schema.properties.business_metrics.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.business_metrics" :key="index">
          <div class='variable-input-parent-div'>
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
                      {{schema.properties.business_metrics.items.properties.metric.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <general-multiselect
              :value="item.metric"
              :options="business_metric_options"
              :multiple="false"

              @updateSelected="(selections) => {item.metric = selections}"

              class="split-fourth-input"
            />
            <label for='implementation' class='split-fourth-label'> Implementation </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Implementation
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.business_metrics.items.properties.implementation.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top' v-model="item.implementation"/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_business_metric()" class='btn'>
              Add Business Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_business_metric(index)" class='btn'>
              Delete Business Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="other_metrics"> <b> Other Metrics </b> - {{schema.properties.other_metrics.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.other_metrics" :key="index">
          <div class='variable-input-parent-div'>
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
                      {{schema.properties.other_metrics.items.properties.metric.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model="item.metric" />
            <label for='implementation' class='split-fourth-label'> Implementation </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Implementation
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.other_metrics.items.properties.implementation.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top' v-model="item.implementation"/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_other_metric()" class='btn'>
              Add Other Metric
            </button>
            <button v-if='index!=0' @click.prevent="remove_other_metric(index)" class='btn'>
              Delete Other Metric
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="user_system_feedback"> <b> User and System Feedback </b> - {{schema.properties.user_system_feedback.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.user_system_feedback" :key="index">
          <div class='variable-input-parent-div'>
            <label for='feedback' class='split-fourth-label'> Feedback </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Feedback
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.user_system_feedback.items.properties.feedback.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <general-multiselect
              :value="item.feedback"
              :options="feedback_options"
              :multiple="false"

              @updateSelected="(selections) => {item.feedback = selections}"

              class="split-fourth-input"
            />
            <label for='implementation' class='split-fourth-label'> Implementation </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Implementation
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.user_system_feedback.items.properties.implementation.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top' v-model="item.implementation"/>
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
        <label for="model_logs"> <b> Model Logs </b> - {{schema.properties.model_logs.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.model_logs" :key="index">
          <div class='variable-input-parent-div'>
            <label for='log' class='split-fourth-label'> Log </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Log
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.model_logs.items.properties.log.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <general-multiselect
              :value="item.log"
              :options="log_options"
              :multiple="false"

              @updateSelected="(selections) => {item.log = selections}"

              class="split-fourth-input"
            />
            <label for='implementation' class='split-fourth-label'> Implementation </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Implementation
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.model_logs.items.properties.implementation.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top' v-model="item.implementation"/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_model_log()" class='btn'>
              Add Model Log
            </button>
            <button v-if='index!=0' @click.prevent="remove_model_log(index)" class="btn">
              Delete Model Log
            </button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="other_logs"> <b> Other Logs </b> - {{schema.properties.other_logs.description}}</label>
        <br>
        <div v-for="(item, index) in model.document.other_logs" :key="index">
          <div class='variable-input-parent-div'>
            <label for='log' class='split-fourth-label'> Log </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Log
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.other_logs.items.properties.log.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <input type='text' class='split-fourth-input' v-model="item.log" />
            <label for='implementation' class='split-fourth-label'> Implementation </label>
            <div class='popover-container'>
              <sds-popover>
                <template #trigger>
                  <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                </template>
                <template #default>
                  <div class="popover-div">
                    <h3 class="popover-h3">
                      Implementation
                    </h3>
                    <p class="popover-p">
                      {{schema.properties.other_logs.items.properties.implementation.description}}
                    </p>
                  </div>
                </template>
              </sds-popover>
            </div>
            <textarea type='text' class='split-fourth-input' style='vertical-align: top' v-model="item.implementation"/>
          </div>
          <div class='variable-input-btn-div'>
            <button v-if='index==0' @click.prevent="add_other_log()" class='btn'>
              Add Other Log
            </button>
            <button v-if='index!=0' @click.prevent="remove_other_log(index)" class="btn">
              Delete Other Log
            </button>
          </div>
        </div>
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
            required_inference_time: {
              time: 0,
              unit: [],
            },
            computing_resources: {
              gpu: 0,
              cpu: 0,
              memory: 0,
              storage: 0,
            },
            algorithm_metrics: [{
              metric: [],
              implementation: '',
            }],
            business_metrics: [{
              metric: [],
              implementation: '',
            }],
            other_metrics: [{
              metric: '',
              implementation: '',
            }],
            user_system_feedback: [{
              feedback: [],
              implementation: ''
            }],
            model_logs: [{
              log: [],
              implementation: '',
            }],
            other_logs: [{
              log: '',
              implementation: '',
            }],
            documentation: [{
              description: '',
              location: '',
            }]
          },
        },
        unit_options: [],
        algorithm_metric_options: [],
        business_metric_options: [],
        feedback_options: [],
        log_options: [],

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
          },
        ],
      }
    },
    methods: {
      async submit () {
        let post_json = {
          project_name: this.project_name,
          descriptor_name: 'production_environment',
          document: JSON.parse(JSON.stringify(this.model.document))
        }

        post_json.document.required_inference_time.unit = post_json.document.required_inference_time.unit.length > 0 ? post_json.document.required_inference_time.unit[0].value : '';
        post_json.document.algorithm_metrics.forEach(metric => {
          metric.metric = metric.metric.length > 0 ? metric.metric[0].value : '';
        });
        post_json.document.business_metrics.forEach(metric => {
          metric.metric = metric.metric.length > 0 ? metric.metric[0].value : '';
        });
        post_json.document.user_system_feedback.forEach(feedback => {
          feedback.feedback = feedback.feedback.length > 0 ? feedback.feedback[0].value : '';
        });
        post_json.document.model_logs.forEach(log => {
          log.log = log.log.length > 0 ? log.log[0].value : '';
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


      add_algorithm_metric(){
        this.model.document.algorithm_metrics.push({metric: [], implementation: ''})
      },

      remove_algorithm_metric(index){
        this.model.document.algorithm_metrics.splice(index, 1);
      },


      add_business_metric(){
        this.model.document.business_metrics.push({metric: [], implementation: ''})
      },

      remove_business_metric(index){
        this.model.document.business_metrics.splice(index, 1);
      },

      add_other_metric(){
        this.model.document.other_metrics.push({metric: '', implementation: ''})
      },

      remove_other_metric(index){
        this.model.document.other_metrics.splice(index, 1)
      },


      add_user_system_feedback(){
        this.model.document.user_system_feedback.push({feedback: [], implementation: ''})
      },

      remove_user_system_feedback(index){
        this.model.document.user_system_feedback.splice(index, 1);
      },


      add_model_log(){
        this.model.document.model_logs.push({log: [], implementation: ''})
      },

      remove_model_log(index){
        this.model.document.model_logs.splice(index, 1);
      },

      add_other_log(){
        this.model.document.other_logs.push({log: '', implementation: ''})
      },

      remove_other_log(index){
        this.model.document.other_logs.splice(index, 1);
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
      this.page_title = this.project_name + ' - Production Environment'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },
    

    async fetch(){
      await this.$axios.post('/api/get_schema/production_environment_schema.json').then(response => {
        this.schema = response['data'];
        this.schema['properties']['required_inference_time']['properties']['unit']['enum'].forEach(unit => {
          this.unit_options.push({id: unit, value: unit});
        })
      })

      let post_json = {'project_name': this.project_name, 'descriptor_name': 'production_environment'}
      await this.$axios.post('/api/documents/get_document', post_json).then(response => {
        if(response['data']['document'] != null){
          console.log(response['data'])
          this.model.document = JSON.parse(JSON.stringify(response['data']['document']))

          this.model.document.required_inference_time.unit = [{id: this.model.document.required_inference_time.unit, value: this.model.document.required_inference_time.unit}];
          this.model.document.algorithm_metrics.forEach(metric => {
            metric['metric'] = [{id: metric['metric'], value: metric['metric']}]
          });
          this.model.document.business_metrics.forEach(metric => {
            metric['metric'] = [{id: metric['metric'], value: metric['metric']}]
          });
          this.model.document.user_system_feedback.forEach(feedback => {
            feedback['feedback'] = [{id: feedback['feedback'], value: feedback['feedback']}]
          });
          this.model.document.model_logs.forEach(log => {
            log['log'] = [{id: log['log'], value: log['log']}]
          })
        }
        else{
          this.model.document.version = this.schema['properties']['version']['const']
          console.log("No base document found to load")
        }
      });

      // Grabbing the trained_model document to fill in linked fields
      post_json = {'project_name': this.project_name, 'descriptor_name': 'trained_model'}
      await this.$axios.post('api/documents/get_document', post_json).then(response => {
        if(response.data.document != null){
          let trained_model_doc = response.data.document

          trained_model_doc.algorithm_metrics.forEach((metric) => {
            if(metric.metric != ''){
              this.algorithm_metric_options.push({id: metric.metric, value: metric.metric})
            }
          });
          trained_model_doc.business_metrics.forEach((metric) => {
            if(metric.metric != ''){
              this.business_metric_options.push({id: metric.metric, value: metric.metric})
            }
          });
          trained_model_doc.user_system_feedback.forEach((feedback) => {
            if(feedback.short_name != ''){
              this.feedback_options.push({id: feedback.short_name, value: feedback.short_name});
            }
          })
          trained_model_doc['log_data'].forEach((log) => {
            if(log.log != ''){
              this.log_options.push({id: log.log, value: log.log})
            }
          })
        }
        else{
          console.log("No trained_model document found to load")
        }
      });
    },


    beforeRouteLeave (to, from , next) {
      this.$confirm_leave_form(next);
    }
  }
</script>