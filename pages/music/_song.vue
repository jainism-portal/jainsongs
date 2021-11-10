<template>
  <div>
    <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between">

      <div class="md:tw-w-5/5">

        <article v-if="metaPost">
          <!-- <article v-if="posts && posts.length"> -->
          <h1 class="tw-text-5xl tw-py-4 tw-text-center tw-my-6 tw-bg-gradient-to-br tw-from-pink-500 to tw-to-pink-800 tw-bg-clip-text tw-text-transparent">{{metaPost.title}}</h1>

          <div class="tw-container tw-max-w-screen-xl tw-mx-auto tw-px-4">

            <section class="tw-my-4">
              <div class="md:tw-float-right md:tw-ml-4 md:tw-w-1/4">
                <SongInfobox
                  v-if="metaPost"
                  :metaPost="metaPost"
                >
                </SongInfobox>
              </div>
            </section>

            <section class="tw-my-4 md:tw-my-8 tw-pb-8">
              <h2 class="tw-text-2xl tw-font-medium tw-my-2">Lyrics in Indic scripts</h2>

              <ul
                v-if="allScriptsFullnames && allScriptsFullnames.length"
                class="tw-flex tw-flex-row tw-gap-2"
              >
                <li
                  v-for="script in allScriptsFullnames.filter(script => script !== 'latin')"
                  :key="script"
                  class="tw-text-lg"
                >
                  <nuxt-link
                    :to="`/music/${metaPost.slugurl}/${script}`"
                    class="tw-inline-block tw-text-blue-800 tw-pb-0.5 tw-transform-gpu tw-duration-300 hover:(tw-text-pink-800 tw-drop-shadow-md) tw-filter active:tw-scale-95"
                  >{{script}}</nuxt-link>
                </li>
              </ul>
              <div
                v-if="$route.params.script"
                class="tw-mt-2 tw-text-lg"
              >
                <nuxt-link :to="`/music/${metaPost.slugurl}`">🔙 Back to Song</nuxt-link>
              </div>
            </section>

            <section class="tw-my-4 md:tw-my-8">
              <h2 class="tw-text-3xl tw-my-4">Jain song Lyrics - {{metaPost.title}}</h2>

              <div v-if="$route.fullPath === `/music/${$route.params.song}`">

                <SongTab
                  :songPost="songPostOnSongPage"
                  :metaPost="metaPost"
                  v-if="songPostOnSongPage && metaPost"
                ></SongTab>
              </div>
              <div v-else>
                <nuxt-child
                  :metaPost="metaPost"
                  :songPosts="songPosts"
                  :transliterationDetails="transliterationDetails"
                  v-if="metaPost && songPosts"
                ></nuxt-child>
              </div>
              <!-- <SongTabs
                :metaPost="metaPost"
                :songPosts="songPosts"
                v-if="metaPost && songPosts"
                class=""
              >
              </SongTabs> -->
            </section>
            <section>

            </section>

          </div>
        </article>
      </div>
      <!-- <div class="md:tw-w-1/5 tw-border-l tw-pl-4 tw-bg-gray-200/70">

        <div class="tw-my-4 md:tw-my-8">
          <h2 class="tw-text-3xl tw-font-medium tw-my-2">Related songs</h2>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import SongTab from "~/components/templates/song/SongTab.vue";

import SongInfobox from "~/components/templates/song/SongInfobox.vue";

import { allScripts, getScriptFullnames } from "~/app/language.js";

export default {
  name: "SongPage",
  components: {
    SongTab,
    SongInfobox,
  },
  data() {
    return {
      posts: [],
      metaPost: {},
      songPosts: [],
      songName: {},
      songPostOnSongPage: null,
      scriptOfsongPostOnSongPage: "",
      handwrittenScripts: [],
      hasLatnPost: false,
      hasDevaPost: false,
      hasGujrPost: false,
      LatnPost: null,
      DevaPost: null,
      GujrPost: null,
      transliterationDetails: {
        hasSourcePost: false,
        SourcePost: null,
        SourceScript: "Deva",
      },
      allScriptsFullnames: [],
    };
  },
  async fetch() {
    this.posts = await this.$content("music", {
      deep: true,
    })
      .where({
        $and: [
          { slugurl: this.$route.params.song }, // default slugurl is dir without "/music/"
          { show: { $ne: false } },
        ],
      })
      .sortBy("position", "asc")
      .fetch();

    [this.metaPost, ...this.songPosts] = this.posts;

    let postLatn = this.songPosts.filter((song) => song.slug === "Latn");
    this.LatnPost = postLatn && postLatn.length ? postLatn[0] : {};
    this.hasLatnPost =
      this.LatnPost && Object.keys(this.LatnPost).length ? true : false;

    let postDeva = this.songPosts.filter((song) => song.slug === "Deva");
    this.DevaPost = postDeva && postDeva.length ? postDeva[0] : {};
    this.hasDevaPost =
      this.DevaPost && Object.keys(this.DevaPost).length ? true : false;

    if (!this.hasDevaPost) {
      let postGujr = this.songPosts.filter((song) => song.slug === "Gujr");
      this.GujrPost = postGujr && postGujr.length ? postGujr[0] : {};
      this.hasGujrPost =
        this.GujrPost && Object.keys(this.LatnPost).length ? true : false;
    }

    if (this.hasLatnPost) {
      this.songPostOnSongPage = this.LatnPost;
      this.scriptOfsongPostOnSongPage = "Latn";
    } else if (this.hasDevaPost) {
      this.songPostOnSongPage = this.DevaPost;
      this.scriptOfsongPostOnSongPage = "Deva";
    } else if (this.hasGujrPost) {
      this.songPostOnSongPage = this.GujrPost;
      this.scriptOfsongPostOnSongPage = "Gujr";
    }

    this.allScriptsFullnames = getScriptFullnames(allScripts);

    if (this.scriptOfsongPostOnSongPage === "Latn") {
      this.allScriptsFullnames = this.allScriptsFullnames.filter(
        (a) => a !== "latin"
      );
    } else if (this.scriptOfsongPostOnSongPage === "Deva") {
      this.allScriptsFullnames = this.allScriptsFullnames.filter(
        (a) => a !== "devanagari"
      );
    } else if (this.scriptOfsongPostOnSongPage === "Gujr") {
      this.allScriptsFullnames = this.allScriptsFullnames.filter(
        (a) => a !== "gujarati"
      );
    }

    // Transliteration (Deva or Gujr post will be the base for transliteration)

    this.transliterationDetails.hasSourcePost =
      this.hasDevaPost || this.hasGujrPost ? true : false;

    if (this.transliterationDetails.hasSourcePost) {
      if (this.hasDevaPost) {
        this.transliterationDetails.SourcePost = this.DevaPost;
        this.transliterationDetails.SourceScript = "Deva";
      } else {
        this.transliterationDetails.SourcePost = this.GujrPost;
        this.transliterationDetails.SourceScript = "Gujr";
      }
    } else this.transliterationDetails.SourcePost = {};

    // this.metaPost = await this.$content("music", {
    //   deep: true,
    // })
    //   .where({
    //     $and: [
    //       { slugurl: this.$route.params.song },
    //       { slug: "meta" },
    //       { show: { $ne: false } },
    //     ],
    //   })
    //   .sortBy("position", "asc")

    //   .fetch();

    // this.metaPost = this.metaPost.length ? this.metaPost[0] : {};

    // this.posts = await this.$content("music", {
    //   deep: true,
    // })
    //   .where({
    //     $and: [
    //       { slugurl: this.$route.params.song }, // default slugurl is dir without "/music/"
    //       { show: { $ne: false } },
    //     ],
    //   })
    //   .sortBy("position", "asc")
    //   .fetch();

    // [this.metaPost, ...this.songPosts] = this.posts;

    // if (this.songPosts) {
    //   this.LatnSongPost = this.songPosts.filter((song) => song.slug === "Latn");
    //   this.LatnSongPost =
    //     this.LatnSongPost && this.LatnSongPost.length
    //       ? this.LatnSongPost[0]
    //       : {};
    // }

    if (this.metaPost) {
      this.metaPost.name ? (this.songName = this.metaPost.name) : {};
    }

    // if (this.posts) {
    //   this.metaPost = this.posts.filter(post => post.slug === `meta`)[0];
    // }

    // if (this.metaPost) {
    //   this.songPosts = await this.$content(`music`, {
    //     deep: true
    //   })
    //     .where({
    //       $and: [
    //         { dir: this.metaPost.dir },
    //         { slug: { $ne: `meta` } },
    //         { show: { $ne: false } }
    //       ]
    //     })
    //     .sortBy("position", "asc")
    //     .fetch();
    // }
  },
};
</script>