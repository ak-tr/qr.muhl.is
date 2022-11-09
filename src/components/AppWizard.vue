<template>
  <div class="box">
    <WizardTextBox @value-change="onValueChange" />
    <sup
      >QR code will be generated as you type!
      <span v-if="!isMobile"><br />Hover the QR code to enlarge.</span></sup
    >
    <WizardQRBox :text="text" ref="wizardQRBox" />
    <WizardTooltip @download="onRequestDownload" />
  </div>
</template>

<script lang="ts">
import WizardTextBox from "./WizardTextBox.vue";
import WizardQRBox from "./WizardQRBox.vue";
import WizardTooltip from "./WizardTooltip.vue";

export default {
  name: "AppWizard",
  data() {
    return {
      text: "",
      isMobile: this.$isMobile
    };
  },
  components: {
    WizardTextBox,
    WizardQRBox,
    WizardTooltip,
  },
  methods: {
    onValueChange(value: string) {
      this.text = value;
    },
    onRequestDownload() {
      (this.$refs.wizardQRBox as typeof WizardQRBox).downloadQRCode();
    },
  },
};
</script>

<style scoped>
sup {
  padding-top: 15px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
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
  border: 1px solid rgb(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), -1px 0 15px rgba(0, 0, 0, 0.07) !important;
}

@media only screen and (max-width: 815px) {
  .box {
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 1fr;
  }
}
</style>