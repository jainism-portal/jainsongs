<template>
  <section
    class="md:py-12 py-6"
    :class="SectionClass"
  >
    <div
      class="md:px-8 container max-w-screen-xl px-4 mx-auto"
      :class="DivContainerClass"
      
    >
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    SectionClass: String,
    DivContainerClass: String,
  },
};
</script>
