<template>
  <div class="flex space-x-2 items-center justify-center w-full">
    <label for="theme" class="text-sm flex-1 w-full block">Select Theme</label>
    <select
      name="theme"
      v-model="selectedtheme"
      @change="$emit('updateTheme', selectedtheme)"
      id="theme"
      class="border flex-auto border-gray-200 py-1 px-2 rounded outline-none capitalize"
    >
      <template v-for="(theme, i) in themes">
        <option
          :key="`themeName-${i}-${theme}`"
          class="capitalize"
          :value="theme"
        >
          {{ theme }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedtheme: "monokai",
      themes: [
        "neo",
        "neat",
        "elegant",
        "duotone-light",
        "eclipse",
        "ssms",
        "monokai",
        "the-matrix",
        "twilight",
        "material-darker",
        "material-ocean",
        "material",
        "darcula",
        "dracula",
        "duotone-dark",
        "midnight",
        "vibrant-ink",
      ],
    };
  },
};
</script>

<style></style>
