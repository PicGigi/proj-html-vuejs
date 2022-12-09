<template>
  <main>
    <main-section-one />
    <main-section-two />
    <main-section-three />
    <main-section-four />
    <main-section-five />
  </main>

</template>

<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';
import MainSectionThree from './MainSectionThree.vue';
import MainSectionFour from './MainSectionFour.vue';
import MainSectionFive from './MainSectionFive.vue';

export default {
  components: {
    MainSectionOne,
    MainSectionTwo,
    MainSectionThree,
    MainSectionFour,
    MainSectionFive,
  },

};
</script>

<style>
.up-button{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  display: grid;
  place-items: center;
  padding: 1rem;
  color: #FF5612;
  background-color: white;
  right: 1rem;
  rotate: -90deg;
  z-index: 10;
}
</style>
