<template>
  <div style="font-family: Quicksand">
    <TheHeader></TheHeader>
    <TheSidebar></TheSidebar>
    <main>
      <Nuxt class="md:tw-ml-12 md:tw-pl-8 custom-min-height tw-bg-gray-50 tw-pb-4 tw-text-gray-700 tw-text-lg md:tw-text-xl" />
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheSidebar from "~/components/templates/TheSidebar.vue";

export default {
  components: { TheSidebar },
  data() {
    return {};
  },
  head() {
    return {
      link: [
        // https://csswizardry.com/2020/05/the-fastest-google-fonts/
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Vesper+Libre:wght@400;500;700&family=Quicksand:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Vesper+Libre:wght@400;500;700&family=Quicksand:wght@300;400;500;600;700&display=swap",
          media: "print",
          onload: "this.media='all'",
        },
        // ...i18nHead.link // Commented because it doesn't add slash
      ],
    };
  },
};
</script>

<style lang="sass">
::selection
  @apply tw-bg-yellow-200 tw-text-gray-800

body
  .a11y-hide
    clip-path: inset(100%)
    clip: rect(1px, 1px, 1px, 1px)
    height: 1px
    width: 1px
    @apply tw-overflow-hidden tw-absolute tw-whitespace-nowrap
  .custom-min-height
    min-height: calc(100vh - 3.5rem)

.custom-style
  p
    @apply md:tw-my-4 tw-my-8 tw-leading-8
</style>