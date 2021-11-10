<template>
  <main>
    <ol class="">
      <li
        v-for="post in posts"
        :key="post.path"
      >
        <nuxt-link :to="post.path">{{post.path}}</nuxt-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "BrowseIndex",
  data() {
    return {
      posts: []
    };
  },
  async fetch() {
    this.posts = await this.$content("browse")
      .only(["slug", "path"])
      .fetch();
  }
};
</script>

<style lang="scss" scoped>
</style>