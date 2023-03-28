<template>
  <main>
    <div class="blog-header mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3">
            <h1>Blog</h1>
            <Scissor />
          </div>
          <div class="col-md-9">
            <h2 class="h3">INTERESTED IN ANY OF OUR SERVICES?</h2>
            <b-button
              href="/book-appointment"
              squared
              class="bg-theme mt-3 text-uppercase px-4"
              >Make an appointment today</b-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="col-lg-6 col-md-6 col-sm-12"
        >
          <article class="post">
            <div class="card">
              <nuxt-link
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="text-decoration-none"
              >
                <img
                  :src="`/${article.img}`"
                  class="card-img-top"
                  :alt="article.title"
                />
                <div class="card-body">
                  <h2 class="card-title h4">{{ article.title }}</h2>
                  <p class="card-text text-dark">
                    {{ limit(article.description, 140) }}...
                  </p>
                </div>
              </nuxt-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'dsc')
      .fetch()
    return {
      articles,
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
  methods: {
    limit(string = '', limit = 0) {
      return string.substring(0, limit)
    },
  },
}
</script>

<style>
.blog-header {
  background-image: url('/barber-shop-victoria-bc.jpeg');
  background-color: #8b6c3e;
  padding: 60px 0 60px;
  color: #fff;
  text-transform: uppercase;
  background-size: cover;
  background-repeat: no-repeat;
}
.post a:hover {
  background: #eee;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  overflow: hidden;
}
.post a:hover img {
  filter: saturate(3);
  -webkit-filter: saturate(3);
}
</style>
