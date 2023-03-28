<template>
  <div class="pricing" style="background-image: url('pricebg.png')">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h2 class="sub-heading text-center">Let's Know</h2>
          <Underline class="mx-auto" />
          <h2 class="heading text-center">Pricing</h2>
          <Scissor class="mx-auto text-center" />
          <div class="price-list px-lg-5 px-md-2">
            <div
              v-for="(item, index) in $store.state.pricing"
              :key="index"
              class="price-list-one"
            >
              <p>{{ item.name }}</p>
              <p>{{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 80px 0;
  position: relative;
  z-index: -1;
}
.price-list {
  margin-top: 40px;
}
.price-list-one {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #000;
}
.price-list-one p {
  margin-bottom: 0;
  font-family: 'Oswald', sans-serif;
  color: #000;
  font-size: 22px;
}
</style>
