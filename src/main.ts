import { createApp } from "vue";
// @ts-ignore
import { ApmVuePlugin } from "./apm/index.js";

import App from "./App.vue";

import Harlem from "@harlem/core";

import { router } from "./router";

import registerGlobalComponents from "./plugins/global-components";
import setAuthorizationToken from "./plugins/set-authorization-token";

const app = createApp(App);
app.use(router);
app.use(Harlem);
app.use(ApmVuePlugin, {
  router,
  config: {
    serviceName: "realworld-vue3",
    serverUrl:
      "https://632fbfef10e442db91057f72a1042806.apm.us-central1.gcp.cloud.es.io:443",
    serviceVersion: "",
    environment: "production",
  },
});

setAuthorizationToken();
registerGlobalComponents(app);

app.mount("#app");
