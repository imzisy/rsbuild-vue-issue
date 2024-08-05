import { createApp } from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
const app = createApp(App);
import "./index.css"
// setupSentry(app, router);

export const bootstrap = () => {
  app
    .use(store(app))
    .use(router)
    .mount("#root");
};
