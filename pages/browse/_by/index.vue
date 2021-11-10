<template>
  <div>
    <nuxt-link to="/browse">
      Back to Browse
    </nuxt-link>
    <ol>
      <li
        v-for="item in bys"
        :key="item.path"
      >
        <nuxt-link :to="`${item.path}/`">{{item.path}}</nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ByIndex",
  data() {
    return {
      songs: [],
      bys: []
    };
  },
  async fetch() {
    this.bys = await this.$content(`browse/${this.$route.params.by}`).fetch();

    // let query = this.by.dir.slice(8);
  }
};
</script>

<style lang="scss" scoped>
</style>