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
  },
  setup() {
    return { slides, columns1, columns2, getDescription };
  },
});
</script>

<template>
  <UIHeader />
  <main id="container">
    <UIIntro
      title="Welcome-to Storefront"
      image="https://images.unsplash.com/photo-1498747324273-943f73ca00b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3648&q=80"
    />
    <UIPanel :columns="columns2" />
    <UISlider :slides="slides" />
    <UIContent>
      <h2>A content section</h2>
      <h3>For instance for blogs, or just long content</h3>
      <p>
        {{ getDescription(2) }}
      </p>
      <p>
        {{ getDescription(3) }}
      </p>
      <p>
        {{ getDescription(2) }}
      </p>

      <h4>Sub section</h4>
      <p>
        {{ getDescription(2) }}
      </p>
      <p>
        {{ getDescription(1) }}
      </p>
      <p>
        {{ getDescription(1) }}
      </p>
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
        <p></p>
        <p>
          {{ getDescription() }}
        </p>
      </UIDescription>
      <UIImage
        src="https://images.unsplash.com/photo-1526505262320-81542978f63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
      />
    </UIImageSection>
    <UIPanel :columns="[columns2[0], columns2[1]]" />
  </main>
  <UIFooter />
</template>

<style src="./assets/style/app.scss" lang="scss" />
