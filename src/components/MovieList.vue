<script setup lang="ts">
import { useMovieStore } from '~/store/movie'
import NotFound from './NotFound.vue'
import MovieItem from './MovieItem.vue'

const movieStore = useMovieStore()
</script>

<template>
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
</template>

<style scoped lang="scss">
.movie-list {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  gap: 20px;
}
</style>
