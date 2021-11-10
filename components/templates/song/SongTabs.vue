<template>
  <div>
    <!-- <v-tabs
      show-arrows
      grow
      :slider-size="1"
      class="tw-my-6 "
      v-if="metaPost && songPosts"
    >
      <v-tab
        v-for="songPost in songPosts"
        :key="songPost.path"
        active-class="tw-bg-gradient-to-br tw-from-white tw-to-yellow-50 !tw-text-yellow-900"
      >
        <span class="tw-capitalize md:tw-text-xl">{{songPost.script}}</span>
      </v-tab>
      <v-tabs-slider class="tw-bg-gradient-to-br tw-from-white tw-to-yellow-400"></v-tabs-slider>
      <v-tab-item
        class="tw-text-gray-600 tw-bg-gray-50 tw-py-4 tw-px-2 md:tw-px-4"
        eager
        v-for="songPost in songPosts"
        :key="songPost.slug"
        :lang="`${metaPost.lang ? metaPost.lang[0] : `hi`}-${songPost.slug}`"
      >
        <SongTab
          :songPost="songPost"
          :metaPost="metaPost"
          :songPostDevaGujr="songPostDevaGujr()"
        ></SongTab>
      </v-tab-item>

    </v-tabs> -->
    <div v-if="metaPost && songPosts">
      <div
        v-for="(songPost) in songPosts"
        :key="songPost.slug"
        class=""
      >
        <details :open="songPost.slug === 'Latn'">
          <summary>
            <h3 class="tw-inline">{{songPost.script}} &mdash; {{songPost.title ? songPost.title : metaPost.title}}</h3>
          </summary>
          <div class="tw-p-2 md:tw-p-4 tw-bg-white">
            <SongTab
              :songPost="songPost"
              :metaPost="metaPost"
              :songPostDevaGujr="songPostDevaGujr()"
            ></SongTab>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
import SongTab from "~/components/templates/song/SongTab.vue";

export default {
  props: { metaPost: Object, songPosts: Array },
  components: { SongTab },
  data() {
    return {};
  },
  methods: {
    songPostDevaGujr() {
      // Deva or Gujr post will be the base for transliteration
      let posts = [];
      if (this.songPosts) {
        posts = this.songPosts.filter(post => post.slug === "Deva");
        if (posts) {
          return posts[0];
        } else {
          posts = this.songPosts.filter(post => post.slug === "Gujr");
          return posts[0];
        }
      }
    }
    // titleTransliterated(text) {

    //   const sans = require("@sanskrit-coders/sanscript");

    //   return text;
    // }
  }
};
</script>

<style lang="sass" scoped>
details
  @apply tw-border tw-rounded-xl tw-my-4 md:tw-my-6
  summary
    @apply tw-py-3 tw-px-4 tw-bg-gradient-to-br tw-from-white tw-to-yellow-50 hover:tw-bg-gradient-to-tl tw-cursor-pointer marker:tw-text-yellow-700 tw-shadow tw-rounded-xl hover:tw-text-yellow-700

details[open]
  @apply tw-rounded-xl
  summary
    @apply tw-rounded-b-none
</style>