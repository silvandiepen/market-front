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
    padding: calc(var(--space) / 2);

    width: var(--container-width);
    margin: auto;
  }
}
</style>