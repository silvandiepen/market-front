<script>
import { defineComponent } from "vue/dist/vue.cjs.js";
import DOMPurify from "dompurify";
export default defineComponent({
  name: "VHtml",
  props: {
    html: {
      type: String,
      required: true,
    },
  },
  directives: {
    swap: {
      mounted(el, binding) {
        // createContextualFragment allows script execution
        // why you would probably want to sanitize the html
        // e.g. using https://github.com/cure53/DOMPurify

        let safe = DOMPurify.sanitize(binding.value);
        let frag = document.createRange().createContextualFragment(safe);
        console.log(safe);

        console.log(frag);
        el.replaceWith(frag);
      },
    },
  },
  template: '<div v-swap="html"></div>',
});
</script>
