<!-- eslint-disable max-len -->
<template>
  <footer>
    <div class="container-footer">
      <div class="info-col">
        <h2>About</h2>
        <div class="line"></div>
        <span style="color: #A6A6A6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos velit excepturi voluptatibus praesentium cumque eum ut totam, hic veniam numquam maxime</span>
        <div class="social-icons">
          <div class="social"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></div>
          <div class="social"><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>
          <div class="social"><font-awesome-icon icon="fa-brands fa-twitter" /></div>
        </div>
      </div>
      <div class="info-col">
        <h2>Twitter</h2>
        <div class="line"></div>
        <div class="tweet">
          <font-awesome-icon icon="fa-brands fa-twitter" style="color: #FF5612; font-size: 1.5rem;"/>
          <span style="color:#A6A6A6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur at veritatis, recusandae quia velit optio distinctio numquam ipsa pariatur.</span>
        </div>
        <div class="tweet">
          <font-awesome-icon icon="fa-brands fa-twitter" style="color: #FF5612; font-size: 1.5rem;"/>
          <span style="color:#A6A6A6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, consequuntur at veritatis, recusandae quia velit optio distinctio numquam ipsa pariatur.</span>
        </div>
      </div>
      <div class="info-col">
        <h2>Important links</h2>
        <div class="line"></div>
        <ul class="links">
          <li><a href="#!">About me</a></li>
          <li><a href="#!">About us</a></li>
          <li><a href="#!">Language packs</a></li>
          <li><a href="#!">Become a coach</a></li>
          <li><a href="#!">Monthly events</a></li>
        </ul>
      </div>
      <div class="info-col">
        <h2>Contact me</h2>
        <div class="line"></div>
        <ul class="contacts">
          <li><font-awesome-icon icon="fa-solid fa-location-dot" class="contact-icon"/>457 BigBlue Street, NY 10013</li>
          <li><font-awesome-icon icon="fa-solid fa-phone" class="contact-icon"/>(315) 5512-2579</li>
          <li><font-awesome-icon icon="fa-regular fa-envelope" class="contact-icon"/>everlead@mikado.com</li>
        </ul>
        <div class="subscribe">
          <label for="name">
            <input type="text" placeholder="Your Name">
            <button>SUBSCRIBE</button>
          </label>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span style="font-size: .75rem">Copyright Everland&copy;MikadoThemes</span>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
footer{
  width: 100%;
  background-color: #181515;
  display: grid;
  place-items: center;
  .bottom-bar{
    width: 100%;
    padding: .3rem;
    background-color: #FF5612;
    color: white;
    text-align: center;
  }
  .container-footer{
    width: 75%;
    display: flex;
    .info-col{
      color: white;
      width: 25%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      .line{
        height: 2px;
        width: 50px;
        background-color: #FF5612;
      }
      .social-icons{
        display: flex;
        gap: 1rem;

        .social{
          background-color: white;
          color: #181515;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
        }
      }
      .tweet{
        display: flex;
        gap: 1rem;
      }
      .links{
        list-style: none;
        li{
          a{
            color: #A6A6A6;
            text-decoration: none;
          }
        }
      }
      .contacts{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li{
          display: flex;
          line-height: 16px;
          width: max-content;
          .contact-icon{
            color: #FF5612;
            margin-right: .5rem;
          }
        }
      }
      .subscribe{
        width:max-content;
        display: flex;
        border-bottom: 2px solid #A6A6A6;
        margin-top: 2rem;
        input{
          background-color: transparent;
          border: none;
          color: #A6A6A6;
        }
        button{
          color: white;
          font-weight: bold;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
