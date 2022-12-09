<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <div class="container-three">
    <div class="creative-leader">
      <div class="cr-le-left">
        <h3 class="f-2">Creative Leader<span style="color:#FF4612">.</span></h3>
        <div class="line"></div>
        <span class="f-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis incidunt illo ad at placeat cumque voluptatum itaque accusamus saepe adipisci hic dolorem a, quos quaerat facilis officia eum iusto expedita!</span>
        <strong class="f-1">READ MORE</strong>
      </div>
      <div class="cr-le-right f-2">
        <div class="bar-section">
          <h4>Mentorship</h4>
          <h4>78%</h4>
          <div class="bar"><div class="progress" style="width: 78%"></div></div>
        </div>
        <div class="bar-section">
          <h4>Education</h4>
          <h4>95%</h4>
          <div class="bar"><div class="progress" style="width: 95%"></div></div>
        </div>
        <div class="bar-section">
          <h4>Learning</h4>
          <h4>65%</h4>
          <div class="bar"><div class="progress" style="width: 65%"></div></div>
        </div>
        <div class="bar-section">
          <h4>Motivation</h4>
          <h4>83%</h4>
          <div class="bar"><div class="progress" style="width: 83%"></div></div>
        </div>
      </div>
    </div>
    <div class="latest-news">
      <img src="@/assets/svg/svg-4.svg" alt="" style="position:absolute; left: 5rem; top:-5rem ">
      <h3 class="f-2">Latest news<span style="color:#FF4612">.</span></h3>
      <span class="f-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <div class="line"></div>
      <div class="cards-section">
        <div class="arrows">
          <font-awesome-icon icon="fa-solid fa-arrow-right" @click="goLeft()" style="rotate:180deg" />
          <font-awesome-icon icon="fa-solid fa-arrow-right" @click="goRight() "/>
        </div>
        <div class="card f-1">
          <img :src="arrImg[currentImgOne].img" alt="">
          <div class="card-info">
            <div>
              <font-awesome-icon icon="fa-regular fa-clock" style="margin: 0 .5rem 0 0; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">May 5, 2019</span>
              <font-awesome-icon icon="fa-regular fa-user" style="margin: 0 .5rem 0 1rem; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">Amanda Doe</span>
            </div>
            <h4 class="f-2">{{ arrImg[currentImgOne].text }}</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam quaerat...</span>
            <strong>READ MORE</strong>
            <div class="orange-square">
              <font-awesome-icon icon="fa-solid fa-tag" />
              <span>Business, Leading</span>
            </div>
          </div>
        </div>
        <div class="card f-1">
          <img :src="arrImg[currentImgTwo].img" alt="">
          <div class="card-info">
            <div>
              <font-awesome-icon icon="fa-regular fa-clock" style="margin: 0 .5rem 0 0; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">May 5, 2019</span>
              <font-awesome-icon icon="fa-regular fa-user" style="margin: 0 .5rem 0 1rem; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">Amanda Doe</span>
            </div>
            <h4 class="f-2">{{ arrImg[currentImgTwo].text }}</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam quaerat...</span>
            <strong>READ MORE</strong>
            <div class="orange-square">
              <font-awesome-icon icon="fa-solid fa-tag" />
              <span>Business, Leading</span>
            </div>
          </div>
        </div>
        <div class="card f-1">
          <img :src="arrImg[currentImgThree].img" alt="">
          <div class="card-info">
            <div>
              <font-awesome-icon icon="fa-regular fa-clock" style="margin: 0 .5rem 0 0; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">May 5, 2019</span>
              <font-awesome-icon icon="fa-regular fa-user" style="margin: 0 .5rem 0 1rem; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">Amanda Doe</span>
            </div>
            <h4 class="f-2">{{ arrImg[currentImgThree].text }}</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam quaerat...</span>
            <strong>READ MORE</strong>
            <div class="orange-square">
              <font-awesome-icon icon="fa-solid fa-tag" />
              <span>Business, Leading</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#top" class="up-button" style="top: 7rem"> <font-awesome-icon icon="fa-solid fa-arrow-right" /> </a>
    <a href="#top" class="up-button" style="top: 50%"> <font-awesome-icon icon="fa-solid fa-arrow-right" /> </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImgOne: 0,
      currentImgTwo: 1,
      currentImgThree: 2,
      arrImg: [
        {
          img: 'img/h1-blog-img-01.jpg',
          text: 'Next Investment',
        },
        {
          img: 'img/h1-blog-img-02.jpg',
          text: 'Team Building',
        },
        {
          img: 'img/h1-blog-img-03.jpg',
          text: 'New Business Day',
        },
        {
          img: 'img/h1-blog-img-04.jpg',
          text: 'Sample text',
        },
      ],
    };
  },
  methods: {
    goLeft() {
      if (this.currentImgOne === 0) {
        this.currentImgOne = 3;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImgOne--;
      }
      if (this.currentImgTwo === 0) {
        this.currentImgTwo = 3;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImgTwo--;
      }
      if (this.currentImgThree === 0) {
        this.currentImgThree = 3;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImgThree--;
      }
    },
    goRight() {
      if (this.currentImgOne === 3) {
        this.currentImgOne = 0;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImgOne++;
      }
      if (this.currentImgTwo === 3) {
        this.currentImgTwo = 0;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImgTwo++;
      }
      if (this.currentImgThree === 3) {
        this.currentImgThree = 0;
      } else {
        // eslint-disable-next-line no-plusplus
        this.currentImgThree++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .container-three{
    background-color: white;
    width: 100%;
    position: relative;
    .line{
          background-color: #FF4612;
          width: 100px;
          height: 3px;
        }
    .creative-leader{
      display: flex;
      margin: 5rem 10rem;
      .cr-le-left{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        h3{
          font-size: 2.5rem;
        }
        span{
          color: #A6A6A6;
        }
      }
      .cr-le-right{
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 2rem;
        font-size: 1.2rem;

        .bar-section{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: .5rem;
          .bar{
            width: 100%;
            border-bottom: 1px solid #A6A6A6;
            .progress{
              background-color: #FF4612;
              height: 5px;
            }
          }
        }
      }
    }
    .latest-news{
      background-color: #FAFAFA;
      width: 100%;
      padding: 5rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      position: relative;

      h3{
        font-size: 2.5rem;
      }
      span{
        color: #A6A6A6;
      }
      .cards-section{
        width: 100%;
        position: relative;
        padding: 5%;
        display: flex;
        justify-content: space-around;

        .arrows{
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 2rem;
          position: absolute;
          top: 50%;
        }
        .card{
          width: 30%;
          height: 100%;
          img{
            width: 100%;
            margin-bottom: 2rem;
          }
          .card-info{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: relative;

            h4{
              font-size: 2rem;
            }
            .orange-square{
              background-color: #FF4612;
              padding: 1rem;
              width: fit-content;
              color: white;
              position: absolute;
              top: -4rem;
              right: 1rem;

              span{
                color: white;
                margin-left: .5rem;
              }
            }
          }
        }
      }
    }

  }
</style>
