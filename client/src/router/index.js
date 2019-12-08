import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/add",
    name: "AddContact",
    component: () => import("../views/AddContact.vue"),
  },
  {
    path: "/edit",
    name: "EditContact",
    component: () => import("../views/EditContact.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/change-email",
    name: "ChangeEmail",
    component: () => import("../views/ChangeEmail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
