<template>
  <div>
    <SongCards
      :posts="posts"
      v-if="posts"
    ></SongCards>
  </div>
</template>

<script>
import SongCards from "~/components/templates/page-cards/SongCards.vue";

export default {
  name: "SongIndex",
  components: { SongCards },
  data() {
    return {
      posts: []
    };
  },
  async fetch() {
    this.posts = await this.$content("music", { deep: true })
      .where({ slug: `meta` })
      .sortBy("dir", "asc")
      .fetch();
  }
};
</script>