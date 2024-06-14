import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";

export const bootstrap = () => {
  return createApp(App)
    .use(router)
    .use(store)
    .mount("#root");
};
