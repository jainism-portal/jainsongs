<template>
  <div
    class="tw-flex tw-flex-wrap tw-justify-around tw-items-center"
    v-if="siblings"
  >
    <div
      v-for="sibling in siblings"
      :key="sibling.path"
    >
      <nuxt-link :to="sibling.slugurl">
        {{ sibling.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siblings: []
    };
  },
  async fetch() {
    this.siblings = await this.$content("music", { deep: true })
      .where({
        $and: [{ show: { $ne: false } }]
      })
      .sortBy("position", "asc") // all metaPosts have position 0
      .sortBy("slugurl", "asc") // then, sort them by slugurl
      .surround(`${this.$route.path}/meta`)
      .fetch();
  }
};
</script>

<style lang="sass" scoped>

</style>