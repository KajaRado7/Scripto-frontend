import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import 'bootstrap';

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
    path: '/my_downloads',
    name: 'My Downloads',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/My Downloads.vue'),
  },
  {
    path: '/script',
    name: 'Script',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Script.vue'),
  },
  {
    path: '/search_results',
    name: 'Search Results',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Search Results.vue'),
  },
  {
    path: '/study',
    name: 'Study',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Study.vue'),
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Subject.vue'),
  },
  {
    path: '/university',
    name: 'University',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/University.vue'),
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
  {
    path: '/top_ratings',
    name: 'Top Ratings',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Top Ratings.vue'),
  },
  {
    path: '/top_downloads',
    name: 'Top Downloads',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Top Downloads.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
