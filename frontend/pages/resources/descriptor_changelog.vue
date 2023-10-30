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
  <base-layout page_title='Descriptor Changelog'>
    <div class="text-block">
      <b>v1.1</b>
      <ul>
        <li>
          System Context
          <ul>
            <li>Change business_goals to goals and gained the subfields metric and baseline </li>
            <li>Remove sucess criteria and add as a sub-field called metrics under goals. All entries for success_criteria will be converted to a csv and entered in the metric field of the first goal.</li>
          </ul>
        </li>
        <li>
          Raw Data
          <ul>
            <li>Add field data_rights</li>
            <li>Add field data_policies</li>
          </ul>
        </li>
        <li>
          Trained Model
          <ul>
            <li>Add subfield goal_mapping to algorithm_metrics that maps to a goal in System Context</li>
            <li>Change business_metrics to map to goal instead of business_goal</li>
            <li>Added operator as a subfield to both algorithm and business metrics.</li>
          </ul>
        </li>
        <li>
          Production Environment
          <ul>
            <li>Added field deployment_platform</li>
            <li>Added field deployment_mechanism</li>
          </ul>
        </li>
      </ul>
      <b>v1.2</b>
      <ul>
        <li>
          Data Pipeline
          <ul>
            <li>Remove expected_values as a subfield of input_spec</li>
            <li>
              New subfield of input_spec, item_specification which contains several fields to specify items
              based on their type. 
            </li>
            <li>
              WARNING: Due to the new format, all data that was stored in the old expected_values will now be stored
              under item_specification.expected_values. These values can be seen by selecting "Other" as the item type
              but, the values will be lost when changing the item type away from "Other".
            </li>
          </ul>
        </li>
        <li>
          Trained Model
          <ul>
            <li>Remove expected_values as a subfield of output_spec and final_output_spec</li>
            <li>
              New subfield of output_spec and final_output_spec, item_specification which contains several fields to specify items
              based on their type. 
            </li>
            <li>
              WARNING: Due to the new format, all data that was stored in the old expected_values will now be stored
              under item_specification.expected_values. These values can be seen by selecting "Other" as the item type
              but, the values will be lost when changing the item type away from "Other".
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </base-layout>
</template>

<style>
ul {
  @apply list-disc ml-5;
}
</style>