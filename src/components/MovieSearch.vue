<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '~/store/movie'

const movieStore = useMovieStore()
const title = ref('')
const router = useRouter()

async function searchMovies() {
  if (title.value.trim().length === 0) {
    return
  }
  await movieStore.fetchMovies(title.value)
  router.push(`/search`)
}
function resetMovies() {
  title.value = ''
  movieStore.$reset() // 모든 상태 초기화!
}

function gotoHome() {
  resetMovies()
  router.push('/')
}
</script>
<template>
  <h1 @click="gotoHome">영화 검색 사이트</h1>
  <div class="search">
    <input
      v-model="title"
      placeholder="검색하고 싶은 영화 이름을 입력하세요."
      @keydown.enter="searchMovies" />
    <button @click="searchMovies">검색</button>
  </div>
</template>

<style scoped lang="scss">
h1 {
  cursor: pointer;
  text-align: center;
}
.search {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    border-radius: 10px;
    height: 50px;
    width: 70%;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    height: 50px;
    margin-right: 10px;
    width: 50px;
  }
}
</style>
