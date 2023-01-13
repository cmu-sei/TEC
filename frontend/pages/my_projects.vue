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
  <base-layout page_title='My Projects'>
    <div class='bg-white p-4 overflow-x-auto'>
      <sds-table
        class="table-prose"
        :items="project_list"
        :fields="table_fields"
      >
        <template #cell(actions)="{ item }">
          <nuxt-link :to="{path: 'project_view', query: {project_name: item.name}}"> <sds-button size="sm" type="button">  Select </sds-button> </nuxt-link>
          <nuxt-link :to="{path: 'new_project', query: {project_name: item.name}}"> <sds-button size="sm" type="button"> Edit </sds-button> </nuxt-link>
          <sds-button size="sm" type="button" @click="delete_project(item.name)"> Delete </sds-button>
          <nuxt-link :to="{path: 'mismatch_results', query: {project_name: item.name}}"> <sds-button size="sm" type="button"> Detect Mismatches </sds-button> </nuxt-link>
          <sds-button size="sm" type="button" @click="export_project(item.name)"> Export Project </sds-button>
        </template>
      </sds-table>
    </div>
  </base-layout>
</template>

<script>
  export default {
    data() {
      return {
        project_list: [],
        table_fields: [
          {"key": "name", "label": "Project Name", "sortable": true},
          {"key": "description", "label": "Description"},
          {"key": "point_of_contact", "label": "Main Point of Contact", "sortable": true},
          {"key": "actions", "label": "Actions"}
        ]
      }
    },

    methods: {
      async delete_project(project_name){
        if(confirm("Are you sure you want to delete: " + project_name))
        {
          let response = await this.$axios.post("/api/project/delete_project", {'project_name': project_name});
          console.log(response);
          await this.$fetch();
        }
      },

      
      async export_project(project_name){
        let post_json = {'project_name': project_name}
        await this.$axios.post('/api/project/get_project_documents', post_json).then(response => {
          let project_json = response['data']
          Object.entries(project_json).forEach(([key, value]) => {
            if(!value){
              project_json[key] = {}
            }
          })

          var file_to_save = new Blob([JSON.stringify(project_json, null, 2)], {
                type: 'application/json'
            });

            const link = document.createElement('a');
            link.href = URL.createObjectURL(file_to_save);
            link.download = project_name;
            link.click();
            URL.revokeObjectURL(link.href);
        })
      },
    },

    async fetch() {
      await this.$axios.get('api/project/get_all_projects').then((response) => {
        console.log(response);
        this.project_list = response['data'];
      });
    }
  };
</script>
