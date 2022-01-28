<template>
  <section id="footer" class="ui-footer">
    <div class="ui-footer__container">Footer</div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.ui-footer {
  &__container {
    background-color: var(--foreground);
    color: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--half-space);

    width: var(--container-width);
    margin: auto;
    @media screen and (min-width: getConfig(max-width)) {
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }
  }
}
</style>
