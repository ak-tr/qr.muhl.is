<template>
  <div class="input">
    <textarea ref="textarea" rows="3" placeholder="Enter your text here..." @keyup="onKeyPress"></textarea>
  </div>
</template>

<script lang="ts">
import { TextareaHTMLAttributes } from '@vue/runtime-dom'
export default {
  name: "WizardTextBox",
  methods: {
    onKeyPress() {
      const textAreaRef = this.$refs.textarea as TextareaHTMLAttributes
      const value = textAreaRef.value;
      this.$emit("valueChange", value);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.input {
  flex: 1;
}

textarea {
  width: 100%;
  height: 100%;
  border: 0;
  background: white;
  color: black;
  resize: none;
  outline: none;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 2em;
  padding: 10px;
  box-sizing: border-box;
}
</style>