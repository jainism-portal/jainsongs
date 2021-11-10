<template>
  <header class="md:tw-py-12 tw-px-4 tw-py-6 tw-mb-6 tw-text-center">
    <h1 class="md:tw-text-6xl tw-bg-clip-text tw-bg-gradient-to-br tw-from-pink-500 tw-to-pink-800 tw-py-2 tw-text-4xl tw-font-semibold tw-leading-10 tw-text-transparent">
      <slot name="title">
        Default title
      </slot>
    </h1>
    <p class="md:tw-text-2xl tw-mt-4 tw-text-xl">
      <slot name="description">
        Default description
      </slot>
    </p>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
</style>
