import AppHeader from "../../layout/AppHeader";
import AppFooter from "../../layout/AppFooter";
import Components from "../../views/Components.vue";

export default [
  {
    path: '/',
    name: 'landing',
    components: {
      header: AppHeader,
      default: Components,
      footer: AppFooter
    },
    component: () => import(/* webpackChunkName: "home" */ './Landing.vue')
  }
]