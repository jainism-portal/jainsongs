<template>
  <div>
    <PageHeader>
      <template #title>100 Jain Songs Lyrics - Jain Bhajan, Stavan</template>
      <template #description>Read Jain songs lyrics for FREE!</template>
    </PageHeader>
    <section class="tw-container tw-mx-auto tw-max-w-screen-xl tw-px-4">
      <div>
        <SongCards
          :posts="posts"
          v-if="posts"
        ></SongCards>
      </div>
    </section>
  </div>
</template>

<script>
import PageSectionContainer from "~/components/templates/PageSectionContainer.vue";
import PageHeader from "~/components/templates/PageHeader.vue";

import SongCards from "~/components/templates/page-cards/SongCards.vue";

export default {
  name: "SongIndex",
  components: { PageHeader, PageSectionContainer, SongCards },
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