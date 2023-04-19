<script setup>
import WelcomeItem from './WelcomeItem.vue'
import EducationIcon from './icons/IconEducation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Skills</template>
    Training/Certification/Honors
    <ul style="list-style-type: square;">
        <li>Model Student Award</li>
        Republic Central Colleges <br>
        2015, 2016, 2017, 2018, 2019
        <li>Loyalty Award</li>
        Republic Central Colleges <br>
        2019
    </ul>
    <br>
    Programming Languages
    <ol style="list-style-type: square;">
        <li>Javascript</li>
        <li>Python</li>
        <li>PHP</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>CSS</li>
    </ol>

  </WelcomeItem>
  

</template>
