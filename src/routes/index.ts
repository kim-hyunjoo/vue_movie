import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './MainPage.vue'
import MovieList from '~/components/MovieList.vue'
import MovieInfoPage from '~/components/MovieInfo.vue'
import NotFound from '~/components/NotFound.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: '/search',
          component: MovieList
        },
        {
          path: '/info',
          component: MovieInfoPage
        }
      ]
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
