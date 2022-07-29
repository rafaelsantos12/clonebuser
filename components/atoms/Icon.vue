<template>
  <fa class="icon" :icon="iconName" :style="varCSS" />
</template>

<script>
export default {
  name: "Icon",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "32px",
    },
    color: {
      type: String,
      default: "#000",
    },
    hoverColor: {
      type: String,
      default: "#000",
    },
  },
  computed: {
    varCSS() {
      return {
        "--size": this.size,
        "--color": this.color,
        "--hoverColor": this.hoverColor,
      };
    },
  },
};
</script>

<style scope>
.icon {
  font-size: var(--size);
  color: var(--color);
}

.icon:hover {
  color: var(--hoverColor);
}
</style>
