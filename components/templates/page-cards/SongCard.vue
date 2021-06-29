<template>
  <article class="tw-border tw-border-gray-300 tw-p-4 tw-rounded-xl tw-bg-white">
    <h3>
      <nuxt-link :to="post.slugurl ? `/music/${post.slugurl}` : post.dir">
        {{post.title}}
      </nuxt-link>
    </h3>
    <div v-if="post.lang">
      Lang: <span
        v-for="lang in post.lang"
        :key="lang"
      >{{lang}}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: { post: Object },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>