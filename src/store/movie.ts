import axios from 'axios'
import { defineStore } from 'pinia'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface MovieDetail {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    totalResults: 0 as number,
    isLoading: false as boolean,
    movieDetails: {} as MovieDetail
  }),
  getters: {
    //좀 가공된 계산된 상태!
    /*
    filteredMovies(state) {
      return state.movies
        .filter((movie) => Number(movie.Year) > 2010)
        .sort((a, b) => Number(b.Year) - Number(a.Year))
    }
    */
  },
  actions: {
    async fetchMovies(title: string) {
      this.isLoading = true
      try {
        const res = await axios('/api/movieSearch', {
          method: 'GET',
          params: { title }
        })
        console.log(res)
        if (res.statusText !== 'OK') {
          throw new Error('API 처리 중 오류 발생')
        }
        const { Search, totalResults } = res.data
        this.movies = Search || []
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
        if (res.statusText !== 'OK') {
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
