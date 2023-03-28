<template>
  <main>
    <div
      class="contact-page-form-wrapper"
      style="background-image: url('/contact-us.jpg')"
    >
      <div class="container">
        <div class="contact-page-form">
          <p class="h2 text-success text-center">
            Your form have been submitted
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row contact-info">
        <div class="col-md-4">
          <div class="cont-info-single">
            <div class="info-header"><h4>Say Hello</h4></div>
            <div class="mHc">
              <a href="tel:+1(250) 595-2621" class="footer-link d-inline-flex">
                <IconsPhone width="14" class="mr-2" /> (250) 595-2621</a
              >
              <br />
              <a
                href="mailto:info@nickshairsalon.ca"
                class="footer-link d-inline-flex"
                ><IconsEnvelop width="14" class="mr-2" />
                info@nickshairsalon.ca</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cont-info-single">
            <div class="info-header"><h4>Our Address</h4></div>
            <div class="mHc contact-address">
              <a
                href="https://www.google.com/maps/place/Nick's+Hair+Salon/@48.4319948,-123.3219148,15z/data=!4m5!3m4!1s0x0:0xf8b9b10bcbc79a4e!8m2!3d48.4319948!4d-123.3219148"
                target="_blank"
                class="footer-link d-inline-flex"
              >
                <IconsLocation width="14" class="mr-2" />

                2017 Cadboro Bay Rd<br />
                Victoria, BC V8R 5G4
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cont-info-single">
            <div class="info-header"><h4>Opening Hours</h4></div>
            <div class="mHc contact-address-timing d-flex">
              <IconsTime width="14" class="mr-2" />
              <table
                border="0"
                cellpadding="1"
                cellspacing="1"
                class="contact-timing"
                style="width: 273px"
              >
                <tbody>
                  <tr>
                    <td style="width: 123px">Monday - Friday</td>
                    <td style="width: 135px">9:00AM - 5:30PM</td>
                  </tr>
                  <tr>
                    <td style="width: 123px">Saturday</td>
                    <td style="width: 135px">9:00AM - 4:00PM</td>
                  </tr>
                  <tr>
                    <td style="width: 123px">Sunday</td>
                    <td style="width: 135px">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-page-map-wrapper" style="margin-bottom: -100px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10589.113919437448!2d-123.3219148!3d48.4319948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8b9b10bcbc79a4e!2sNick's%20Hair%20Salon!5e0!3m2!1sen!2sin!4v1601975534237!5m2!1sen!2sin"
        width="100%"
        height="600"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Thank you',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style>
.contact-page-form-wrapper {
  background-color: #000;
  color: white;
  background-size: cover;
  padding: 60px 0 5px;
}
.contact-page-form {
  padding: 50px 40px;
  max-width: 80%;
  margin: 70px auto;
}
.contact-page-form form input,
.contact-page-form form textarea {
  border: 2px solid #6f798d;
  color: #a5a5a5;
  font-weight: 500;
  font-size: 14px;
  padding: 20px 20px;
}
.contact-page-form form input:focus,
.contact-page-form form textarea:focus {
  border-color: #000;
  box-shadow: none;
  outline: none;
}
.contact-info {
  margin-top: 80px;
  margin-bottom: 80px;
}
.cont-info-single {
  margin: 20px 0;
}
.cont-info-single .info-header {
  color: #8b6c3e;
  text-transform: uppercase;
  margin-bottom: 21px;
}
.cont-info-single .info-header h4 {
  font-size: 22px;
}
.cont-info-single a {
  display: block;
  color: #000;
}
</style>
