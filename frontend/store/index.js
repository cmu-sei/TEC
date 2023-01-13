// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-0003


export const actions = {
  async validate_project_name({context}, {project_name}){
    var response = await this.$axios.get('api/project/get_all_projects');

    let project_names = [];

    response['data'].forEach(element => {
      project_names.push(element['name']);
    });

    if(project_names.includes(project_name)){
      return true;        
    }
    else{
      return false;
    }
  },


  async get_programming_languages({context}){
    let data = [];
    await this.$axios.get('api/db_lists/get_programming_languages').then((promise) => {
      data = promise['data'];
    })
    return data;
  },


  async get_ml_frameworks({context}){
    let data = [];
    await this.$axios.get('api/db_lists/get_ml_frameworks').then((promise) => {
      data = promise['data'];
    })
    return data;
  },


  async get_statistics({context}){
    let data = [];
    await this.$axios.get('api/db_lists/get_statistics').then((promise) => {
      data = promise['data'];
    })
    return data;
  },


  async get_item_types({context}){
    let data = [];
    await this.$axios.get('api/db_lists/get_item_types').then((promise) => {
      data = promise['data'];
    })
    return data;
  },
}