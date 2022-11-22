import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
library.add(faXmark, faCheck, far, fab)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia());
app.use(router);

app.mount("#app");
