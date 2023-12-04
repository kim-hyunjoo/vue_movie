<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>
<template>
  <div class="container">
    <div id="spinner"></div>
  </div>
</template>
<style scoped lang="scss">
div {
  .container {
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 200px;
    height: 200px;
    margin: 20px auto;
  }
  #spinner {
    margin: calc(50% - 25px) auto;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    border-top-color: white;
    border-radius: 100%;

    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
