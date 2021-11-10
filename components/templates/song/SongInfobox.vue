<template>
  <div class="tw-z-10 tw-bg-gradient-to-br tw-from-white tw-to-yellow-50 tw-border tw-border-gray-300 tw-p-4 tw-rounded-xl tw-text-lg tw-max-w-96">

    <div v-if="metaPost.name || metaPost.title">
      <h2 class="tw-font-medium before:tw-content-open-quote after:tw-content-close-quote">{{metaPost.name ? metaPost.name.hi : metaPost.title}}</h2>
    </div>

    <div v-if="metaPost.name && metaPost.name.en">
      <abbr title="English">en</abbr>: {{metaPost.name.en}}
    </div>

    <div v-if="metaPost.language" class="tw-text-base">
      <div class="tw-flex tw-gap-2 tw-justify-start tw-items-center">

      <p>Language(s): </p>      
      <ul class="tw-flex tw-flex-wrap tw-gap-1 tw-justify-start tw-items-center ">
        <li
        v-for="language in metaPost.language"
        :key="language" class="tw-inline">{{language}}</li>  
      </ul>
      </div>
    </div>

    <div
      v-if="metaPost.genre"
      class="tw-flex"
    >
      Genre:
      <ol class="tw-flex tw-flex-wrap">
        <li
          v-for="genre in metaPost.genre"
          :key="genre"
          class="tw-mx-1"
        >{{genre}}</li>
      </ol>
    </div>

    <details open>
      <summary>People</summary>
      <div class="singer">
        {{metaPost.singer}}
      </div>
      <div class="lyricist">
        {{metaPost.lyricist}}
      </div>
      <div class="composer">
        {{metaPost.composer}}
      </div>
    </details>

    {{metaPost.record}}
    {{metaPost.label}}

  </div>
</template>

<script>
export default {
  props: { metaPost: Object }
};
</script>

<style lang="sass" scoped>
.infobox__value
  @apply tw-font-semibold
</style>