<template>
  <main>
    <div class="pricing-wrapper">
      <div class="container" style="max-width: 930px">
        <h1 class="text-center text-white pricing-title">What We Do</h1>
        <Scissor class="text-center" />
        <div class="row pt-5">
          <div
            v-for="(item, index) in $store.state.pricing"
            :key="index"
            class="col-sm-12 pricing-single-item"
          >
            <div class="inner justify-content-center d-flex my-3">
              <div class="icon">
                <b-img-lazy :src="item.icon" alt="icon" width="50"></b-img-lazy>
              </div>
              <div class="name">
                <h3>{{ item.name }}</h3>
                <a href="/book-appointment">Make an Appointment</a>
              </div>
              <div class="price">
                Start from <br />
                {{ item.price }}
              </div>
            </div>
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
export default {
  head() {
    return {
      title: 'Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Regular Men's cut, Buzz cut, Beard Trim, Ladie's cut, Senior's citizen cut",
        },
      ],
    }
  },
}
</script>

<style>
.pricing-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 33px;
  letter-spacing: 4px;
}
.pricing-single-item .inner {
  background: rgba(0, 0, 0, 0.65);
  max-width: 600px;
  margin: auto;
  border-bottom-right-radius: 35px;
}
.pricing-wrapper {
  background-image: url('/barber-shop-victoria-bc.jpeg');
  padding: 100px 0;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
}
.inner .icon {
  border: 1px solid #8b6c3e;
  padding: 20px 11px;
  border-right: 0;
  width: 55px;
}
.inner .icon img {
  width: 30px;
}
.inner .name {
  border: 1px solid #8b6c3e;
  border-left: 0;
  padding: 18px 18px 30px;
  width: calc(100% - 180px);
}
.inner .name h3 {
  font-weight: 400;
  font-size: 26px;
  min-height: 60px;
}
.inner .name a {
  color: #fff;
  background-color: #8b6c3e;
  padding: 5px 15px;
}
.inner .name a:hover {
  background-color: #7c633b;
  text-decoration: none;
}
.inner .price {
  padding: 20px;
  border: 1px solid #8b6c3e;
  border-left: 0;
  width: 125px;
  border-bottom-right-radius: 35px;
}
</style>
