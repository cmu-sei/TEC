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
  <span>
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
                {{ schema.items.properties.item_name.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <input v-model="item.item_name" :disabled='disabled' type="text" class='split-fourth-input' />
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
                {{ schema.items.properties.item_description.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <textarea v-model="item.item_description" :disabled='disabled' type="text" class='split-fourth-input' style="vertical-align: top"/>
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
                {{ schema.items.properties.item_type.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <general-multiselect
        :value='item.item_type'
        :options='item_type_options'
        v-bind:multiple='false'
        :disabled='disabled'

        @updateSelected='update_item_type($event)'

        class='split-fourth-input inline-block'
      />

      <span v-if="item.item_type.length > 0 && item.item_type[0].value == 'String'">
        <label for='allowed_characters' class='split-fourth-label'> Allowed Characters </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Allowed Characters
                </h3>
                <p class="popover-p">
                  Selection of what types of characters or string types are allowed for data item. 
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <general-multiselect
          :value='character_multiselect_value'
          :options='character_multiselect_options'
          :multiple='true'

          @updateSelected='update_character_multiselect($event)'

          class='split-fourth-input inline-block'
        />
      </span>

      <span v-if="item.item_type.length > 0 && item.item_type[0].value == 'Other'">
        <label for='other_value' class='split-fourth-label'> Other Value </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Other Value
                </h3>
                <p class="popover-p">
                  {{ schema.items.properties.item_specification.properties.other_value.description }}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <input v-model="item.item_specification.other_value" type="text" class='split-fourth-input' />
      </span>
    </div>

    <div v-if="item.item_type.length > 0 && (item.item_type[0].value === 'String')" class="input-line-div">
      <label for='min_length' class='split-fourth-label'> Min Length </label>
      <div class='popover-container'>
        <sds-popover>
          <template #trigger>
            <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
          </template>
          <template #default>
            <div class="popover-div">
              <h3 class="popover-h3">
                Min Length
              </h3>
              <p class="popover-p">
                {{ schema.items.properties.item_specification.properties.min_length.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <input v-model="item.item_specification.min_length" type="number" class='split-fourth-input' />
      <label for='max_length' class='split-fourth-label'> Max Length </label>
      <div class='popover-container'>
        <sds-popover>
          <template #trigger>
            <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
          </template>
          <template #default>
            <div class="popover-div">
              <h3 class="popover-h3">
                Max Length
              </h3>
              <p class="popover-p">
                {{ schema.items.properties.item_specification.properties.max_length.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <input v-model="item.item_specification.max_length" type="number" class='split-fourth-input'/>
    </div>

    <div v-if="item.item_type.length > 0 && (item.item_type[0].value === 'Integer' || item.item_type[0].value ==='Float')" class="input-line-div">
      <label for='min_value' class='split-fourth-label'> Min Value </label>
      <div class='popover-container'>
        <sds-popover>
          <template #trigger>
            <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
          </template>
          <template #default>
            <div class="popover-div">
              <h3 class="popover-h3">
                Min Value
              </h3>
              <p class="popover-p">
                {{ schema.items.properties.item_specification.properties.min_value.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <input v-model="item.item_specification.min_value" type="number" class='split-fourth-input' />
      <label for='max_value' class='split-fourth-label'> Max Value </label>
      <div class='popover-container'>
        <sds-popover>
          <template #trigger>
            <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
          </template>
          <template #default>
            <div class="popover-div">
              <h3 class="popover-h3">
                Max Value
              </h3>
              <p class="popover-p">
                {{ schema.items.properties.item_specification.properties.max_value.description }}
              </p>
            </div>
          </template>
        </sds-popover>
      </div>
      <input v-model="item.item_specification.max_value" type="number" class='split-fourth-input'/>
    </div>

    <span v-if="item.item_type.length > 0 && item.item_type[0].value == 'Image'">
      <div class="input-line-div">
        <label for='resolution_x' class='split-fourth-label'> Resolution X </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Resolution X
                </h3>
                <p class="popover-p">
                  {{ schema.items.properties.item_specification.properties.resolution_x.description }}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <input v-model="item.item_specification.resolution_x" type="number" class='split-fourth-input' />
        <label for='resolution_y' class='split-fourth-label'> Resolution Y </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Resolution Y
                </h3>
                <p class="popover-p">
                  {{ schema.items.properties.item_specification.properties.resolution_y.description }}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <input v-model="item.item_specification.resolution_y" type="number" class='split-fourth-input'/>
      </div>

      <div class="input-line-div">
        <label for='channels' class='split-fourth-label'> Channels </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Channels
                </h3>
                <p class="popover-p">
                  {{ schema.items.properties.item_specification.properties.channels.description }}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <input v-model="item.item_specification.channels" type="number" class='split-fourth-input' />
        <label for='image_format' class='split-fourth-label'> Image Format </label>
        <div class='popover-container'>
          <sds-popover>
            <template #trigger>
              <img src="/icons/information-circle.svg" width="30px" height="30px" style="display: inline;"/>
            </template>
            <template #default>
              <div class="popover-div">
                <h3 class="popover-h3">
                  Image Format
                </h3>
                <p class="popover-p">
                  {{ schema.items.properties.item_specification.properties.image_format.description }}
                </p>
              </div>
            </template>
          </sds-popover>
        </div>
        <general-multiselect
          :value='item.item_specification.image_format'
          :options='image_format_options'
          v-bind:multiple='false'

          @updateSelected='(selections) => {item.item_specification.image_format = selections}'

          class='split-fourth-input inline-block'
        />
      </div>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    item: {type: Object},
    schema: {type: Object},
    disabled: {type: Boolean, default: false}
  },
  computed: {
    item_type_options() {
      let types_list = [];
      if(this.schema !== null){
        this.schema.items.properties.item_type.enum.forEach(type => {
          types_list.push({id: type, value: type});
        })
      }
      return types_list;
    },

    image_format_options() {
      let formats_list = [];
      if(this.schema !== null){
        this.schema.items.properties.item_specification.properties.image_format.enum.forEach(format => {
          if(format !== ""){
            formats_list.push({id: format, value: format})
          }
        })
      }
      return formats_list;
    }
  },
  data() {
    return {
      character_multiselect_value: [],
      character_multiselect_options: [
        {id: "Empty", value: "Empty"},
        {id: "Numeric", value: "Numeric"},
        {id: "Slashes", value: "Slashes"},
        {id: "Spaces", value: "Spaces"},
        {id: "Special", value: "Special"}
      ],
    }
  },
  methods: {
    update_item_type(selections){
      this.item.item_type = selections;

      // Don't add this property if it isn't there
      if(selections.length > 0 && selections[0].value !== "Other" && this.item.item_specification.expected_values !== ""){
        this.item.item_specification.expected_values = "";
      }
      this.item.item_specification.min_value = 0;
      this.item.item_specification.max_value = 0;
      this.item.item_specification.resolution_x = 0;
      this.item.item_specification.resolution_y = 0;
      this.item.item_specification.channels = 0;
      this.item.item_specification.image_format = [];
      this.item.item_specification.empty = false;
      this.item.item_specification.numeric = false;
      this.item.item_specification.slashes = false;
      this.item.item_specification.spaces = false;
      this.item.item_specification.special = false;
      
      this.character_multiselect_value = [];
    },

    update_character_multiselect(selections){
      this.character_multiselect_value = selections;

      let selection_list = []

      selections.forEach(entry => {
        selection_list.push(entry.id)
      })

      this.item.item_specification.empty = selection_list.includes("Empty");
      this.item.item_specification.numeric = selection_list.includes("Numeric");
      this.item.item_specification.slashes = selection_list.includes("Slashes");
      this.item.item_specification.spaces = selection_list.includes("Spaces");
      this.item.item_specification.special = selection_list.includes("Special");
    },
  }
}
</script>