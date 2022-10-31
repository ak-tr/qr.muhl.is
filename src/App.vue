<template>
  <div class="container">
    <AppWizard />
  </div>
</template>

<script lang="ts">
import AppWizard from './components/AppWizard.vue';

export default {
  name: "App",
  components: {
    AppWizard,
  }
}
</script>

<style scoped>
.container {
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
}
</style>
