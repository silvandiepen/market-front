<script lang="ts">
import { defineComponent } from "vue";

import UIHeader from "./components/UIHeader.vue";
import UIFooter from "./components/UIFooter.vue";
import UIIntro from "./components/UIIntro.vue";
import UIPanel from "./components/UIPanel.vue";
import UISlider from "./components/Slider/UISlider.vue";
import UIContent from "./components/UIContent.vue";

export default defineComponent({
  components: {
    UIHeader,
    UIFooter,
    UIIntro,
    UIPanel,
    UISlider,
    UIContent,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <UIHeader />
  <main id="container">
    <UIIntro />
    <UIPanel />
    <UISlider />
    <UIContent />
  </main>
  <UIFooter />
</template>

<style src="./assets/style/app.scss" lang="scss" />