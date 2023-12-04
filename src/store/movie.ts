import axios from 'axios'
import { defineStore } from 'pinia'
import type { Movies, MovieDetail } from '~/types/types'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    totalResults: 0 as number,
    isLoading: false as boolean,
    movieDetails: {} as MovieDetail,
    searchWord: '' as string,
    page: 1 as number
  }),
  actions: {
    async fetchMovies(title?: string) {
      this.isLoading = true
      if (title != null) {
        this.searchWord = title
      }
      try {
        const res = await axios('/api/movieSearch', {
          method: 'GET',
          params: {
            title: this.searchWord,
            page: this.page++
          }
        })
        if (res.status !== 200) {
          throw new Error('API 처리 중 오류 발생')
        }
        const { Search, totalResults } = res.data
        this.movies = [...this.movies, ...Search]
        this.totalResults = totalResults || 0
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
        }
      }
      this.isLoading = false
    },
    async fetchMovieDetails(id: string) {
      this.isLoading = true
      try {
        const res = await axios('/api/movieDetail', {
          method: 'GET',
          params: { id }
        })
        if (res.status !== 200) {
          throw new Error('API 처리 중 오류 발생')
        }
        this.movieDetails = res.data
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
        }
      }
      this.isLoading = false
    }
  }
})
