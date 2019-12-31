import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  },
  {
    path: '/Bookmanagement/bookmanage.vue',
    name: 'bookmanage',
    component: () => import(
      /* webpackChunkName: 'bookmanage' */ '../components/Bookmanagement/bookmanage.vue',
    ),
  },
  {
    path: '/BookListSearch/booklistsearch.vue',
    name: 'booklistsearch',
    component: () => import(
      /* webpackChunkName: 'booklistsearch' */ '../components/BookListSearch/booklistsearch.vue',
    ),
  },
  {
    path: '/TravelRecommend/travel.vue',
    name: 'travel',
    component: () => import(
      /* webpackChunkName: 'booklistsearch' */ '../components/TravelRecommend/travel.vue',
    ),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
