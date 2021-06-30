<template>
  <div>
    <h3 class="tw-text-2xl tw-text-center">{{shouldSongpostBeTransliterated ? songPostTransliterated(songPost).title : songPost.title}}</h3>
    <nuxt-content :document="shouldSongpostBeTransliterated ? songPostTransliterated(songPost) : songPost"></nuxt-content>
  </div>
</template>

<script>
import { flatten } from "flat";
const unflatten = require("flat").unflatten;

export default {
  props: { metaPost: Object, songPost: Object, songPostDevaGujr: Object },
  computed: {
    shouldSongpostBeTransliterated() {
      if (this.songPost) {
        return (
          this.songPost.autotrans ||
          (this.songPost.body &&
            this.songPost.body.children &&
            this.songPost.body.children.length === 0)
        );
      }
    }
  },
  methods: {
    songPostTransliterated(post) {
      // Transliterate
      if (this.songPostDevaGujr && post.sanscript) {
        const sans = require("@sanskrit-coders/sanscript");

        let a = flatten(this.songPostDevaGujr);

        let b = Object.entries(a).map(child => {
          if (child[0].endsWith("value")) {
            child[1] = sans.t(
              child[1],
              this.songPostDevaGujr.slug === "Deva" ? "devanagari" : "gujarati",
              post.sanscript
            );
          }
          return [child[0], child[1]];
        });

        let c = Object.fromEntries(b);

        let transliteredPost = unflatten(c);

        transliteredPost.title = sans.t(
          transliteredPost.title,
          this.songPostDevaGujr.slug === "Deva" ? "devanagari" : "gujarati",
          post.sanscript
        );
        return transliteredPost;
      } else return post;
    }
  }
};
</script>

<style lang="sass" src="~/assets/style/nuxtcontent.sass" scoped>
</style>