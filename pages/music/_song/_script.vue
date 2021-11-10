<template>
  <div>
    <div>
      <div>
        hello
        <div v-if="metaPost && songPosts">
          <SongTab
            :songPost="songPosts.filter(song => (song.script).toLowerCase() === $route.params.script)[0]"
            :metaPost="metaPost"
            :transliterationDetails="transliterationDetails"
            :scriptPage="$route.params.script === 'bangla' ? 'bengali' : $route.params.script === 'odia' ? 'oriya' : $route.params.script"
          ></SongTab>
        </div>
        <!-- <nuxt-content :document="songPosts.filter(song => song.script === $route.params.script)[0]"></nuxt-content> -->
      </div>
    </div>
  </div>
</template>

<script>
import SongTab from "~/components/templates/song/SongTab.vue";

export default {
  name: "SongScript",
  props: {
    metaPost: Object,
    songPosts: { required: true, type: Array },
    transliterationDetails: Object,
  },
  components: { SongTab },
  data() {
    return {
    };
  },
  // data() {
  //   return {
  //     posts: [],
  //     metaPost: {},
  //     songPosts: [],
  //     songName: {},
  //   };
  // },
  // async fetch() {
  //   this.posts = await this.$content("music", {
  //     deep: true,
  //   })
  //     .where({
  //       $and: [
  //         { script: this.$route.params.script }, // default slugurl is dir without "/music/"
  //         { show: { $ne: false } },
  //       ],
  //     })
  //     .sortBy("position", "asc")
  //     .fetch();

  //   [this.metaPost, ...this.songPosts] = this.posts;
  // },
  methods: {
    // songPostDevaGujr() {
    //   // Deva or Gujr post will be the base for transliteration
    //   let posts = [];
    //   if (this.songPosts) {
    //     posts = this.songPosts.filter((post) => post.slug === "Deva");
    //     if (posts) {
    //       return posts[0];
    //     } else {
    //       posts = this.songPosts.filter((post) => post.slug === "Gujr");
    //       return posts[0];
    //     }
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>