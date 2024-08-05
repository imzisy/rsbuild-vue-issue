import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./index.css"

export const bootstrap = () => {
  return createApp(App)
    .use(router)
    .use(store)
    .mount("#root");
};
