<script setup lang="ts">
import { useMovieStore } from '~/store/movie'
import NotFound from '~/components/NotFound.vue'
import MovieItem from './MovieItem.vue'

const movieStore = useMovieStore()

async function fetchMoviesMore() {
  if (movieStore.searchWord.length === 0) {
    return
  }
  await movieStore.fetchMovies()
}
</script>

<template>
  <div class="container">
    <div v-if="movieStore.movies.length === 0">
      <NotFound></NotFound>
    </div>
    <div
      v-else
      class="movie-list">
      <MovieItem
        v-for="movie in movieStore.movies"
        :key="movie.imdbID"
        :movie="movie" />
    </div>
    <button
      v-if="movieStore.totalResults > 0"
      class="more-button"
      @click="fetchMoviesMore">
      More
    </button>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  gap: 20px;
}
button {
  cursor: pointer;
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-image: var(--button-color);
  border: none;
  border-radius: 10px;
}
</style>
