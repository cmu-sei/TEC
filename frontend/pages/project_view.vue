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
  <base-layout :page_title=project_name>

    <sds-toaster v-model='toasts'/>

    <div class='bg-white p-4 overflow-x-auto'>
      <sds-table
        class="table-prose"
        :items="descriptor_list"
        :fields="table_fields"
      >
        <template #cell(producers)="{ item }">
          <div v-for="(producer, index) in item.producers" :key="index" style='width: 175px'>
            {{producer}}
          </div>
        </template>

        <template #cell(consumers)="{ item }">
          <div v-for="(consumer, index) in item.consumers" :key="index" style="width: 300px">
            {{consumer}}
          </div>
        </template>

        <template #cell(actions)="{ item }">
          <div style="width: 275px;">
            <nuxt-link :to="{path: item.link, query: {project_name: project_name}}"> <sds-button size="sm" variant="default">  Edit </sds-button> </nuxt-link>
            <sds-button size="sm" variant="default" @click='export_json(item.nice_name, item.name)'> Export </sds-button>
            <sds-button size="sm" variant="default" @click='import_modal_toggle = true; import_modal_text=""; import_modal_error = false; import_modal_error_list = []; import_modal_descriptor_name=item.name; import_modal_nice_descriptor_name=item.nice_name'> Import </sds-button>
            <sds-button size="sm" variant="danger" @click="delete_descriptor(item.name, item.nice_name)"> Clear </sds-button>
          </div>
        </template>
      </sds-table>
    </div>

    <sds-modal v-model='export_modal_toggle'>
      <template v-slot:title >
        Currently saved {{export_modal_descriptor_name}} Document:
      </template>
      <p class='text-danger' v-if='export_modal_error'> The document you are exporting does not conform to the schema. </p>
      <div v-if='export_modal_error'>
        <div v-for="(item, index) in export_modal_error_list" :key="index" class='text-danger'>
          <p> ({{index + 1}}) {{item}} </p>
        </div>
      </div>
      <textarea v-model="export_modal_text" cols='55' rows='35' readonly wrap='soft'></textarea>
    </sds-modal>

    <sds-modal v-model='import_modal_toggle'>
      <template v-slot:title>
        Upload your {{import_modal_nice_descriptor_name}} JSON file:
        <br><br>
        <input type='file' accept='.json' @change='file_upload'/>
      </template>
      <p class='text-danger' v-if='import_modal_error'> There were one or more errors in your import.  </p>
      <p class='text-danger' v-if='import_modal_error'> Your document is validated against the schema specified in its version field.</p>
      <div v-if='import_modal_error'>
        <div v-for="(item, index) in import_modal_error_list" :key="index" class='text-danger'>
          <p> ({{index + 1}}) {{item}} </p>
        </div>
      </div>
      <textarea v-model="import_modal_text" cols='55' rows='25' wrap='soft'></textarea>
      <template v-slot:footer>
        <button class='btn btn-primary' type='button' @click.prevent='cancel_import();'>
          Cancel
        </button>
        <button class='btn btn-primary' type='button' @click.prevent='import_json()'>
          Import
        </button>
      </template>
    </sds-modal>
    
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      project_name: '',
      descriptor_list: [
          {
            nice_name: 'System Context',
            name: 'system_context',
            description: 'Descriptor for general information that influences model development, deployment, and evolution.',
            producers: ['Product Owner', 'System Owner', 'System Architect'],
            consumers: ['All Roles'],
            link: 'descriptors/system_context'
          },
          {
            nice_name: 'Raw Data',
            name: 'raw_data',
            description: 'Descriptor for the raw data from which training data is derived.',
            producers: ['Data Owner/Provider', 'Data Engineer'],
            consumers: ['Data Engineer', 'Model Developer'],
            link: 'descriptors/raw_data'
          },
          {
            nice_name: 'Data Pipeline',
            name: 'data_pipeline',
            description: 'Descriptor for information about the data pipeline that prepares data for processing by the trained model.',
            producers: ['Data Engineer', 'Model Developer'],
            consumers: ['Model Developer', 'Software Engineer', 'System Integrator', 'Operations'],
            link: 'descriptors/data_pipeline'
          },
          {
            nice_name: 'Training Data',
            name: 'training_data',
            description: 'Descriptor for information about training data, which is important for model integration and evaluation, as well as reproducibility of the model development pipeline.',
            producers: ['Model Developer', 'Data Engineer'],
            consumers: ['Model Evaluator/Tester', 'Model Integrator (Software Engineer)'],
            link: 'descriptors/training_data'
          },
          {
            nice_name: 'Trained Model',
            name: 'trained_model',
            description: 'Descriptor for information about the trained model, which is important for proper model integration, deployment, and monitoring.',
            producers: ['Model Developer'],
            consumers: ['Model Evaluator/Tester', 'Software Engineer', 'System Integrator', 'Operations'],
            link: 'descriptors/trained_model'
          },
          {
            nice_name: 'Development Environment',
            name: 'development_environment',
            description: 'Descriptor for information about the development environment, which is important to avoid model integration problems.',
            producers: ['Software Engineer', 'System Integrator'],
            consumers: ['Data Engineer', 'Model Developer'],
            link: 'descriptors/development_environment'
          },
          {
            nice_name: 'Production Environment',
            name: 'production_environment',
            description: 'Descriptor for information about the production environment, which is important for understanding  its readiness to properly serve the trained model.',
            producers: ['Operations'],
            consumers: ['Data Engineer', 'Model Developer', 'Software Engineer', 'System Integrator'],
            link: 'descriptors/production_environment'
          },
          {
            nice_name: 'Production Data',
            name: 'production_data',
            description: 'Descriptor for information about the data that the trained model will encounter in production, which is important for making model development decisions.',
            producers: ['System Owner', 'System Architect', 'Operations'],
            consumers: ['Data Engineer', 'Model Developer', 'Software Engineer', 'System Integrator'],
            link: 'descriptors/production_data'
          }
      ],
      table_fields: [
        {"key":"nice_name", "label":"Descriptor"},
        {"key": "description", "label": "Description"},
        {"key": "producers", "label": "Typical Producers"},
        {"key": "consumers", "label": "Typical Consumers"},
        {"key": "actions", "label": "Actions"}
      ],

      export_modal_descriptor_name: '',
      export_modal_toggle: false,
      export_modal_text: '',
      export_modal_error: false,
      export_modal_error_list: [],
      import_modal_descriptor_name: '',
      import_modal_nice_descriptor_name: '',
      import_modal_toggle: false,
      import_modal_text: '',
      import_modal_error: false,
      import_modal_error_list: [],

      toasts: [],
      toaster_messages: [
        {
          id: 0,
          variant: 'success',
          title: 'Document Imported',
          text: 'Your document has been successfully imported. If it was a previous version, it has been automatically updated.',
          autoHideDelay: 5000
        },
        {
          id: 1,
          variant: 'warning',
          title: "Clear Failed",
          text: "This descriptor contains linked fields and cannot be cleared.",
          autoHideDelay: 5000
        }
      ]
    }
  },

  methods: {
    async export_json(nice_descriptor_name, descriptor_name){
      this.export_modal_error = false;
      this.export_modal_error_list = [];

      this.export_modal_descriptor_name = nice_descriptor_name;

      let post_json = {'project_name': this.project_name, 'descriptor_name': descriptor_name, 'export': true}
      await this.$axios.post('/api/documents/get_document', post_json).then(response => {
        console.log(response)
        if(response['data']['document'] == null){
          this.export_modal_text = 'No document saved.'
          this.export_modal_toggle = true;
        }
        else if(response['data']['errors'].length > 0){
          this.export_modal_error_list = response['data']['errors'];
          this.export_modal_error = true;
          this.export_modal_text = JSON.stringify(response['data']['document'], null, 2)
          this.export_modal_toggle = true;
        }
        else{          
          var file_to_save = new Blob([JSON.stringify(response['data']['document'], null, 2)], {
              type: 'application/json'
          });

          const link = document.createElement('a');
          link.href = URL.createObjectURL(file_to_save);
          link.download = this.project_name + ' - ' + nice_descriptor_name;
          link.click();
          URL.revokeObjectURL(link.href);
        }
      })
    },


    file_upload(event){
      if(event.target.files[0]){
        var file = event.target.files[0]
        const reader = new FileReader();
        reader.onload = (res) => {
          this.import_modal_text = res.target.result;
        }
        reader.readAsText(file)
      }
    },


    async import_json(){
      try{
        var document = JSON.parse(this.import_modal_text);
      }
      catch(err){
        this.import_modal_error_list = ['Invalid JSON']
        this.import_modal_error = true;
        return;
      }

      let get_doc_json = {'project_name': this.project_name, 'descriptor_name': this.import_modal_descriptor_name}
      let response = null;
      await this.$axios.post('/api/documents/get_document', get_doc_json).then(res => {
        response = res;
      });

      if(response['data']['document'] != null){
        if(! confirm("Importing this descriptor will overwrite the descriptor currently saved in the database and potentially cause issues with linked fields. Are you sure you want to continue?")){
          return;
        }
      }

      let post_json = {
        project_name: this.project_name,
        descriptor_name: this.import_modal_descriptor_name,
        document: document,
        import: true
      }

      console.log("JSON being imported:")
      console.log(post_json);
      await this.$axios.post('/api/documents/insert_document', post_json).then(response => {
        this.import_modal_toggle = false;
        this.import_modal_text = '';
        this.toasts.unshift(this.toaster_messages[0])
      }).catch(error => {
        if(error.response.data.schema_errors != null){
          this.import_modal_error_list = error.response.data.schema_errors;
          this.import_modal_error = true;
        }
        else if(error.response.data.error_list != null){
          this.import_modal_error_list = error.response.data.error_list;
          this.import_modal_error = true;
        }
      })
    },


    cancel_import(){
      if(confirm("Are you sure you want to cancel? All input will be lost.")){
        this.import_modal_toggle = false;
      }
    },

    async delete_descriptor(descriptor_name, descriptor_nice_name){
      if(["system_context", "data_pipeline", "trained_model", "development_environment", "production_environment"].includes(descriptor_name)){
        this.toasts.unshift(this.toaster_messages[1])
      }
      else{
        if(confirm("Are you sure you want to clear all of the fields in " + descriptor_nice_name + "?")){
          let post_json = {'project_name': this.project_name, 'descriptor_name': descriptor_name}

          await this.$axios.post("/api/documents/delete_document", post_json).then(response => {
            console.log(response)
          })
        }
      }
    }
  },

  async validate({query, store}){
    return await store.dispatch('validate_project_name', {project_name: query['project_name']});
  },

  created(){
    this.project_name = this.$route.query['project_name'];
  },
};
</script>