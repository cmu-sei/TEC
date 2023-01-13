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
  <base-layout :page_title="page_title">

    <sds-toaster v-model='toasts'/>

    <form @submit.prevent='submit'>
      <div class='input-div'>
        <label for='name'>
          <strong> Name </strong>
        </label>
        <input type='text' v-model='model.name' required class='form-control'/>
      </div>

      <div class='input-div'>
        <label for='description'>
          <strong> Description </strong>
        </label>
        <textarea type='text' v-model='model.description' required class='form-control'/>
      </div>

      <div class='input-div'>
        <label for='description'>
          <strong> Main Point of Contact </strong>
        </label>
        <input type='text' v-model='model.point_of_contact' required class='form-control'/>
      </div>

      <footer >
        <nuxt-link :to="{path: 'my_projects'}"> 
          <sds-button size="md" type='button'> Cancel </sds-button> 
        </nuxt-link>
        <sds-button size="md" type='submit'>
          Submit
        </sds-button>
      </footer>
    </form>
  </base-layout>
</template>

<script>
  export default {
    data() {
      return {
        page_title: '',
        collapse: false,
        is_edit: false,
        bypass_beforeRouteLeave: false,
        model: {
          project_uuid: '',
          name: '',
          description: '',
          point_of_contact: '',
        },

        toasts: [],
        toaster_messages: [
          {
            id: 0,
            variant: 'warning',
            title: 'Project Creation Failed',
            text: 'Your project was not able to be created. Ensure that the name is unique and try again.',
            autoHideDelay: 5000
          },
          {
            id: 1,
            variant: 'warning',
            title: 'Project Edit Failed',
            text: 'Your project was not able to be edited. Ensure that the name is unique and try again.',
            autoHideDelay: 5000
          }
        ]
      }
    },
    methods: {
      async submit (e) {
        console.log(this.model);

        let post_json = {
          project_uuid: this.model.project_uuid,
          name: this.model.name,
          description: this.model.description,
          point_of_contact: this.model.point_of_contact
        }

        if(this.is_edit){
          await this.$axios.post('/api/project/update_project', post_json).then(promise => {
            console.log(promise['data']);
            this.bypass_beforeRouteLeave = true;
            this.$router.push({name:'my_projects'})
          }).catch(error => {
            this.toasts.unshift(this.toaster_messages[1]);
            console.log(error)
          });
        }
        else{
          await this.$axios.post('/api/project/insert_project', post_json).then(promise => {
            console.log(promise['data']);
            this.bypass_beforeRouteLeave = true;
            this.$router.push({name:'my_projects'})
          }).catch(error => {
            this.toasts.unshift(this.toaster_messages[0]);
            console.log(error)
          });
        }
      },
    },


    async validate({ query, store }){
      if(query['project_name']){
        return await store.dispatch('validate_project_name', {project_name: query['project_name']});
      }
      else{
        return true;
      }
    },


    beforeMount(){
      window.addEventListener('beforeunload', this.$form_beforeunload);
    },



    beforeDestroy(){
      window.removeEventListener('beforeunload', this.$form_beforeunload);
    },


    async fetch(){
      if(this.$route.query['project_name']){
        this.is_edit = true;
        let project_name = this.$route.query['project_name'];
        this.page_title = 'Edit Project - ' + project_name;

        let post_json = { 'project_name': project_name}
        await this.$axios.post('/api/project/get_project', post_json).then((promise => {
          console.log(promise['data']['project']);
          this.model = promise['data']['project']
        }));
      }
      else{
        this.page_title = 'New Project';
      }
    },


    beforeRouteLeave (to, from , next) {
      if(this.bypass_beforeRouteLeave){
        next()
      }
      else{
        this.$confirm_leave_form(next);
      }
    }
  }
</script>