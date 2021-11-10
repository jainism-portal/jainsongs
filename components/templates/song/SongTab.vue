<template>
  <div class="tw-p-2 md:tw-p-4 tw-bg-white">
    <!-- <h3 class="tw-text-2xl tw-text-center">{{songPost.title ? songPost.title : shouldSongpostBeTransliterated ? songPostTransliterated(transliterationDetails.SourcePost).title : metaPost.title}} ({{songPost.script}})</h3> -->

    <!-- This is for testing purpose as to where sanscript works properly or not. -->
    <!-- <div class="nuxt-content">{{songPostTransliterated(songPost).text}}</div> -->

    <nuxt-content
      :document="shouldSongpostBeTransliterated ? songPostTransliterated(songPostOrTransliterationSourcePost) : songPostOrTransliterationSourcePost"
      class="tw-py-4"
    ></nuxt-content>
  </div>
</template>

<script>
import { flatten } from "flat";
const unflatten = require("flat").unflatten;

export default {
  props: {
    metaPost: Object,
    songPost: { required: true },
    transliterationDetails: Object,
    scriptPage: String
  },
  computed: {
    shouldSongpostBeTransliterated() {
      return this.songPost ? this.songPost.autotrans : true;
    },
    songPostOrTransliterationSourcePost() {
      return this.songPost ? this.songPost : this.transliterationDetails.SourcePost
    }
  },
  methods: {
    songPostTransliterated(post) {
      if (this.shouldSongpostBeTransliterated && this.scriptPage && this.transliterationDetails) {
        const sans = require("@sanskrit-coders/sanscript");

        let a = flatten(this.transliterationDetails.SourcePost);

        let b = Object.entries(a).map((child) => {
          if (child[0].endsWith("value")) {
            child[1] = this.removeNuqta(child[1]);
            child[1] = sans.t(
              child[1],
              this.transliterationDetails.SourceScript === "Deva"
                ? "devanagari"
                : "gujarati",
              this.scriptPage
            );
          }
          return [child[0], child[1]];
        });

        let c = Object.fromEntries(b);

        let transliteredSongpost = unflatten(c);

        // if (transliteredSongpost.title) {
        //   transliteredSongpost.title = this.removeNuqta(
        //     transliteredSongpost.title
        //   );
        //   transliteredSongpost.title = sans.t(
        //     transliteredSongpost.title,
        //     this.songPostDevaGujr.slug === "Deva" ? "devanagari" : "gujarati",
        //     this.scriptPage
        //   );
        // }
        return transliteredSongpost;
      } else return post;
    },
    removeNuqta(text) {
      return text
        .replace(/़/g, "")
        .replace(/क़/g, "क")
        .replace(/ख़/g, "ख")
        .replace(/ग़/g, "ग")
        .replace(/ज़/g, "ज")
        .replace(/झ़/g, "झ")
        .replace(/थ़/g, "थ")
        .replace(/द़/g, "द")
        .replace(/ऩ/g, "न")
        .replace(/ड़/g, "ड")
        .replace(/ढ़/g, "ढ")
        .replace(/फ़/g, "फ")
        .replace(/ब़/g, "ब")
        .replace(/य़/g, "य")
        .replace(/ऱ/g, "र")
        .replace(/ऴ/g, "ळ");
    },
  },
};
</script>

<style lang="sass" src="~/assets/style/nuxtcontent.sass" scoped>
</style>