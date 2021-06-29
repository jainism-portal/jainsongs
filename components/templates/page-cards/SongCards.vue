<template>
  <div>
    <div
      v-if="posts"
      class="tw-mx-4 tw-grid md:tw-grid-cols-3 tw-gap-4"
    >
      <SongCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
      ></SongCard>
    </div>
  </div>
</template>

<script>
import SongCard from "~/components/templates/page-cards/SongCard.vue";

export default {
  components: { SongCard },
  props: { posts: Array },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>