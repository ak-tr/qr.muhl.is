<template>
  <div class="box">
    <WizardTextBox @value-change="onValueChange"/>
    <sup>QR code will be generated as you type!</sup>
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
      this.text = value;
    }
  }
}
</script>

<style scoped>
sup {
  padding-top: 10px;
}
.box {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  max-width: 750px;
  padding: 15px;
  margin: 15px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(0,0,0,.125);
  border-radius: .25rem;
  /* filter: drop-shadow(1px 5px 25px rgba(0, 0, 0, 10%)); */
  box-shadow: 0 18px 35px rgba(50,50,93,.1),-1px 0 15px rgba(0,0,0,.07)!important;
}

@media only screen and (max-width: 815px) {
  .box {
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 1fr;
  }
}
</style>