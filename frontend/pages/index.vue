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
  <base-layout page_title='Home'>
    <div class="mb-8 mx-8 text-2xl">
      <b> Welcome to TEC, the ML Mismatch Detection Tool </b>
    </div>
    <div class='text-block'>
      <b>Introduction</b>
      <br/>
      The development and operation of ML-enabled systems involves three workflows
      <br/><br/>
      <ul class='list-disc pl-5'>
        <li>The <i>Model Development</i> workflow produces a trained model and is typically executed by data scientists or ML engineers with a background in statistics and machine learning</li>
        <li>The <i>Model Integration</i> workflow takes the data pipeline and trained model produced in the previous workflow, packages them as an ML component, and integrates it into an ML-enabled system — typically executed by software engineers and developers with a background in traditional software development and testing</li>
        <li>The <i>Model Operation</i> workflow oversees the operation and monitoring of the production ML-enabled system — typically executed by IT personnel with a background in traditional IT operations</li>
      </ul>
      <br/>
      These workflows are often executed by three different teams with three different backgrounds, tools, and even different vocabularies, which can lead to ML Mismatch.
      <br><br>
      We define ML Mismatch as a problem that occurs in the development, integration, deployment, and operation of an ML-enabled system due to incorrect assumptions made about system elements by different stakeholders that results in a negative consequence.
      <br><br>
      <b>Descriptors</b>
      <br>
      TEC supports the explicit recording of these assumptions in a set of <b>eight descriptors</b>, shown in the diagram below in bold caps letters. The goal of the descriptors is to support the <b>model development to operations process</b>.
      <br/><br/>
      <ul class='list-disc pl-5'>
        <li>System Context: Business goals, task to perform, success criteria, usage context, risks, and other business elements that influence model development, integration, deployment, operation, and evolution</li>
        <li>Raw Data: Unprocessed data sources from which training data is derived</li>
        <li>Data Pipeline: Code that prepares data for processing by the Trained Model</li>
        <li>Training Data: Data for model training</li>
        <li>Trained Model: Trained model to be deployed in a production ML-enabled system </li>
        <li>Development Environment: Development and computing environment in which the ML Component (data pipeline and trained model) will be tested and integrated into the ML-enabled system</li>
        <li>Production Environment: Computing environment in which the ML Component (data pipeline and model) will execute as part of an ML-enabled system</li>
        <li>Production Data: Data that is processed by the ML Component in production </li>
      </ul>
    </div>
    <div class='m-8 p-4 max-w-4xl bg-white'>
      <b>ML System Development Workflows</b>
      <br/><br/>
      <img :src="'/system-diagram.png'"/>
    </div>
    <div class='text-block'>
      <b>Get Started</b>
      <br/>
      To get started, use the <nuxt-link class='text-link' :to="{ path: 'new_project' }" > New Project </nuxt-link> link in the left side bar to create a project. After that, all system stakeholders should be ready to start filling out their descriptors as the ML system is being developed. The <nuxt-link class='text-link' :to="{ path: 'descriptor_producers_and_consumers' }" > Descriptor Producers and Consumers </nuxt-link> in the left side bar shows the roles that are expected to produce and use the descriptors.
      <br><br>
      If parts of the system are being developed by outside organizations, these organizations can export descriptors for their system elements using the Export Descriptor functionality in each project. These descriptors can be added to the project using the Import Descriptor functionality in each project. All descriptors are stored in JSON format to promote extensibility, portability, and integration into other tools.
    </div>
  </base-layout>
</template>