<template>
  <main>
    <article v-if="metaPost">
      <h1 class="tw-text-5xl tw-py-4 tw-text-center tw-my-6 tw-bg-gradient-to-br tw-from-pink-500 to tw-to-pink-800 tw-bg-clip-text tw-text-transparent">{{metaPost.title}}</h1>

      <!-- <SongInfobox :metaPost="metaPost">
      </SongInfobox> -->

      <SongTabs
        :metaPost="metaPost"
        :songPosts="songPosts"
        v-if="metaPost && songPosts"
        class="tw-max-w-screen-md tw-mx-auto"
      ></SongTabs>
    </article>
  </main>
</template>

<script>
import SongTabs from "~/components/templates/song/SongTabs.vue";
// import SongInfobox from "~/components/templates/song/SongInfobox.vue";

export default {
  name: "SongPage",
  components: {
    SongTabs
    // SongInfobox
  },
  data() {
    return {
      posts: [],
      metaPost: {},
      songPosts: []
    };
  },
  async fetch() {
    this.posts = await this.$content("music", { deep: true })
      .where({
        $and: [
          { slugurl: this.$route.params.song }, // default slugurl is dir without "/music/"
          { show: { $ne: false } }
        ]
      })
      .sortBy("position", "asc")
      .fetch();

    [this.metaPost, ...this.songPosts] = this.posts;

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
  }
};
</script>