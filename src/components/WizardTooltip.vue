<template>
  <div class="tooltip" @mouseenter="onMouseOver" @mouseleave="onMouseLeave">
    <svg width="20" height="20" fill="grey" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.625c-5.17 0-9.375 4.206-9.375 9.375 0 5.17 4.206 9.375 9.375 9.375 5.17 0 9.375-4.206 9.375-9.375 0-5.17-4.206-9.375-9.375-9.375Zm0 3.844a1.219 1.219 0 1 1 0 2.437 1.219 1.219 0 0 1 0-2.437Zm3 10.593H9.375v-1.5h2.063v-4.124h-1.5v-1.5h3v5.624H15v1.5Z">
      </path>
    </svg>
    <div class="tooltip-box" v-if="isHovered">If you want to programatically create QR codes you may use the <a
        href="https://qr.muhl.is/qr/">qr.muhl.is/qr/</a> URL to do so! Visit the <a
        href="https://github.com/ak-tr/cf-qr">GitHub</a> repo for more info.</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "WizardTooltip",
  data() {
    return {
      isHovered: false,
    }
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
      console.log(this.isHovered);
    },
    onMouseLeave() {
      this.isHovered = false;
    }
  }
};
</script>

<style scoped>
.tooltip-box {
  position: absolute;
  background-color: white;
  width: 250px;
  padding: 10px;
  transform: translateX(-250px);
  background: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0, .125);
  border-radius: .25rem;
}

.tooltip {
  place-self: start end;
}

svg {
  position: relative;
  transition: all 0.3s;
  z-index: 1;
}

svg:hover {
  cursor: help;
  color: grey;
}
</style>