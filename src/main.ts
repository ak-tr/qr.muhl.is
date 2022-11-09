import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

app.mount("#app");
