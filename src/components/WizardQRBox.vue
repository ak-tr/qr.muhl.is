<template>
  <div class="qr-box">
    <div class="hitbox"></div>
    <div class="qr-img"><span ref="svg" v-html="svg"></span></div>
  </div>
</template>

<script lang="ts">
import qrcode from "qrcode";

export default {
  name: "WizardQRBox",
  data() {
    return {
      svg: "",
      default: "https://muhl.is",
      value: "https://muhl.is",
    };
  },
  props: ["text"],
  methods: {
    generateQRCodeAndPopulate(value: string) {
      const ref = this.$refs.svg as HTMLElement;
      ref.animate({ opacity: 0.25 }, 150);
      qrcode.toString(value).then((result: string) => {
        ref.animate({ opacity: 1 }, 150);
        this.svg = result;
      });
    },
    isEmptyOrSpaces(str: string) {
      return str === null || str.match(/^ *$/) !== null;
    },
    downloadQRCode() {
      qrcode
        .toDataURL(this.value, { width: 1024, margin: 1 })
        .then((result) => {
          const link = document.createElement("a");
          link.href = result;
          link.download = `qr_${this.value}.png`;
          link.click();
        });
    },
  },
  mounted() {
    this.generateQRCodeAndPopulate(this.default);
  },
  watch: {
    text(value: string) {
      const isEmptyOrSpaces = this.isEmptyOrSpaces(value);
      const string = isEmptyOrSpaces ? this.default : value;
      this.value = string;

      this.generateQRCodeAndPopulate(string);
    },
  },
};
</script>

<style scoped>
span {
  transition: all 0.5s;
}

.hitbox {
  position: absolute;
  height: 200px;
  width: 200px;
  z-index: 3;
}

.hitbox:hover {
  cursor: none;
}

.hitbox:hover + .qr-img {
  transform: scale(2.5);
}

.qr-img {
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in;
  position: relative;
  z-index: 2;
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