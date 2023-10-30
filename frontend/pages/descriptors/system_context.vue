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
        <label for="task"> <b> Task </b> - {{schema.properties.task.description}}</label>
        <br>
        <textarea type="text" v-model="model.document.task" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="ml_problem_type"> <b> ML Problem Type </b> - {{schema.properties.ml_problem_type.description}} </label>
        <br>
        <select class="form-control" v-model="model.document.ml_problem_type.ml_problem" @change='model.document.ml_problem_type.other_problem = ""'>
          <option v-for='(problem, index) in ml_problem_enum' :value='problem' :key='index'> {{problem}} </option>
        </select>
        <div v-if='model.document.ml_problem_type.ml_problem === "Other"'>
          <label for='ml-problem-other'> Please define other </label>
          <br>
          <input type='text' v-model='model.document.ml_problem_type.other_problem' class='form-control' />
          <br />
        </div>
      </div>

      <div class='input-div'>
        <label for='goals'> <b> Goals </b> - {{schema.properties.goals.description}}</label>
        <br />
        <div class="input-div" v-for="(goal, index) in model.document.goals" :key="index">
          <div class='variable-input-parent-div'>
            <div class="input-line-div">
              <label for='id' class='split-fourth-label'> ID </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        ID
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.goals.items.properties.id.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="goal.id" type="text" class='split-fourth-input' disabled/>
              <label for='goal' class='split-fourth-label'> Goal </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Goal
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.goals.items.properties.goal.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <textarea v-model="goal.goal" type="text" class='split-fourth-input' style="vertical-align: top"/>
            </div>
            <div class="input-line-div">
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
                        {{schema.properties.goals.items.properties.metric.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="goal.metric" type="text" class='split-fourth-input' />
              <label for='metric' class='split-fourth-label'> Baseline </label>
              <div class='popover-container'>
                <sds-popover>
                  <template #trigger>
                    <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
                  </template>
                  <template #default>
                    <div class="popover-div">
                      <h3 class="popover-h3">
                        Baseline
                      </h3>
                      <p class="popover-p">
                        {{schema.properties.goals.items.properties.baseline.description}}
                      </p>
                    </div>
                  </template>
                </sds-popover>
              </div>
              <input v-model="goal.baseline" type="text" class='split-fourth-input' />
            </div>
          </div>
          <div class='variable-input-btn-div'>
            <sds-button variant="default" v-if='index==0' @click="add_goal()">
              Add Goal
            </sds-button>
            <sds-button variant="default" v-if='index!=0' @click="remove_goal(index)"> 
              Delete Goal
            </sds-button>
          </div>
        </div>
      </div>

      <div class='input-div'>
        <label for="available_data"> <b> Available Data </b> - {{schema.properties.available_data.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.available_data" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="usage_context"> <b> Usage Context </b> - {{schema.properties.usage_context.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.usage_context" class="form-control"/>
      </div>

      <div class='input-div'>
        <label for="data_rights_policies"> <b> Data Rights and Policies </b> - {{schema.properties.data_rights_policies.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.data_rights_policies" class="form-control" />
      </div>

      <div class='input-div'>
        <label for="risk_fp"> <b> Risk of False Positive </b> - {{schema.properties.risks.properties.risk_fp.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.risks.risk_fp" class="form-control"/>
      </div>

      <div class='input-div'>
        <label for="risk_fn"> <b> Risk of False Negative </b> - {{schema.properties.risks.properties.risk_fn.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.risks.risk_fn" class="form-control"/>
      </div>

      <div class='input-div'>
        <label for="risk_other"> <b> Other Risks </b> - {{schema.properties.risks.properties.risk_other.description}} </label>
        <br>
        <textarea type="text" v-model="model.document.risks.risk_other" class="form-control" />
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
            version: '1.2',
            task: '',
            ml_problem_type: {
              ml_problem: '',
              other_problem: '',
            },
            goals: [{
              id: 'G-01',
              goal: '',
              metric: '',
              baseline: ''
            }],
            available_data: '',
            usage_context: '',
            data_rights_policies: '',
            risks: {
              risk_fp: '',
              risk_fn: '',
              risk_other: '',
            },
            documentation: [{
              description: '',
              location: ''
            }],
          }
        },
        ml_problem_enum: [],
        goals_input: '',

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
            variant: 'info',
            title: 'Goal Update',
            text: 'If you made changes to Goals ensure that those changes are reflected in Trained Model Selections.'
          },
        ],
      }
    },
    methods: {
      async submit () {
        let post_json = {
          project_name: this.project_name,
          descriptor_name: 'system_context',
          document: JSON.parse(JSON.stringify(this.model.document))
        }

        console.log(post_json);
        await this.$axios.post('/api/documents/insert_document', post_json).then((promise => {
          console.log(promise);
          this.toasts.unshift(this.toaster_messages[1])
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


      add_goal(){
        let num_goals = this.model.document.goals.length + 1
        let goal_num = ''
        if(num_goals < 10){
          goal_num = '0' + num_goals
        }
        else{
          goal_num = num_goals
        }
        this.model.document.goals.push({id: 'G-' + goal_num, goal: '', metric: '', baseline: ''});
      },

      
      remove_goal(index){
        this.model.document.goals.splice(index, 1);

        let i = 1;
        this.model.document.goals.forEach(goal => {
          if(i < 10){
            goal['id'] = 'G-0' + i
          }
          else{
            goal['id'] = 'G-' + i
          }
          i++;
        });
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
      this.page_title = this.project_name + ' - System Context'
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },


    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },


    async fetch(){
      await this.$axios.post('/api/get_schema/system_context_schema.json').then(response => {
        this.schema = response['data'];
        this.ml_problem_enum = this.schema['properties']['ml_problem_type']['properties']['ml_problem']['enum'];
      })

      let post_json = {'project_name': this.project_name, 'descriptor_name': 'system_context'}
      await this.$axios.post('/api/documents/get_document', post_json).then(response => {
        if(response['data']['document'] != null){
          console.log(response['data']['document'])
          this.model.document = JSON.parse(JSON.stringify(response['data']['document']))

          if(response['data']['version_updated']){
            this.$store.dispatch('generate_version_update_toast').then(toast => {
              this.toasts.unshift(toast);
            })
          }
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