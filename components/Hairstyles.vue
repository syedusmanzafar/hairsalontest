<template>
  <div class="hairstyles" style="background-image: url('bookbg.png')">
    <div class="container text-center">
      <div class="row no-gutters my-5 align-items-center">
        <div class="col-sm-12 col-md-6">
          <h3 class="sub-heading">Book an appointment</h3>
          <Underline class="mx-auto" />
          <h2 class="heading">Book Online Or Call</h2>
          <Scissor />

          <p class="mt-5">
            You can easily see each one of our babers schedule by visiting the
            <a href="/book-appointment/">online booking page</a>. If you forget
            to schedule your appointment, walk-ins are always available. Call us
            at <a href="tel:2505952621">(250) 595-2621</a> to get an idea on how
            long the wait might be.
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="px-4 mx-auto" style="max-width: 320px">
            <b-carousel
              id="carousel-1"
              :interval="3000"
              indicators
              img-width="275"
              img-height="505"
            >
              <!-- Slides with image only -->
              <b-carousel-slide
                v-for="(item, index) in popular"
                :key="index"
                :img-src="item.src"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>

      <!-- <div class="row align-items-center">
        <div class="col-sm-12">
          <div class="mt-5 pt-3">
            <b-tabs content-class="mt-3" align="center" pills>
              <b-tab title="Popular" class="text-uppercase" active>
                <div class="row no-gutters my-5">
                  <div
                    v-for="(item, index) in popular"
                    :key="index"
                    class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                  >
                    <b-img-lazy
                      :src="item.src"
                      fluid
                      :alt="item.alt"
                      class="px-1 py-1"
                    ></b-img-lazy>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Most Demanded">
                <div class="row no-gutters my-5">
                  <div
                    v-for="(item, index) in demanded"
                    :key="index"
                    class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                  >
                    <b-img-lazy
                      :src="item.src"
                      fluid
                      :alt="item.alt"
                      class="px-1 py-1"
                    ></b-img-lazy>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Latest">
                <div class="row no-gutters my-5">
                  <div
                    v-for="(item, index) in latest"
                    :key="index"
                    class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
                  >
                    <b-img-lazy
                      :src="item.src"
                      fluid
                      :alt="item.alt"
                      class="px-1 py-1"
                    ></b-img-lazy>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popular: [
        {
          src: 'tabs/hairstyle-one.jpg',
          alt: 'Hairstyle One',
        },
        {
          src: 'tabs/hairstyle2.jpg',
          alt: 'Hairstyle two',
        },
        {
          src: 'tabs/hairstyle1.jpg',
          alt: 'Hairstyle Three',
        },
        {
          src: 'tabs/hairstyle-four.png',
          alt: 'Hairstyle Four',
        },
      ],
    }
  },
}
</script>

<style>
.hairstyles {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 60px;
  padding-bottom: 80px;
}
.hairstyles .nav {
  flex-flow: column;
}
.hairstyles .nav a {
  text-transform: uppercase !important;
  font-size: 16px;
  color: #000;

  letter-spacing: 2px;
}
.hairstyles .nav-link.active {
  color: #000;
  border-color: transparent;
  position: relative;
  background: #fff4e4;
}
@media screen and (min-width: 767px) {
  .hairstyles .nav {
    flex-flow: row;
  }
  .hairstyles .nav a {
    margin: 0 30px;
  }
}
</style>
