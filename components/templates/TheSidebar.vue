<template>
  <div class="tw-hidden md:tw-block tw-fixed tw-z-20 tw-left-0 tw-w-12">
    <div class="tw-h-screen tw-bg-gradient-to-br tw-from-gray-100 tw-to-gray-200 tw-text-gray-600">
      <ul class="!tw-pl-2 tw-pt-4">
        <li>
          <nuxt-link
            to="/music"
            class="tw-text-center tw-group"
          >
            <svg
              class="tw-inline tw-fill-current tw-w-8 tw-transform-gpu group-hover:tw-scale-105"
              viewBox="0 0 24 24"
            >
              <path :d="mdiMusic" />
            </svg>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mdiMusic } from "@mdi/js";

export default {
  data() {
    return { mdiMusic };
  }
};
</script>

<style lang="sass" scoped>
.nuxt-link-active
 @apply tw-text-pink-800
</style>