import Vue from "vue";
import Router from "vue-router";
import ControlTable from "./views/ControlTable.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "crtl-table",
      component: ControlTable
    }
    // {
    //   path: "/other",
    //   name: "other",
    //   component: () => import("./views/Other.vue")
    // }
  ]
});
