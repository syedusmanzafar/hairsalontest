<template>
  <main>
    <div class="slidewrapper pattern">
      <div class="container"><HomeSlides /></div>
    </div>
    <Interior />
    <Pricing />
    <div class="covid-protocols pattern">
      <div class="container">
        <div class="covid-protocols-header mb-5">
          <h2>Covid-19&nbsp; Protocols</h2>
          <Underline />
        </div>
        <div class="row">
          <div
            v-for="(item, index) in covidproto"
            :key="index"
            class="col-sm-12 col-md-12 col-lg-4 mb-4"
          >
            <div
              class="
                protocols-single-inner-wrapper
                pt-4
                pb-5
                px-3
                d-flex
                align-items-center
              "
            >
              <img :src="item.src" :alt="item.alt" width="128" />
              <p class="ml-4 mb-0">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Schedule />
    <Hairstyles />
    <Bookingcta />
    <About />
    <Testimonials />
  </main>
</template>

<script>
export default {
  data() {
    return {
      covidproto: [
        {
          src: 'sanitization.png',
          alt: 'Sanitizing stations after each customer',
          text: 'Sanitizing stations after each customer',
        },
        {
          src: 'social-distancing.png',
          alt: 'Giving 6 feet between workstation',
          text: 'Giving 6 feet between workstation',
        },
        {
          src: 'no-waiting-room.png',
          alt: 'We are removing waiting room to minimize the exposure',
          text: 'We are removing waiting room to minimize the exposure',
        },
        {
          src: 'hand-wash.png',
          alt: 'We will wash our hands',
          text: 'We will wash our hands',
        },
        {
          src: 'wear-mask.png',
          alt: 'We will have mask at all times',
          text: 'We will have mask at all times',
        },
        {
          src: 'client-safety.png',
          alt: 'This is to ensure the safety of the clients and our staff as we take it seriously',
          text: 'This is to ensure the safety of the clients and our staff as we take it seriously',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Oak Bay & Victoria BC Barber Shop',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'At Nicks Hair Salon, our experienced and talented barbers in the Oak Bay neighbourhood of Victoria BC offer more than just a hair cut. As you step into our shop, you will be welcomed with warm smiles by our dedicated professional Barbers.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.covid-protocols {
  margin-bottom: 50px;
  padding: 50px 0;
}

.covid-protocols-header h2 {
  font-weight: 400;
  color: #000;
  font-size: 33px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.protocols-single-inner-wrapper {
  box-shadow: 0 0 25px rgba(139, 108, 62, 0.25);
  background: #fff;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 35px;
  height: 100%;
}

.protocols-single-inner-wrapper img {
  width: 65px;
  height: auto;
}
</style>
