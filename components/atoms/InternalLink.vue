<template>
  <NuxtLink :to="href" class="link" :style="varCSS">
    <slot />
  </NuxtLink>
</template>
<script>
export default {
  name: "InternalLink",
  props: {
    href: {
      type: String,
      required: true,
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
    hoverColor: {
      type: String,
      default: "#333",
    },
    fontFamily: {
      type: String,
      default: "sans-serif",
    },
    decoration: {
      type: String,
      default: "underline",
    },
  },
  computed: {
    varCSS() {
      return {
        "--fontSize": this.fontSize,
        "--fontWeight": this.fontWeight,
        "--color": this.color,
        "--fontFamily": this.fontFamily,
        "--decoration": this.decoration,
        "--hoverColor": this.hoverColor,
      };
    },
  },
};
</script>

<style scope>
.link {
  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--color);
  font-weight: var(--fontWeight);
  text-decoration: var(--decoration);
  text-decoration: none;
}

.link:hover {
  color: var(--hoverColor);
  text-decoration: var(--decoration);
  text-decoration: none;
}
</style>
