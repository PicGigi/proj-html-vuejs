<template>
  <div>
    <header-page />
    <main-page />
    <footer-page />
  </div>
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  components: {
    MainPage, FooterPage, HeaderPage,
  },

};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.f-1{
  font-family: 'Segoe UI', Roboto;
}
.f-2{
  font-family: 'Playfair Display', serif;
}
</style>
