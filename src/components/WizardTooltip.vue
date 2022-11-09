<template>
  <div class="tooltip-bar">
    <svg
      class="tooltip"
      @mouseenter="onMouseOver"
      @mouseleave="onMouseLeave"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.625c-5.17 0-9.375 4.206-9.375 9.375 0 5.17 4.206 9.375 9.375 9.375 5.17 0 9.375-4.206 9.375-9.375 0-5.17-4.206-9.375-9.375-9.375Zm0 3.844a1.219 1.219 0 1 1 0 2.437 1.219 1.219 0 0 1 0-2.437Zm3 10.593H9.375v-1.5h2.063v-4.124h-1.5v-1.5h3v5.624H15v1.5Z"
      ></path>
    </svg>
    <svg
      class="download"
      @mousedown="onMouseClick"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.158 8.883c-.622-.395-1.399-.683-2.254-.84a.75.75 0 0 1-.591-.577c-.369-1.617-1.154-3.006-2.304-4.058C15.663 2.178 13.885 1.5 12 1.5c-1.657 0-3.188.52-4.424 1.5A7.037 7.037 0 0 0 5.61 5.476a.752.752 0 0 1-.548.42c-1.271.23-2.368.689-3.206 1.346C.642 8.195 0 9.542 0 11.137c0 3.16 2.622 5.363 6.375 5.363h4.875v-5.979c0-.404.31-.75.714-.77a.75.75 0 0 1 .786.749v6h5.813c3.405 0 5.437-1.605 5.437-4.294 0-1.408-.637-2.558-1.842-3.323Z"
      ></path>
      <path
        d="m11.25 19.942-1.72-1.718a.75.75 0 0 0-1.06 1.062l3 2.995a.75.75 0 0 0 1.06 0l3-2.995a.75.75 0 0 0-1.06-1.062l-1.72 1.718V16.5h-1.5v3.442Z"
      ></path>
    </svg>
    <div class="tooltip-box" v-if="isHovered">
      If you want to programatically create QR codes you may use the
      <a href="https://qr.muhl.is/qr/">qr.muhl.is/qr/</a> URL to do so! Visit
      the <a href="https://github.com/ak-tr/cf-qr">GitHub</a> repo for more
      info.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "WizardTooltip",
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
    },
    onMouseLeave() {
      this.isHovered = false;
    },
    onMouseClick() {
      this.$emit("download");
    },
  },
};
</script>

<style scoped>
.tooltip-box {
  position: absolute;
  background-color: white;
  width: 250px;
  padding: 10px;
  transform: translateY(25px);
  background: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.tooltip-bar {
  width: 100%;
  display: flex;
  gap: 15px;
  /* place-self: start end; */
}

svg {
  display: block;
  position: relative;
  z-index: 1;
  color: grey;
  transition: all 0.3s;
}

.tooltip:hover {
  cursor: help;
  color: black;
}

.download:hover {
  cursor: pointer;
  color: black;
}
</style>