import Vue from "vue";
import Vuep from "vuep";
import "vuep/dist/vuep.css";
import App from "./App.vue";
import router from "@/router";

Vue.use(Vuep /*, { codemirror options } */);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
