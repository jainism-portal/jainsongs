<template>
  <header class="tw-sticky tw-top-0 tw-left-0 tw-right-0 tw-z-30 md:tw-flex md:tw-justify-center tw-shadow-md tw-h-14 tw-bg-gradient-to-t tw-from-blue-50 tw-to-white md:tw-bg-gradient-to-br md:tw-from-white md:tw-via-white md:tw-to-blue-100">
    <nuxt-link
      to="/"
      class="md:tw-w-1/5 tw-flex tw-justify-center tw-items-center"
    >
      Jain Songs
      <!-- <nuxt-img
        src="/images/manas-madrecha-blog-logo.png"
        alt="Manas Madrecha logo"
        width="155"
        height="60"
        class="tw-mx-auto tw-w-[130px] tw-h-[50px]"
        quality="75"
      ></nuxt-img> -->
    </nuxt-link>
    <ul class="navbar-menu md:tw-w-4/5 tw-flex tw-mt-0 tw-justify-center tw-items-center">
      <!-- tw-hidden -->
      <li
        v-for="menu in menus"
        :key="menu.name"
      >
        <nuxt-link
          :to="menu.path"
          class="tw-inline-block tw-mx-2 tw-px-2 tw-py-1 tw-text-lg hover:!tw-text-pink-800 tw-rounded "
        >{{ menu.name }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "Home", path: "/" },
        { name: "All Music", path: "/music" },
        { name: "Browse", path: "/browse" }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.navbar-menu .nuxt-link-exact-active
  @apply tw-text-pink-700 tw-font-medium
</style>