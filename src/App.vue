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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Roboto;
}
</style>
