<template>
  <div>
    <nuxt-link
      :to="query.dir"
      v-if="query && query.dir"
    >
      Back to {{$route.params.by}}
    </nuxt-link>
    <SongCards
      :posts="posts"
      v-if="posts"
    ></SongCards>
  </div>
</template>

<script>
import SongCards from "~/components/templates/page-cards/SongCards.vue";

export default {
  name: "OnPage",
  components: { SongCards },
  data() {
    return {
      posts: [],
      queries: [],
      query: {}
    };
  },
  async fetch() {
    let by =
      this.$route.params.by === "language" ? `lang` : this.$route.params.by;
    this.posts = await this.$content("music", { deep: true })
      .where({
        [by]:
          by === "label" || by === "record"
            ? this.$route.params.query
            : { $contains: this.$route.params.query }
      })
      .fetch();

    this.queries = await this.$content(`browse/${this.$route.params.by}`, {
      deep: true
    })
      .where({
        slug: this.$route.params.query
      })
      .fetch();
    this.query = this.queries[0];
  }
};
</script>

<style lang="scss" scoped>
</style>