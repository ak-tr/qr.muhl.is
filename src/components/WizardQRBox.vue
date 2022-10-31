<template>
  <div class="qr-box">
    <div class="qr-img"><span v-html="svg"></span></div>
  </div>
</template>

<script lang="ts">
import qrcode from "qrcode";

export default {
  name: "WizardQRBox",
  data() {
    return {
      svg: "",
      default: "https://muhl.is"
    };
  },
  props: ["text"],
  methods: {
    generateQRCodeAndPopulate(value: string) {
      qrcode
        .toString(value)
        .then((result: string) => this.svg = result);
    }
  },
  mounted() {
    this.generateQRCodeAndPopulate(this.default)
  },
  watch: {
    text(value: string) {
      const isEmptyOrSpaces = (str: string) => {
        return str === null || str.match(/^ *$/) !== null;
      }

      if (isEmptyOrSpaces(value)) {
        return this.generateQRCodeAndPopulate(this.default);
      }

      this.generateQRCodeAndPopulate(value);
    }
  }
}
</script>

<style scoped>
span {
  transition: all 0.5s;
}

.qr-img:hover {
  transform: scale(2);
} 
.qr-img {
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in;
}
.qr-box {
  height: 200px;
  width: 200px;
}

@media only screen and (max-width: 815px) {
  .qr-box {
    height: 315px;
    width: 315px;
  }
}
</style>