import Vue from 'vue'
import VueRouter from 'vue-router'
import paths from "./paths";

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: paths,
})

export default router
