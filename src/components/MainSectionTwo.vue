<!-- eslint-disable max-len -->
<template>
  <div class="container-two">
    <div class="upcoming-events">
      <div class="events-title f-2"><h3>Upcoming Events</h3></div>
      <div class="event" v-for="objEvent in arrEvents" :key="objEvent.place">
        <div class="date-square f-2">
          <span class="day">{{ objEvent.day }}</span>
          <span>Jan, 2022</span>
        </div>
        <div class="event-info">
          <h4 class="f-2">{{ objEvent.place}}</h4>
          <div>
            <font-awesome-icon icon="fa-regular fa-clock" style="color: #FF4612; margin-right: .5rem;"/>
            <span class="f-1" style="color: #A6A6A6">9:00 am - 5:00 pm, Jan 7, 2022</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #FF4612; margin-right: .5rem;"/>
            <span class="f-1" style="color: #A6A6A6">Cambridge, MA 02138, USA</span>
          </div>
          <strong class="f-1">READ MORE</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrEvents: [
        {
          day: '07',
          place: 'Melbourne Coaching',
        },
        {
          day: '11',
          place: 'New York Coaching',
        },
        {
          day: '21',
          place: 'London Coaching',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container-two{
  background-color: white;
  height: 125vh;
  width: 100%;
  background-image: url(@/assets/img/h1-img-09.jpg);
  background-size:contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  .upcoming-events{
    width: 30rem;
    height: 700px;
    background-color: #FAFAFA;
    margin-left: 15rem;
    overflow-y: scroll;

    .events-title{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;

      h3{
        font-size: 1.75rem;
        margin-left: 3rem;
      }
    }
    .event{
      width: 100%;
      height: calc((100% - 100px) / 3);
      display: flex;
      padding: 2rem;
      border: 1px solid #E1E1E1;
      &:hover{
        background-color: white;
        .event-info{
          h4{
            color: #FF4612;
          }
        }
      }
      .date-square{
        background-color: #FF4612;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 60px;
        color: white;
        .day{
          font-size: 1.4rem;
          font-weight: bold;
        }
      }
      .event-info{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        height: 100%;
        justify-content:space-between;
        margin-left: 2rem;

        h4{
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
