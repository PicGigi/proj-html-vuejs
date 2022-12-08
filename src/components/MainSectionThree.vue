<!-- eslint-disable max-len -->
<template>
  <div class="container-three">
    <div class="creative-leader">
      <div class="cr-le-left">
        <h3>Creative Leader<span style="color:#FF4612">.</span></h3>
        <div class="line"></div>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis incidunt illo ad at placeat cumque voluptatum itaque accusamus saepe adipisci hic dolorem a, quos quaerat facilis officia eum iusto expedita!</span>
        <strong>READ MORE</strong>
      </div>
      <div class="cr-le-right">
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
      <h3>Latest news<span style="color:#FF4612">.</span></h3>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <div class="line"></div>
      <div class="cards-section">
        <div class="arrows">
          <font-awesome-icon icon="fa-solid fa-arrow-right" style="rotate:180deg"/>
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
        <div class="card">
          <img src="@/assets/img/h1-blog-img-03.jpg" alt="">
          <div class="card-info">
            <div>
              <font-awesome-icon icon="fa-regular fa-clock" style="margin: 0 .5rem 0 0; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">May 5, 2019</span>
              <font-awesome-icon icon="fa-regular fa-user" style="margin: 0 .5rem 0 1rem; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">Amanda Doe</span>
            </div>
            <h4>Next Investment</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam quaerat...</span>
            <strong>READ MORE</strong>
            <div class="orange-square">
              <font-awesome-icon icon="fa-solid fa-tag" />
              <span>Business, Leading</span>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/img/h1-blog-img-04.jpg" alt="">
          <div class="card-info">
            <div>
              <font-awesome-icon icon="fa-regular fa-clock" style="margin: 0 .5rem 0 0; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">May 5, 2019</span>
              <font-awesome-icon icon="fa-regular fa-user" style="margin: 0 .5rem 0 1rem; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">Amanda Doe</span>
            </div>
            <h4>Team Building</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam quaerat...</span>
            <strong>READ MORE</strong>
            <div class="orange-square">
              <font-awesome-icon icon="fa-solid fa-tag" />
              <span>Business, Leading</span>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/img/h1-blog-img-01.jpg" alt="">
          <div class="card-info">
            <div>
              <font-awesome-icon icon="fa-regular fa-clock" style="margin: 0 .5rem 0 0; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">May 5, 2019</span>
              <font-awesome-icon icon="fa-regular fa-user" style="margin: 0 .5rem 0 1rem; color: #FF4612; font-size: .8rem"/>
              <span style="font-size: .8rem">Amanda Doe</span>
            </div>
            <h4>New Business Day</h4>
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
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .container-three{
    background-color: white;
    width: 100%;
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
