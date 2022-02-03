<script lang="ts">
import { defineComponent } from "vue";

import UIHeader from "./components/UIHeader.vue";
import UIFooter from "./components/UIFooter.vue";
import UIIntro from "./components/UIIntro.vue";
import UIPanel from "./components/Panel/UIPanel.vue";
import UISlider from "./components/Slider/UISlider.vue";
import UIContent from "./components/UIContent.vue";
import UIBanner from "./components/UIBanner.vue";
import UIQuote from "./components/UIQuote.vue";
import UIImageSection from "./components/UIImageSection.vue";
import UIImage from "./components/UIImage.vue";
import UIDescription from "./components/UIDescription.vue";

import VHtml from "./components/VHtml.vue";

import { slides, columns1, columns2, getDescription } from "./mockData";

export default defineComponent({
  components: {
    UIHeader,
    UIFooter,
    UIIntro,
    UIPanel,
    UIBanner,
    UISlider,
    UIContent,
    UIImageSection,
    UIImage,
    UIQuote,
    UIDescription,
    VHtml,
  },
  setup() {
    return { slides, columns1, columns2, getDescription };
  },
});
</script>

<template>
  <UIHeader />
  <main id="container">
    <UIIntro title="Welcome-to Storefront" image="img/intro.jpg" />
    <UIPanel :columns="columns2" />
    <UISlider :slides="slides" />
    <UIContent>
      <h2>A content section</h2>
      <h3>For instance for blogs, or just long content</h3>

      <v-html :html="getDescription(3, 3)" />

      <h4>Sub section</h4>
      <v-html :html="getDescription(3, 3)" />
    </UIContent>
    <UIBanner />
    <UIPanel :columns="[...columns1, ...columns1]" />
    <UIQuote style="background-color: var(--secondary)">
      <p>
        Vue Storefront is the world's fastest-growing open-source eCommerce
        frontend
      </p></UIQuote
    >
    <UIImageSection>
      <UIDescription>
        <h2>Building a website is like playing with Lego</h2>
        <p>{{ getDescription(4) }}</p>
      </UIDescription>
      <UIImage src="img/master.jpg" />
    </UIImageSection>
    <UIPanel :columns="[columns2[0], columns2[1]]" />
  </main>
  <UIFooter />
</template>

<style src="./assets/style/app.scss" lang="scss" />
