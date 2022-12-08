<!-- eslint-disable max-len -->
<template>
  <div class="container-four">
    <div class="testimonials">
      <h1 class="f-2">Testimonials.</h1>
      <div class="testimonial-info">
        <img :src="arrInfo[currentImg].img" alt="">
        <h3 class="f-2" style="color: white; font-size: 1.5rem;">{{ arrInfo[currentImg].text}}</h3>
        <span class="f-1" style="color: #A6A6A6; font-size: 1.2rem;">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus voluptate animi reprehenderit consequatur?"</span>
        <div class="slider-counter">
          1
          <div class="slider-body">
            <div class="slider-progress" :class="arrInfo[currentImg].class"></div>
          </div>
          3
        </div>
        <div class="arrows">
          <font-awesome-icon icon="fa-solid fa-arrow-right" @click="goLeft()" style="rotate:180deg"/>
          <font-awesome-icon icon="fa-solid fa-arrow-right" @click="goRight()"/>
        </div>
      </div>
    </div>
    <div class="video">
      <img src="@/assets/img/h1-img-04.jpg" alt="" style="width: 100%">
      <font-awesome-icon icon="fa-solid fa-play" class="play"/>
      <div class="side-buttons">
        <div class="load"><img src="@/assets/svg/svg-5.svg" alt=""></div>
        <div class="cart"><img src="@/assets/svg/svg-7.svg" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImg: 0,
      arrInfo: [
        {
          img: 'img/h3-img-04.png',
          text: 'Cynthia Clark',
          class: 'one',
        },
        {
          img: 'img/h3-img-07.png',
          text: 'Liliana Wang',
          class: 'two',
        },
        {
          img: 'img/h3-img-08.png',
          text: 'Simona Wayne',
          class: 'three',
        },
      ],
    };
  },
  methods: {
    goLeft() {
      if (this.currentImg === 0) {
        this.currentImg = 2;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImg--;
      }
    },
    goRight() {
      if (this.currentImg === 2) {
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
.testimonials{
  width: 100%;
  height: 80vh;
  background-color: #181515;
  position: relative;
  display: flex;
  justify-content: center;

  h1{
    font-size:15rem ;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  .testimonial-info{
    width: 40%;
    height: 400px;
    z-index: 1;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;

    img{
      border: 5px solid white;
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
    .slider-counter{
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #A6A6A6;
      .slider-body{
        height: 3px;
        width: 150px;
        background-color: #555555;

        .slider-progress{
          height: 100%;
          width: calc(100% / 3);
          background-color: white;
        }
        .two{
          margin-left: calc(100% / 3);
        }
        .three{
          margin-left: calc((100% / 3) * 2);
        }
      }
    }
  }
  .arrows{
    width: 75%;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    color: white;
  }
}
.video{
  position: relative;
  width: 100%;
  background-color: #FAFAFA;
  .play{
    font-size: 3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    color: rgba(255, 255, 255, .7);
    &:hover{
      color: white;
      scale: 1.2;
    }
  }
  .side-buttons{
    width: 50px;
    position: absolute;
    top: -1.6rem;
    right: 0;

    .load{
      background-color: #EE2852;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem;
    }
    .cart{
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .5rem;
      margin-top: 1rem;
    }
  }
}
</style>
