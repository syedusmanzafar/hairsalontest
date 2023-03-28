<template>
  <header class="siteheader">
    <div class="topbar-wrapper">
      <div id="topbar" class="container">
        <div class="navbar navbar-expand-md navbar-dark px-2">
          <ul class="navbar-nav justify-content-between w-100 text-center">
            <li class="nav-item">
              <a
                href="https://www.instagram.com/nickshairsalon/"
                title="Instagram"
                class="mx-2"
              >
                <IconsInstagram width="24" />
              </a>
              <a
                href="https://www.facebook.com/jonickalex/"
                title="facebook"
                class="mx-2"
              >
                <IconsFacebook width="24" />
              </a>
              <a class="nav-link d-inline-flex py-1" href="tel:+1250595-2621"
                ><span><IconsPhone /> </span>(250) 595-2621</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link d-inline-flex py-1"
                href="https://www.google.com/maps/place/Nick's+Hair+Salon/@48.4319948,-123.3219148,15z/data=!4m5!3m4!1s0x0:0xf8b9b10bcbc79a4e!8m2!3d48.4319948!4d-123.3219148"
                target="_blank"
                rel="noopener"
                ><span><IconsLocation /></span>2017 Cadboro Bay Rd, Victoria,
                V8R 5G4</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="main-menu py-md-0 container">
      <b-navbar toggleable="lg" type="light" variant="default">
        <b-navbar-brand class="d-lg-none" href="/"
          ><img
            src="/logo.png"
            alt="NICK'S HAIR SALON Logo"
            width="94"
            height="77"
        /></b-navbar-brand>

        <b-navbar-toggle id="btntoggle" target="nav-collapse">
          <template #default="{ expanded }">
            <span v-if="expanded"><IconsTimes width="18" /></span>
            <span v-else><IconsBars width="21" /></span>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav
            class="justify-content-between w-100 align-items-center"
          >
            <b-nav-item
              v-for="(item, index) in $store.state.menuleft"
              :key="index"
              :href="item.to"
              class="text-uppercase px-0"
              >{{ item.title }}</b-nav-item
            >
            <b-navbar-brand class="d-lg-flex d-none" href="/"
              ><img
                src="/logo.png"
                alt="NICK'S HAIR SALON Logo"
                width="94"
                height="77"
            /></b-navbar-brand>
            <b-nav-item
              v-for="item in $store.state.menuright"
              :key="item.to"
              :href="item.to"
              class="text-uppercase px-0"
              >{{ item.title }}</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style>
.siteheader {
  border-bottom: 1px solid #eee;
}
.main-menu {
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>
