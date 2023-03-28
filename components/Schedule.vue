<template>
  <div class="container my-5 py-5">
    <div class="row align-items-center">
      <div class="col-lg-5 col-md-6">
        <div
          class="time-left text-center"
          style="background-image: url('/tbg.png')"
        >
          <h2 class="mb-5">Timing</h2>
          <h4>Monday - Friday</h4>
          <p>9:00AM - 5:30PM</p>
          <h4>Saturday</h4>
          <p>9:00AM - 4:00PM</p>
          <h4>Sunday</h4>
          <p>Closed</p>
          <h4>Location</h4>
          <p class="mb-0">2017 Cadboro Bay Rd, Victoria<br />BC, V8R 5G4</p>
        </div>
      </div>
      <div class="col-lg-7 col-md-6">
        <div class="time-right px-xl-5 px-lg-4 px-md-2 py-5">
          <h2 class="sub-heading">Schedule</h2>
          <Underline />
          <h3 class="heading">Make Your Schedule With us</h3>
          <Scissor class="mb-3" />
          <p>
            Forgot to schedule your appointment? Don't worry as walk-ins are
            always available. Visit us and get a haircut from the best barbers
            in Victoria BC! If you would like to know about the wait time feel
            free to call us at <a href="tel:(250) 595-2621">(250) 595-2621</a>.
          </p>
          <p>
            You can also
            <a href="/book-appointment">book an appointment</a> with any of our
            talented barbers.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.time-left {
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
}
.time-left h2 {
  font-weight: 700;
  letter-spacing: 6px;
  color: #fff;
  font-size: 38px;
}
.time-left h4 {
  font-weight: 400;
  letter-spacing: 4px;
}
.time-left p {
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 4px;
  margin-bottom: 40px;
}

.time-right p {
  margin-bottom: 0;
  color: #696969;
  margin-top: 30px;
  line-height: 1.8;
  font-size: 16px;
}
</style>
