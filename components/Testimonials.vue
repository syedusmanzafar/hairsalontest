<template>
  <div class="testimonial">
    <div class="container">
      <h2 class="sub-heading text-center">Testimonials</h2>
      <Underline class="mx-auto" />
      <h3 class="heading text-center">What Our Client Say’s</h3>
      <Scissor class="mb-5 text-center" />
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        slide
        indicators
        img-width="1024"
        img-height="500"
      >
        <b-carousel-slide v-for="(item, index) in testi" :key="index" img-blank>
          <div class="row pattern">
            <div class="col-lg-4 col-md-4 text-center">
              <b-img-lazy
                src="/user-picture.png"
                fluid
                class="user mt-4"
                alt="icon"
                width="200"
                height="200"
              ></b-img-lazy>
            </div>
            <div class="col-lg-8 col-md-8">
              <div class="cl-cotnent-text">
                <p>
                  {{ item.text }}
                </p>
                <h3 class="name mt-5">{{ item.name }}</h3>
                <h4 class="from">{{ item.from }}</h4>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testi: [
        {
          text: "I've been going to Nick's Hair Salon for well over a decade now. Christine has always taken pride in running a clean and competitive barbershop, and she has always been concerned with achieving 100% customer satisfaction. Christine and her staff are taking cleanliness very seriously during these difficult times, and I felt comfortable returning there for a haircut after many months away during quarantine. Keep up the great work, folks!",
          name: 'Jeff Mandick',
          from: 'From Victoria, BC',
        },
        {
          text: 'I’ve been getting my hair cut at Nicks for over a decade, but today was especially pleasant. Christine’s professionalism and optimistically good attitude was refreshing in this COVID world we are living in. I’ll definitely be back for my next cut!',
          name: 'Jeff Mandick',
          from: 'From Victoria, BC',
        },
        {
          text: "During these trying times it is nice to have a local business take the time and care as small as hair cutting! I was unable to have a hair cut in months and found Nick's Salon in my area where I work! I recommend to all men looking for a great hair cut and a smile!",
          name: 'Jeff Baker',
          from: 'From Victoria, BC',
        },
      ],
    }
  },
}
</script>

<style>
.testimonial {
  padding-top: 100px;
}
.testimonial .carousel-caption {
  position: static;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  text-align: inherit;
}
.testimonial .carousel-caption p {
  margin-bottom: 0;
  color: #333;
  line-height: 2;
  font-weight: 500;
  text-shadow: none;
  text-align: left;
  font-style: italic;
}
.testimonial .carousel-caption .name {
  font-family: 'Oswald', sans-serif;
  color: #000;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: left !important;
  text-shadow: none;
}
.testimonial .carousel-caption .from {
  font-family: 'Oswald', sans-serif;
  color: #000;
  font-weight: 400;
  font-size: 18px;
  text-align: left !important;
  text-shadow: none;
}
.cl-cotnent-text {
  flex-flow: column;
  display: flex;
  background: #fcf8f0db;
  padding: 25px;
  top: 30px;
  background-image: url('/99.png');
  background-position: top 60px right 35px;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 520px;
}
.testimonial .img-fluid.w-100.d-block {
  display: none !important;
}
.testimonial .carousel-indicators {
  bottom: 0px;
  right: 0;
  left: auto;
}
.testimonial .carousel-indicators li {
  background-color: rgb(177, 173, 173);
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.testimonial .user {
  width: 100px;
  height: 100px;
}
@media screen and (min-width: 767px) {
  .testimonial .user {
    width: 200px;
    height: 200px;
  }
  .testimonial .cl-cotnent-text {
    padding-left: 35px;
    padding-right: 70px;
    min-height: 450px;
  }
}
@media screen and (min-width: 767px) and (max-width: 991px) {
  .testimonial .cl-cotnent-text {
    min-height: 600px;
  }
}
</style>
