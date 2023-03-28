<template>
  <div class="about">
    <div class="container">
      <div class="py-5 text-white">
        <h2 class="sub-heading text-white">
          Learn About Our Barbers in Victoria BC
        </h2>
        <Underline color="white" />
        <h3 class="heading text-white">About Us</h3>
        <Scissor class="mb-5" color="white" />
        <p>
          Our head barber Christine fell in love with Oak Bay, moving from
          Quebec and took over Nick's Hair Salon in 1996. Christine and her
          family have created a barbershop in Victoria BC that is warm friendly
          and relaxed. Every one who has walked through the door at Nick’s Hair
          Salon feels welcomed.
        </p>
        <p>Our services are hair cuts and straight razor shaves.</p>

        <a class="learn-more" href="/about-us">Learn More</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about {
  background-image: url('/homepage-about-section-bottom.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  background-attachment: fixed;
  position: relative;
  z-index: 100;
}
.about::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
.learn-more {
  color: #d3d3d3;
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin-top: 25px;
  text-decoration: underline;
}
</style>
