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
  <base-layout page_title='Descriptor Relationships'>
    <div class='text-block'>
      As different stakeholders enter or import information into the descriptors, the TEC tool has a mismatch analysis capability (currently under development) that can detect mismatches between information provided in these descriptors.
      <br><br>
      In many cases mismatch is caused by lack of information. For example, if model developers do not have access to information related to business goals, available data, success criteria, and usage context for the model that they are building, they may make poor model design decisions.
      <br><br>
      In other more specific cases, mismatch is caused by a difference in values provided in the information. For example, if data statistics reported for Production Data are different from data statistics reported for Training Data, there is a high likelihood that the trained model will not perform well in production.
      <br><br>
      The diagram below presents two types of relationships between descriptors. The relationship denoted by an arrow is simply a reference between descriptors. For example, the Trained Model descriptor has a reference to the Training Data descriptor to indicate the dataset that was used to train the model. This helps with traceability between descriptors, especially in cases where they are being provided by different organizations.
      The relationship denoted by a single line between descriptors indicates that there are common attributes between descriptors that must align to prevent mismatch. For example, Training Data and Production Data should align in terms of data schema, data statistics, and data distribution to avoid problems once the model is put into production.

    </div>
    <div class='m-8 p-4 bg-white max-w-4xl'>
      <b>Relationship Diagram</b>
      <br/><br/>
      <img :src="'/descriptor-relationships.png'"/>
    </div>
  </base-layout>
</template>