<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <div class="container-five">
    <div class="map">
      <img src="@/assets/img/h1-contact-rev-01.png" alt="" class="map-img">
        <div class="teaching-spot ts-one">
          <img src="@/assets/img/h1-contact-rev-02.png" alt="" class="marker">
          <div class="marker-info">
            <h3 class="f-2" style="font-size: 1.3rem">New York Coaching</h3>
            <strong class="f-1" style="font-size: .8rem">READ MORE</strong>
          </div>
        </div>
        <div class="teaching-spot ts-two">
          <img src="@/assets/img/h1-contact-rev-02.png" alt="" class="marker">
          <div class="marker-info">
            <h3 class="f-2" style="font-size: 1.3rem">London Coaching</h3>
            <strong class="f-1" style="font-size: .8rem">READ MORE</strong>
          </div>
        </div>
        <div class="teaching-spot ts-three">
          <img src="@/assets/img/h1-contact-rev-02.png" alt="" class="marker">
          <div class="marker-info">
            <h3 class="f-2" style="font-size: 1.3rem">Melbourne Coaching</h3>
            <strong class="f-1" style="font-size: .8rem">READ MORE</strong>
          </div>
        </div>
    </div>
    <div class="contact-us">
      <h2 class="f-2" style="font-size: 2.5rem">Contact us<span style="color: #FF5612">.</span></h2>
      <span class="f-1" style="color: #A6A6A6;" >Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
      <div class="line"></div>
      <div class="input-section">
        <input class="f-1" type="text" placeholder="Your Name" style="width: 48%">
        <input class="f-1" type="text" placeholder="Your Email" style="width: 48%">
        <textarea type="text" placeholder="Write a message..." style="width: 100%;" class="message f-1" />
        <button class="f-1">SEND <div class="v-line" /><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
      </div>
    </div>
    <div class="sponsors">
      <div class="sponsor">
        <img src="@/assets/img/h4-clients-img-04-1.png" alt="">
        <img src="@/assets/img/h4-clients-img-03.png" alt="" class="hide">
      </div>
      <div class="sponsor">
        <img src="@/assets/img/h4-clients-img-06-1.png" alt="">
        <img src="@/assets/img/h4-clients-img-05.png" alt="" class="hide">
      </div>
      <div class="sponsor">
        <img src="@/assets/img/h4-clients-img-08-1.png" alt="">
        <img src="@/assets/img/h4-clients-img-07.png" alt="" class="hide">
      </div>
      <div class="sponsor">
        <img src="@/assets/img/h4-clients-img-10-1.png" alt="">
        <img src="@/assets/img/h4-clients-img-09.png" alt="" class="hide">
      </div>
      <div class="sponsor">
        <img src="@/assets/img/h4-clients-img-02.png" alt="">
        <img src="@/assets/img/h4-clients-img-01.png" alt="" class="hide">
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.container-five{
  width: 100%;
  height: 100vh;
  background-color: #FAFAFA;
  display: flex;
  flex-wrap: wrap;
  padding: 5rem;
  .map{
    width: 50%;
    height: 75%;
    position: relative;
    padding: 2rem;
    .teaching-spot{
      position: absolute;
      cursor: pointer;
      .marker-info{
        background-color: white;
        padding: 1rem;
        visibility: hidden;
        width: max-content;
      }
      &:hover{
        .marker-info{
          visibility: visible;
        }
      }
    }
    .ts-one{
      top: 9rem;
      left: 11rem;
    }
    .ts-two{
      top: 6rem;
      left: 21rem;
    }
    .ts-three{
      top: 16rem;
      left: 32.5rem;
      .marker-info{
        position: relative;
        left: -13rem;

      }
    }
  }
  .contact-us{
    width: 50%;
    height: 75%;

    .line{
      background-color: #FF4612;
      width: 100px;
      height: 3px;
      margin-top: 1rem;
    }
    .input-section{
      display: flex;
      flex-wrap: wrap;
      gap: 2%;
      margin-top: 2rem;
      input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #A6A6A6;
      }
      .message{
        height: 5rem;
        margin-top: 2rem;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #A6A6A6;
      }
      button{
        margin-top: 2rem;
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
          .v-line{
            background-color: black;
          }
        }
        .v-line{
            width: 1px;
            background-color: white;
            height: 25px;
            margin-left: 2rem;
            margin-right: 1rem;
          }
      }
    }
  }
  .sponsors{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;

  .sponsor{
    position: relative;
    width: 150px;
    height: 100%;
    &:hover{
      .hide{
        visibility: hidden;
      }
    }
    img{
      position: absolute;
      scale: 1.2;
      top: 20%;
    }
  }
  }
}
</style>
