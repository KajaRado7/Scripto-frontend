import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import 'bootstrap';
import { Auth } from '@/services';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add_script',
    name: 'Add Script',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Add Script.vue'),
  },
  {
    path: '/my_account',
    name: 'My Account',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/My Account.vue'),
  },
  {
    path: '/scripts',
    name: 'Scripts',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Scripts.vue'),
  },
  // ruta za zasebnu skriptu
  {
    path: '/scripts/:id',
    props: true,
    name: 'Script',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Script.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//INTERCEPTORI
// prije svakog prijelaza na drugu stranicu izvrši ovu funk
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup']; // stranice dostupne svima
  // login je potreban kada str. ,na koju želimo doći, ne pripada publicPages
  const loginNeeded = !publicPages.includes(to.path);
  // provjera da li korisnik postoji
  const user = Auth.getUser();

  // provjera ako korisnika nema prilikom prijave
  if (loginNeeded && !user) {
    next('/login');
    return;
  }
  // pokreće kod nakon što se izvrše sve middleware funk.
  next();
});

export default router;
