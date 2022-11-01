<template>
  <div class="input">
    <input ref="textarea" placeholder="Enter your text here..." @keyup="onKeyPress" />
  </div>
</template>

<script lang="ts">
import { TextareaHTMLAttributes } from '@vue/runtime-dom'
const placeholders = ["https://muhl.is", "mailto:akif@muhl.is", "tel:+44777665544"]

export default {
  name: "WizardTextBox",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onKeyPress() {
      const textAreaRef = this.$refs.textarea as TextareaHTMLAttributes;
      const value = textAreaRef.value;
      this.$emit("valueChange", value);
    }
  },
  mounted() {
    const textAreaRef = this.$refs.textarea as TextareaHTMLAttributes;
    
    setInterval(() => {
      if (textAreaRef.value != "") {
        return;
      }

      textAreaRef.placeholder = placeholders[this.counter];

      this.counter++;
      if (this.counter == placeholders.length) {
        this.counter = 0
      }
    }, 2500);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

::placeholder {
  opacity: 0.35;
}

input {
  width: 300px;
  height: 100%;
  border: 1px solid rgba(0,0,0,.25);
  border-radius: .25rem;
  background: white;
  color: black;
  resize: none;
  outline: none;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 1em;
  padding: 10px;
  box-sizing: border-box;

  transition: all 0.25s ease-out;
}

input:focus {
  border: 1px solid rgba(0,0,0,1)
}
</style>