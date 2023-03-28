<template>
  <div class="homeslides">
    <b-carousel
      id="carouselFade"
      ref="carouselFade"
      style="text-shadow: 0px 0px 2px #000"
      slide
      img-width="1024"
      img-height="500"
    >
      <b-carousel-slide
        v-for="(item, index) in $store.state.slides"
        :key="index"
        img-blank
      >
        <div class="row no-gutters slides align-items-center">
          <div class="col-lg-7 col-md-7">
            <div class="hero-one-left">
              <b-img-lazy :src="item.image" fluid alt=""></b-img-lazy>
            </div>
          </div>
          <div class="col-lg-5 col-md-5">
            <div class="hero-one-right">
              <h2>
                {{ item.title1 }} <br />
                {{ item.title2 }}
              </h2>
              <h3>
                {{ item.text }}
              </h3>
              <a :href="item.to">{{ item.totext }}</a>
            </div>
          </div>
        </div>
      </b-carousel-slide>
      <div class="nextprev my-3">
        <b-button
          class="mr-5"
          variant="default"
          aria-label="Previous Slide"
          @click="prev"
          ><IconsArrowleft width="18"
        /></b-button>
        <b-button variant="default" aria-label="Next Slide" @click="next"
          ><IconsArrowright width="18"
        /></b-button>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  methods: {
    prev() {
      this.$refs.carouselFade.prev()
    },
    next() {
      this.$refs.carouselFade.next()
    },
  },
}
</script>

<style>
.homeslides .carousel-caption {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  text-align: inherit;
}
.homeslides .img-fluid.w-100.d-block {
  display: none !important;
}
.slides h2 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #090909;
  margin-bottom: 30px;
  text-shadow: none;
  font-family: 'Oswald', sans-serif;
}
.slides h3 {
  font-size: 21px;
  color: #090909;
  font-weight: normal;
  letter-spacing: 1px;
  text-shadow: none;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
}
.slides a {
  display: inline-block;
  color: var(--primary);
  letter-spacing: 2px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  margin-top: 25px;
  text-shadow: none;
}
.hero-one-left img {
  width: 100%;
}
.hero-one-right {
  padding: 30px 20px 70px;
}
.nextprev {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 6000;
  width: 100%;
  text-align: center;
}
.nextprev .btn {
  outline: none;
  box-shadow: none;
}
@media screen and (min-width: 767px) {
  .homeslides {
    padding: 0;
  }
  .slides h2 {
    font-size: 3.8vw;
  }
  .slides h3 {
    font-size: 2vw;
  }
  .hero-one-left {
    position: relative;
    z-index: 300;
  }
  .hero-one-right {
    padding: 175px 15px 300px 80px;
  }
  .hero-one-left img {
    max-width: 882px;
    border-radius: 30px;
  }
  .slides .lines:after {
    bottom: 0;
    left: 0;
  }
}
@media screen and (min-width: 1400px) {
  .slides h2 {
    font-size: 45px;
  }
  .slides h3 {
    font-size: 28px;
  }
  .hero-one-right {
    /* background: #fff; */
    padding: 175px 15px 250px 80px;
  }
}
@media screen and (max-width: 1399px) and (min-width: 767px) {
  .slides h2 {
    font-size: 3.2vw;
  }
  .slides h4 {
    font-size: 2vw;
  }
  .hero-one-right {
    padding: 175px 15px 200px 80px;
  }
}
</style>
