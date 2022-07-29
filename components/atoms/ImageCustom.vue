<template>
  <NuxtImg :src="src" :alt="alt" :style="varCSS" class="image" />
</template>

<script>
export default {
  name: "ImageCustom",
  props: {
    src: {
      type: String,
      require: true,
    },
    alt: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "100%",
    },

    borderRadius: {
      type: String,
      default: "0px",
    },
  },
  computed: {
    varCSS() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--borderRadius": this.borderRadius,
      };
    },
  },
};
</script>
<style scope>
.image {
  width: var(--width);
  border-radius: var(--borderRadius);
  overflow: hidden;
}
</style>
