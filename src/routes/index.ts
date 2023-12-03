import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue'
import MovieInfoPage from '~/components/MovieInfo/MovieInfoPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/info',
      component: MovieInfoPage
    }
  ]
})
