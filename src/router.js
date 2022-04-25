import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/Home.vue";
import AboutView from "@/views/AboutView.vue";
import CoinDetail from "@/views/CoinDetail.vue";
import ErrorView from "@/views/ErrorView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "*",
      name: "error",
      component: ErrorView,
    },
  ],
});
