import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Layout from "@/components/Layout.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/layout", component: Layout },
    { path: "*", component: NotFound }
  ]
});

export default router;
