<template>
  <div class="flex items-center" :style="varCSS">
    <AtomsIcon :iconName="icon" :color="color" :size="size" class="icon" />
    <span class="text-label ml-2">
      {{ label }}
    </span>
  </div>
</template>
<script>
export default {
  name: "iconTitle",
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    size: {
      type: String,
      default: "16px",
    },
  },
  computed: {
    varCSS() {
      return {
        "--color": this.color,
        "--size": this.size,
      };
    },
  },
};
</script>
<style scope>
.text-label {
  color: var(--color);
  font-size: var(--size);
}
</style>
