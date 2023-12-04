<script setup lang="ts">
import { useMovieStore } from '~/store/movie'
import { ref } from 'vue'
import Modal from '~/components/utils/Modal.vue'

const movieStore = useMovieStore()

const { Title, Poster, Released, Plot, Director, Actors, Ratings, Genre } =
  movieStore.movieDetails

const isModalOpen = ref(false)

function ModalOpen() {
  console.log('modal open')
  isModalOpen.value = true
}

function modalClose() {
  console.log('modal close')
  isModalOpen.value = false
}
</script>

<template>
  <div class="movie-info">
    <div class="movie-title">{{ Title }}</div>
    <div class="container">
      <img
        class="movie-poster"
        :src="Poster"
        onerror="this.onerror=null; this.src='src/assets/imageLoadingFail.png'"
        @click="ModalOpen" />
      <div class="movie-detail">
        <div class="detail-text-container">
          <span class="span-title"> 개봉 </span>
          <span class="span-text">{{ Released }}</span>
        </div>
        <div class="detail-text-container">
          <span class="span-title"> 장르 </span>
          <span class="span-text">
            {{ Genre }}
          </span>
        </div>
        <div class="detail-text-container">
          <span class="span-title"> 줄거리 </span>
          <span class="span-text">{{ Plot }}</span>
        </div>
        <div class="detail-text-container">
          <span class="span-title"> 감독 </span>
          <span class="span-text">
            {{ Director }}
          </span>
        </div>
        <div class="detail-text-container">
          <span class="span-title"> 출연 </span>
          <span class="span-text">
            {{ Actors }}
          </span>
        </div>
        <div class="detail-text-container">
          <span class="span-title"> 평점 </span>
          <div
            v-for="rating in Ratings"
            :key="rating.Source">
            <span class="span-text"> {{ rating.Source }} - </span>
            <span class="span-text">
              {{ rating.Value }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
    v-if="isModalOpen"
    @click="modalClose"></Modal>
</template>
<style scoped lang="scss">
.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie-title {
  display: flex;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 60px;
  color: #fff;
  @media screen and (max-width: 700px) {
    //width: 200px;
    font-size: 30px;
  }
}

.container {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  max-width: 1100px;
  margin: 0 auto;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  .movie-poster {
    width: 400px;
    cursor: pointer;
    border-radius: 20px;
    @media screen and (max-width: 700px) {
      width: 80%;
    }
  }
  .detail-text-container {
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    .span-title {
      font-size: 20px;
      color: #fff;
      @media screen and (max-width: 700px) {
        font-size: 20px;
      }
    }
    .span-text {
      font-size: 20px;
      @media screen and (max-width: 700px) {
        font-size: 20px;
      }
    }
  }
}
</style>
