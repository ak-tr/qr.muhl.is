<template>
  <div class="qr-box">
    <div class="qr-img"><span v-html="svg"></span></div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "WizardQRBox",
  data() {
    return {
      svg: "",
    };
  },
  props: ["text"],
  watch: {
    text(value: string) {
      const url = `https://qr.muhl.is/qr/${encodeURIComponent(value)}`;
      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => this.svg = data);
    }
  }
}
</script>

<style scoped>
.qr-img {
  width: 100%;
  height: 100%;
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