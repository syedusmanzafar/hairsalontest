<template>
  <div class="book-appointment pattern">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-8">
          <h2 class="d-inline-flex mb-3">Interested in any of our services?</h2>
        </div>
        <div class="col-md-4 text-center">
          <b-button
            variant="dark"
            size="lg"
            class="rounded-0"
            href="/book-appointment"
            >Book Now</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.book-appointment {
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 99;
  padding: 105px 0;
  position: relative;
  overflow: hidden;
  color: #000;
  background-color: #a28965;
}
.book-appointment .btn {
  font-size: 16px;
  padding: 15px 40px;
  background: #000;
}
.book-appointment h2 {
  font-size: 34px;
  font-weight: 600;
  padding-left: 0;
  padding-top: 60px;
}
.book-appointment h2:before {
  content: '';
  background: url('/scissor.svg') no-repeat center center;
  width: 90%;
  height: 44px;
  position: absolute;
  left: auto;
  top: -10px;
  background-size: contain;
}
@media screen and (min-width: 767px) {
  .book-appointment h2 {
    padding-left: 170px;
    padding-top: 0;
  }
  .book-appointment h2:before {
    width: 137px;
    height: 100%;
    left: 0;
  }
}
</style>
