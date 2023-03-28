<template>
  <main>
    <div class="appointment">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <h1>Book Appointment</h1>
            <Scissor />
          </div>
          <div class="col-md-8">
            <h2 class="h4">Make your schedule with our talented barbers.</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div
          v-for="(item, index) in $store.state.barbers"
          :key="index"
          class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 book-link mb-5"
        >
          <b-button
            :href="item.url"
            target="_blank"
            rel="noopener"
            variant="outline-dark"
            block
            squared
            class="barber-btn"
          >
            Book with {{ item.name }}
          </b-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Book An Appointment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Book Appointment. Make your schedule with our talented barbers.',
        },
      ],
    }
  },
}
</script>

<style>
.appointment {
  background-image: url('/barber-shop-victoria-bc.jpeg');
  background-color: #8b6c3e;
  padding: 60px 0 60px;
  color: #fff;
  text-transform: uppercase;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
