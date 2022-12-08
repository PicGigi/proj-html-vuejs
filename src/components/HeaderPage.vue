<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <header>
<!-- SFONDO -->
    <img :src="arrBackground[currentImg]" alt="">
<!-- PARTE SUPERIORE HEADER CON LOGO E MENU' -->
    <div class="header-top">
      <img src="@/assets/img/logo-img-01.png" alt=""> <!--LOGO -->
      <ul class="header-menu f-1"> <!--MENU' -->
        <li v-for="objLi in arrMenu" :key="objLi" class="header-li">
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="li-arrow"/>
          <span class="li-text">{{objLi}}</span>
        </li>
        <li><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="header-li"/></li>
        <li><font-awesome-icon icon="fa-solid fa-bars" class="header-li"/></li>
      </ul>
    </div>
    <div class="header-bottom">
      <div class="arrows">
        <div class="arrow" @click="change()"><font-awesome-icon icon="fa-solid fa-arrow-right" style="rotate: 180deg"/></div>
        <div class="arrow" @click="change()"><font-awesome-icon icon="fa-solid fa-arrow-right" /></div>
      </div>
      <div class="our-team">
        <h1 class="our-team-title f-2">Our Team<span style="color: #FF4612;">.</span></h1>
        <span class="our-team-text f-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem libero sed dignissimos labore, sint voluptatum accusamus laboriosam.</span>
        <div class="buttons">
          <button>READ MORE <div class="line" /><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
          <button>PURCHASE <div class="line" /><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      arrMenu: ['HOMES', 'PAGES', 'BLOG', 'SHOP', 'EVENTS', 'ELEMENTS'],
      arrBackground: ['img/rev-slider-main-home-img-03.jpg', 'img/rev-slider-main-home-img-02.png'],
      currentImg: 0,
    };
  },
  methods: {
    change() {
      if (this.currentImg === 0) {
        this.currentImg = 1;
      } else if (this.currentImg === 1) {
        this.currentImg = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  display: flex;
  position: relative;
// SFONDO
  img{
    width: 100%;
  }
// TOP
  .header-top{
    width: 100%;
    height: 100px;
    position: absolute;
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    img{
      width: min-content;
    }
// MENU' HEADER
    .header-menu{
      display: flex;
      align-items: center;
      font-weight: bold;
      list-style: none;
      gap: 2rem;
      .header-li{
        cursor: pointer;
        display: flex;
        align-items: center;
        .li-arrow{
          visibility: hidden;
          margin-right: .5rem;
        }
        &:hover .li-arrow{
          visibility: visible;
        }
        &:hover{
          color: #FF4612;
        }
      }
    }
  }
// BOTTOM
  .header-bottom{
    display: flex;
    width: 100%;
    position: absolute;
    top: 20rem;
// FRECCIE
    .arrows{
      display: flex;
      justify-content: space-between;
      width: 100%;
      .arrow{
      font-size: 3rem;
      margin: 2rem;
      }
    }
// OUR TEAM
    .our-team{
      position: absolute;
      width: 600px;
      left: 200px;
      h1{
        font-size: 5rem;
      }
      span{
        color: #A6A6A6;
      }
      .buttons{
        display: flex;
        margin: 2rem 0;
        gap: 2rem;
        button{
          background-color: #FF4612;
          color: white;
          border: none;
          padding: .5rem 1rem .5rem 2rem;
          display: flex;
          align-items: center;
          font-weight: bold;
          cursor: pointer;
          &:hover{
            background-color: white;
            color: black;
            .line{
              background-color: black;
            }
          }
          .line{
            width: 1px;
            background-color: white;
            height: 25px;
            margin-left: 2rem;
            margin-right: 1rem;
          }
        }
      }
    }

  }
}
</style>
