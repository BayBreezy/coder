<template>
  <div
    @click="$emit('activateTab', text)"
    :class="{ 'bg-gray-200 ': active }"
    class="flex-1 relative block p-2 group hover:bg-gray-200 transition-all duration-300"
  >
    <span
      :class="{ 'w-full': active, 'w-0': !active }"
      class="absolute inset-x-0 -bottom-px bg-violet-600 h-px group-hover:w-full transition-all duration-500"
    ></span>
    <div class="flex items-center justify-center space-x-2">
      <slot name="icon" />
      <span class="font-medium">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: "",
      type: String,
    },
    active: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style></style>
