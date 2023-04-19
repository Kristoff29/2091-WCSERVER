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
      <EducationIcon />
    </template>
    <template #heading>Educational Background</template>
    Tertiary
    <ul style="list-style-type: square;">
        <li>Bachelor of Science in Information Technology under the specialization of Web Development</li>
        Holy Angel University <br>
        2019- 
    </ul>

    Secondary
    <ul style="list-style-type: square;">
        <li>Senior Highschool and Junior Highschool</li>
        Republic Central Colleges <br>
        2013-2019
    </ul>

    Primary
    <ul style="list-style-type: square;">
        <li>Elementary School</li>
        Republic Central Colleges <br>
        2008-2013
    </ul>
  </WelcomeItem>


</template>
