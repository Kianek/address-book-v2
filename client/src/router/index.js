import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "sign-in",
    component: SignIn,
    meta: { requiresAuth: false }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/add",
    name: "AddContact",
    component: () => import("../views/AddContact.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/:id/edit",
    name: "EditContact",
    props: { default: true },
    component: () => import("../views/EditContact.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/change-email",
    name: "ChangeEmail",
    component: () => import("../views/ChangeEmail.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
    meta: { requiresAuth: true }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.isAuthenticated) {
      next({ name: "sign-in" })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
