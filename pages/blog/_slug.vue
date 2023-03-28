<template>
  <article>
    <div class="appointment pattern mb-5">
      <div class="container py-5">
        <h1 class="h1">{{ article.title }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="mb-5">
            <b-img-lazy
              :src="`/${article.img}`"
              :alt="article.title"
              fluid
            ></b-img-lazy>
          </div>
          <div class="pb-5"></div>
          <nuxt-content :document="article" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<style>
article {
  line-height: 2;
}
</style>
