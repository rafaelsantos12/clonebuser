<template>
  <component :is="tag" :style="varCSS" class="title">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Title",
  props: {
    tag: {
      type: String,
      default: "h1",
    },
    fontSize: {
      type: String,
      default: "18px",
    },
    fontWeight: {
      type: String,
      default: "400",
    },
    color: {
      type: String,
      default: "#333",
    },
    fontFamily: {
      type: String,
      default: "sans-serif",
    },
    lineHeight: {
      type: String,
      default: "1",
    },
  },
  computed: {
    varCSS() {
      return {
        "--fontSize": this.fontSize,
        "--fontWeight": this.fontWeight,
        "--color": this.color,
        "--fontFamily": this.fontFamily,
        "--lineHeight": this.lineHeight,
      };
    },
  },
};
</script>

<style scope>
.title {
  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--color);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
}
</style>
