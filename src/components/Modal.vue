<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useMovieStore } from '~/store/movie'

const movieStore = useMovieStore()

const { Poster } = movieStore.movieDetails
</script>
<template>
  <div class="modal">
    <img
      class="movie-poster"
      :src="Poster"
      onerror="this.onerror=null; this.src='src/assets/imageLoadingFail.png'" />
  </div>
</template>
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  img {
    height: 90%;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.7);
  }
}
</style>
