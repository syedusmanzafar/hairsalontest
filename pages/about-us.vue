<template>
  <main>
    <div class="container py-5">
      <div class="row no-gutters align-items-center">
        <div class="col-lg-6 col-md-12">
          <b-img-lazy
            src="/xabout-nicks-hair-salon_0.webp"
            alt=""
            fluid
            class="w-100"
          ></b-img-lazy>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="about pattern">
            <h1>ABOUT US</h1>
            <Scissor />
            <p class="mt-5">
              Head barber Christine has 40 years of experience cutting men’s
              hair. She left her hometown in Quebec and fell in love with BC and
              Oak Bay 1995. A year later she took over as the owner of the well
              Nick's Hair Salon. Christine instantly transformed the barber shop
              to create a warm, friendly and relaxing space for men to
              decompress during their hair cut.
              <br />
              <br />
              Since 1996, she has proven herself to be one of the best barbers
              in the city by keeping up to date on the trends in men’s hair
              cuts. All the barbers are concentrated on men's hair cut and razor
              shave (not now because COVID) for men and boys of all ages.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Schedule /> -->
    <Bookingcta />
    <Founder />
  </main>
</template>

<script>
import Scissor from '~/components/Scissor.vue'
export default {
  components: { Scissor },
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Nick's Hair Salon in Oak Bay. Our experienced and talented barbers in the Oak Bay neighbourhood of Victoria BC offer more than just a hair cut.",
        },
      ],
    }
  },
}
</script>

<style scoped>
.about {
  /* background-color: #eae7e7eb; */
  padding: 40px 30px;
  /* box-shadow: 3px 3px 3px 3px #0000002b; */
  z-index: 99;
}
.about.pattern::before {
  opacity: 0.1;
}

@media (min-width: 991px) {
  .about {
    /* left: -30px; */
    position: relative;
  }
}
</style>
