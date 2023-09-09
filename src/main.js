import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./routes/router";
createApp(App).use(router).use(VueAxios, axios).mount("#app");
