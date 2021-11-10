<template>
  <div>

    <PageSectionContainer
      SectionClass="tw-min-h-[calc(100vh-3rem)] bg-gradient-to-tl from-white to-yellow-50/50 tw-flex tw-justify-center tw-items-center "
      DivContainerClass="tw-flex tw-flex-col md:tw-flex-row"
    >
      <div class="md:tw-w-2/3 md:text-center tw-flex tw-flex-col tw-gap-12">
      
          <h1>
            <span class="md:tw-text-6xl tw-bg-clip-text tw-bg-gradient-to-br tw-from-yellow-500 tw-to-yellow-800 tw-py-2 tw-text-4xl tw-font-semibold tw-text-transparent tw-leading-10">
              Jain Songs, Stavan, Bhajan Music 
            </span>
          </h1>
          
          <p class="md:tw-text-3xl tw-inline-block tw-text-2xl tw-font-medium tw-text-yellow-900 tw-leading-10 ">
            Jain Lyrics in English, Hindi, Gujarati, Tamil, Kannada, Telugu, Bengali and many more.
          </p>

          <p class="md:tw-text-2xl tw-mx-auto tw-text-xl tw-rounded tw-text-yellow-800 tw-leading-10">A project by CA Manas Madrecha to catalouge new and old Jainism songs in multiple languages and scripts.
          </p>
      </div>
      <div class="md:tw-w-1/3 tw-flex tw-items-center tw-justify-center">
        <ComposeMusicSvg class="tw-mx-auto tw-w-full tw-h-auto "></ComposeMusicSvg>
        <!-- #FFD28A undraw website color -->
      </div>

    </PageSectionContainer>

    <PageSectionContainer SectionClass="tw-bg-gradient-to-br tw-from-white tw-to-pink-50/50">
      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <h2 class="tw-text-4xl tw-my-4">Jain Stavan lyrics</h2>
        <div>
        <p></p>

        </div>
      </div>
    </PageSectionContainer>
  </div>
</template>

<script>
import PageSectionContainer from "~/components/templates/PageSectionContainer.vue";

import ComposeMusicSvg from "~/assets/images/home/compose-music.svg?inline";
import { mdiMusic } from '@mdi/js';


export default {
  components: { PageSectionContainer, ComposeMusicSvg },
  data() {
    return {mdiMusic,};
  }
};
</script>
