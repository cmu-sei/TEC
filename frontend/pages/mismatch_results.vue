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
  <base-layout :page_title='page_title'>

    <template #header>
      <sds-button variant="default" @click="export_mismatches_pdf()"> 
        Export as PDF
      </sds-button>
    </template>

    <div class="row">
      <div class="column">
        <SdsDatapoint size="lg" variant="red" label="Mismatches" class="mb-8">{{mismatches.length}}</SdsDatapoint>

        <SdsSection type="accented">
          <template #title>
            <p class="text-2xl font-semibold uppercase">Mismatches</p>
          </template>
          <template #default>
            <div v-for="(mismatch, index) in mismatches" :key="index" class="mb-8">
              <p class="text-2xl font-semibold subitem">{{index + 1}}.</p>
              <p class="subitem">{{mismatch.message}}</p>

              <p class="text-lg font-semibold">Rationale</p>
              <p class="subitem">{{mismatch.rationale}}</p>
              
              <p class="text-lg font-semibold">Condition(s)</p>
              <div v-for="(condition, condition_index) in mismatch.conditions" :key="condition_index" class="subitem">
                {{condition}}
              </div>
            </div>
          </template>
        </SdsSection>
      </div>

      <div class="column">
        <SdsDatapoint size="lg" label="Missing Required Fields" class="mb-8"> {{missing_fields.length}} </SdsDatapoint>

        <SdsSection type="accented">
          <template #title>
            <p class="text-2xl font-semibold uppercase">Missing Required Fields</p>
          </template>
          <template #default>
            <div v-for="(field, index) in missing_fields" :key="index" class="mb-8">
              <p class="text-2xl font-semibold subitem">
                {{index + 1}}. {{field.descriptor}}
                <img src="icons/arrow.svg" width="20px" height="20px" style="display: inline;"/>
                {{field.field}}
              </p>
              <p class="subitem">{{field.message}}</p>

              <p class="text-lg font-semibold">Rationale</p>
              <p clas="subitem">{{field.rationale}}</p>
            </div>
          </template>
        </SdsSection>
      </div>
    </div>
  </base-layout>
</template>

<script>
  export default {
    data() {
      return {
        project_name: '',
        page_title: '',
        mismatches: [],
        missing_fields: []
      }
    },

    methods: {
      async export_mismatches_pdf(){
        let post_json = {'project_name': this.project_name}
        await this.$axios.post('/api/project/evaluate_project_pdf', post_json, {responseType: 'arraybuffer'}).then(response => {
          console.log(response);

          var file_to_save = new Blob([response.data], {
                type: 'application/pdf'
            });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(file_to_save);
            link.download = this.project_name + "_Mismatches";
            link.click();
            URL.revokeObjectURL(link.href);
        });
      },
    },


    async validate({ query, store }){
      return await store.dispatch('validate_project_name', {project_name: query['project_name']});
    },


    created(){
      this.project_name = this.$route.query['project_name']
      this.page_title = 'Mismatch Test Results: ' + this.project_name
    },


    async fetch() {
      let post_json = {'project_name': this.project_name}
      await this.$axios.post('/api/project/evaluate_project', post_json).then(response => {
        console.log(response);
        this.mismatches = response.data.mismatches;
        this.missing_fields = response.data.missing_fields; 
      });
    }
  };
</script>


<style scoped>
  .column {
    @apply mx-4;

    float: left;
    width: 47%;
  }

  .subitem {
    @apply mb-4;
  }
</style>