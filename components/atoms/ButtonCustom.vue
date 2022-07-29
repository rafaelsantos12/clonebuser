<template>
  <button
    class="button"
    type="button"
    @click="$emit('click', $event)"
    :style="varCSS"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonCustom",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "38px",
    },
    bgColor: {
      type: String,
      default: "#808080",
    },
    color: {
      type: String,
      default: "#000",
    },
    borderRadius: {
      type: String,
      default: "0px",
    },
    borderColor: {
      type: String,
      default: "#fff",
    },
    hoverBgColor: {
      type: String,
      default: "#808080",
    },
  },
  computed: {
    varCSS() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--bgColor": this.bgColor,
        "--color": this.color,
        "--borderRadius": this.borderRadius,
        "--borderColor": this.borderColor,
        "--hoverBgColor": this.hoverBgColor,
      };
    },
  },
};
</script>
<style scope>
.button {
  width: var(--width);
  height: var(--height);
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
}

.button:hover {
  background: var(--hoverBgColor);
}
</style>
