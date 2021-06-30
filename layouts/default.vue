<template>
  <v-app>
    <TheHeader></TheHeader>
    <Nuxt class="custom-min-height tw-bg-gray-50 tw-py-4 tw-text-gray-700 tw-text-lg md:tw-text-xl" />
    <TheFooter></TheFooter>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      link: []
    };
  }
};
</script>

<style lang="sass">
::selection
  @apply tw-bg-yellow-200 tw-text-black
body
  .a11y-hide
    clip-path: inset(100%)
    clip: rect(1px, 1px, 1px, 1px)
    height: 1px
    width: 1px
    @apply tw-overflow-hidden tw-absolute tw-whitespace-nowrap
  .custom-min-height
    min-height: calc(100vh - 3.5rem)
</style>