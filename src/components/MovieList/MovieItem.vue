<script setup lang="ts">
import type { Movie } from '~/types/types'
import { useMovieStore } from '~/store/movie'
import { useRouter } from 'vue-router'

const props = defineProps<{
  movie: Movie
}>()
const { Poster } = props.movie

const router = useRouter()

const movieStore = useMovieStore()

async function fetchMovieDetails(id: string) {
  await movieStore.fetchMovieDetails(id)
  movieStore.movieDetails.Poster = movieStore.movieDetails.Poster.replace(
    'SX300',
    'SX700'
  )
}

const onClickMovie = async () => {
  console.log('영화클릭')
  const id = props.movie.imdbID
  await fetchMovieDetails(id as string)
  router.push(`/info?id=${id}`)
}
</script>

<template>
  <div class="movie-item">
    <img
      class="movie-poster"
      :src="Poster"
      onerror="this.onerror=null; this.src='/src/assets/imageLoadingFail.png'"
      @click="onClickMovie" />
  </div>
</template>

<style scoped lang="scss">
.movie-item {
  .movie-poster {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      scale: 1.05;
      border: 2px solid white;
    }
  }
}
</style>
