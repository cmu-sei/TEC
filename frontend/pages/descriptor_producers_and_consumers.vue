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
  <base-layout page_title='Descriptor Producers and Consumers'>
    <div class='text-block'>
      The goal of the TEC tool is to support explicit information sharing between all ML-enabled system stakeholders. The table below is a list of roles that may serve as producers and consumers for each of the descriptors. Note that while these roles may be explicit and distinct in large organizations, in smaller organizations one person may serve multiple roles. 
      <br><br>
      The first role in each cell is the expected or default role, but we acknowledge that other roles could be responsible for providing or using the descriptor information across organizations.
      <div class='pt-6'>
        <table class='table-prose shadow-lg max-w-screen-md hero container'>
          <thead>
            <tr>
              <th class="border text-left px-8 py-2" style='background-color:#4472c4;'>Descriptor</th>
              <th class="border text-left px-8 py-2" style='background-color:#4472c4;'>Producer Role(s)</th>
              <th class="border text-left px-8 py-2" style='background-color:#4472c4;'>Consumer Role(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'><b>System Context</b></td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Product Owner<br>System Owner<br>System Architect</td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>All Roles</td>
            </tr>
            <tr>
              <td class="border px-8 py-2"><b>Raw Data</b></td>
              <td class="border px-8 py-2">Data Owner/Provider<br>Data Engineer</td>
              <td class="border px-8 py-2">Data Engineer<br>Model Developer*</td>
            </tr>
            <tr>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'><b>Data Pipeline</b></td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Data Engineer<br>Model Developer</td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Model Developer<br>Software Engineer<br>System Integrator<br>Operations</td>
            </tr>
            <tr>
              <td class="border px-8 py-2"><b>Training Data</b></td>
              <td class="border px-8 py-2">Model Developer<br>Data Engineer</td>
              <td class="border px-8 py-2">Model Evaluator/Tester<br>Model Integrator (Software Engineer)</td>
            </tr>
            <tr>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'><b>Trained Model</b></td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Model Developer</td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Model Evaluator/Tester<br>Software Engineer<br>System Integrator<br>Operations</td>
            </tr>
            <tr>
              <td class="border px-8 py-2"><b>Development Environment</b></td>
              <td class="border px-8 py-2">Software Engineer<br>System Integrator</td>
              <td class="border px-8 py-2">Data Engineer<br>Model Developer</td>
            </tr>
            <tr>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'><b>Production Environment</b></td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Operations</td>
              <td class="border px-8 py-2" style='background-color:#d9e2f3;'>Data Engineer<br>Model Developer<br>Software Engineer<br>System Integrator</td>
            </tr>
            <tr>
              <td class="border px-8 py-2"><b>Production Data</b></td>
              <td class="border px-8 py-2">System Owner<br>System Architect<br>Operations</td>
              <td class="border px-8 py-2">Data Engineer<br>Model Developer<br>Software Engineer<br>System Integrator</td>
            </tr>
          </tbody>
        </table>
      </div>
      * The Model Developer role may have different names in different organizations, including Data Scientist, ML Scientist, and ML Engineer
    </div>
  </base-layout>
</template>
<script>
export default {
  data(){
    return {
    }
  },
}
</script>
