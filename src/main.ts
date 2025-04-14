import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import "@fortawesome/fontawesome-free/css/all.css";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "toastify-js/src/toastify.css";
import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus);
app.use(MotionPlugin);
app.use(router);

app.mount("#app");
