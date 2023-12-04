<script setup lang="ts">
import Loading from '~/components/Loading.vue'
import { useMovieStore } from '~/store/movie'

const movieStore = useMovieStore()
</script>

<template>
  <main>
    <Loading v-if="movieStore.isLoading"></Loading>
    <RouterView v-else></RouterView>
  </main>
</template>
