<script setup>
import WelcomeItem from './WelcomeItem.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="color"><br>{{ msg }}</h1>
    <h3>
      Information Technology Major In Web Development
    </h3>
    <br>
    <h3>ABOUT ME
    </h3>
    <br>
    <h4>
        Self-driven and goal-oriented Information Technology student. Compliant to deadlines and dedicated to following instructions. 
        Diligent and adept enough to adjust in any working environment and seeks to contribute to thriving organizations that may further develop me holistically while meeting their goals and needs.
    </h4>
    <br>
    <h3>CAREER OBJECTIVE
    </h3>
    <br>
    <h4>
        To seek a position with an opportunity for professionalism where I can utilize my knowledge and skills through exposure to new ideas for professional growth, as well as for the growth of the company. 
    </h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
