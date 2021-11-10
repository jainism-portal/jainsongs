<template>
  <article class="tw-border tw-border-gray-300 tw-shadow hover:tw-shadow-md tw-p-4 tw-rounded-xl tw-bg-white">
    <h3 class="tw-font-medium">
      <nuxt-link :to="`/music/${post.slugurl}`" class="hover:tw-text-blue-800 tw-font-medium">
        {{post.title}}
      </nuxt-link>
    </h3>
    <div class="tw-mt-4">
      <div class="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-justify-start tw-gap-2">
      <div
        v-for="lang in post.language"
        :key="lang"
        class="tw-text-sm tw-border tw-px-2 tw-py-1 tw-rounded-xl"
      >{{lang}}</div>
      </div>
    <div class="tw-border-t-2 tw-mt-4 tw-pt-4">
      <div class="tw-text-base tw-text-gray-400">
        <p>Lyrics:</p>
        <!-- <ul>
          <li
          v-for="script in post.script"
        :key="script"
        class="tw-text-sm tw-border tw-px-2 tw-py-1 tw-rounded-xl"
          ></li>
        </ul> -->
      </div>
    </div>
    </div>
    <!-- <pre>{{post}}</pre> -->
  </article>
</template>

<script>
export default {
  props: { post: Object }
};
</script>

<style lang="scss" scoped>
</style>