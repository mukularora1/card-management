import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.css";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
