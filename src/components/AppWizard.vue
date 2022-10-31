<template>
  <div class="box">
    <WizardTextBox @value-change="onValueChange"/>
    <WizardQRBox :text="text"/>
  </div>
</template>

<script lang="ts">
import WizardTextBox from "./WizardTextBox.vue";
import WizardQRBox from "./WizardQRBox.vue";

export default {
  name: "AppWizard",
  data() {
    return {
      text: "",
    }
  },
  components: {
    WizardTextBox,
    WizardQRBox,
  },
  methods: {
    onValueChange(value: string) {
      const isEmptyOrSpaces = (str: string) => {
        return str === null || str.match(/^ *$/) !== null;
      }

      if (!isEmptyOrSpaces(value)) {
        this.text = value;
      }
    }
  }
}
</script>

<style scoped>
.box {
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: 1fr;
  max-width: 750px;
  padding: 15px;
  margin: 15px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  filter: drop-shadow(1px 5px 25px rgba(0, 0, 0, 10%));
}

@media only screen and (max-width: 815px) {
  .box {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>