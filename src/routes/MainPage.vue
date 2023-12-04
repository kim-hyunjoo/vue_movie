<script setup lang="ts">
import Loading from '~/components/utils/Loading.vue'
import { useMovieStore } from '~/store/movie'

const movieStore = useMovieStore()
</script>

<template>
  <main>
    <Loading v-if="movieStore.isLoading"></Loading>
    <RouterView></RouterView>
  </main>
</template>
