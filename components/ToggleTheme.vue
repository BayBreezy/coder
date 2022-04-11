<template>
  <button
    @click="toggle"
    class="border dark:border-slate-700 border-gray-300 px-3 rounded-md"
  >
    <IconsTheme />
  </button>
</template>

<script>
export default {
  methods: {
    toggle() {
      switch (this.$colorMode.value) {
        case "dark":
          this.$colorMode.preference = "light";
          break;
        case "light":
          this.$colorMode.preference = "dark";
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style></style>
