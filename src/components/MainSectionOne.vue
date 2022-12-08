<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="container-one">
    <div class="main-top">
      <h2 class="f-2">Our specialties<span style="color: #FF4612;">.</span></h2>
      <span class="f-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit</span>
      <div class="little-line"></div>
      <div class="circles-section">
        <div class="circle" v-for="objCircle in arrCircles" :key="objCircle.text">
          <img :src="objCircle.img" alt="">
          <h3 class="f-2">{{ objCircle.text }}</h3>
          <span class="f-1">Lorem ipsum dolor sit amet consectetur.</span>
        </div>
      </div>
    </div>
    <img src="@/assets/svg/svg-4.svg" alt="" class="bg-img">
    <div>
      <div class="main-slider">
        <img :src="arrImg[currentImg]" alt="">
        <div class="arrow-section">
          <div class="left-arrow arrow" @click="goLeft()"><font-awesome-icon icon="fa-solid fa-arrow-right" style="rotate: 180deg"/></div>
          <div class="right-arrow arrow" @click="goRight()"><font-awesome-icon icon="fa-solid fa-arrow-right" /></div>
        </div>
      </div>
      <div class="jason-card">
        <h3 class="f-2">Jason Bickford</h3>
        <span class="f-1">Founder and Executive Director</span>
        <div class="line"></div>
        <span class="f-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ducimus officia accusamus eligendi odio!</span>
        <div class="jason-social">
          <div class="social-circle"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></div>
          <div class="social-circle"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
          <div class="social-circle"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
        </div>
        <h2 class="signature">404 Firma not Found</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrCircles: [
        {
          img: 'svg/svg-0.svg',
          text: 'Knowing',
        },
        {
          img: 'svg/svg-1.svg',
          text: 'Selling',
        },
        {
          img: 'svg/svg-2.svg',
          text: 'Learning',
        },
        {
          img: 'svg/svg-3.svg',
          text: 'Contact',
        },
      ],
      arrImg: [
        'img/h1-blog-img-04.jpg',
        'img/h1-blog-img-03.jpg',
        'img/h1-blog-img-02.jpg',
        'img/h1-blog-img-01.jpg',
      ],
      currentImg: 0,
    };
  },
  methods: {
    goLeft() {
      if (this.currentImg === 0) {
        this.currentImg = 3;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImg--;
      }
    },
    goRight() {
      if (this.currentImg === 3) {
        this.currentImg = 0;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImg++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-one{
  background-color: #FAFAFA;
  width: 100%;
  height: 165vh;
  position: relative;
  // TOP
  .main-top{
    position: absolute;
    top: -5rem;
    width: 90%;
    margin: 0 5%;
    background-color: white;
    height: fit-content;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2{
      font-size: 3rem;
    }
    span{
      color: #A6A6A6;
    }
    .little-line{
      background-color: #FF4612;
      width: 50px;
      height: 2px;
    }
    .circles-section{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin-top: 2rem;
      .circle{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        text-align: center;
        gap: .5rem;

        img{
          height: 150px;
          width: 150px;
        }
      }
    }
  }
  .bg-img{
    position: absolute;
    right: 2rem;
    top: 30rem;
  }
  .main-slider{
    width: 750px;
    padding: 1rem;
    position: absolute;
    top: 36rem;
    margin-left: 5rem;
    display: flex;
    img{
      width: 100%;
    }
    .arrow-section{
      display: flex;
      position: absolute;
      bottom: 1rem;
      .arrow{
        color: white;
        background-color: #FF4612;
        width: fit-content;
        height: fit-content;
        padding: 1rem;
        font-size: 2rem;
        &:hover{
          color: black;
          background-color: white;
        }
      }
    }
  }
  .jason-card{
    width: 600px;
    height: 400px;
    background-color: white;
    position: absolute;
    top: 40rem;
    left: 45rem;
    padding: 4rem;

    h3{
      font-size: 2.5rem;
    }
    span{
      color: #A6A6A6;
    }
    .line{
      background-color: #FF4612;
      width: 100px;
      height: 2px;
      margin: 1rem 0;
    }
    .jason-social{
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      .social-circle{
        color: white;
        background-color: #FF4612;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        &:hover{
          background-color: white;
          color: black;
          border: 1px solid #A6A6A6;
        }
      }
    }
    .signature{
        color: #FF4612;
        position: absolute;
        left: 20rem;
        top: 15rem;
      }
  }
}
</style>
