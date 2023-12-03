<script setup lang="ts">
import { ref } from 'vue'
import { useMovieStore } from '~/store/movie'

const movieStore = useMovieStore()
const title = ref('')

async function searchMovies() {
  await movieStore.fetchMovies(title.value)
}
function resetMovies() {
  title.value = ''
  //movieStore.movies = []
  movieStore.$reset() // 모든 상태 초기화!
}
</script>

<template>
  <input
    v-model="title"
    @keydown.enter="searchMovies" />
  <button @click="searchMovies">search</button>
  <button @click="resetMovies">reset</button>
  <ul>
    <li
      v-for="movie in movieStore.filteredMovies"
      :key="movie.imdbID">
      {{ movie.Title }}
      {{ movie.Year }}
    </li>
  </ul>
</template>
