<template>
  <Modal v-model="dialog">
    <div
      class="min-w-[400px] dark:bg-slate-800 bg-white rounded-md animate-bounce-out"
    >
      <div
        class="flex items-center justify-between p-4 border-b dark:border-slate-700 border-gray-200"
      >
        <h1 class="font-semibold text-xl">Edit CSS Links</h1>
        <button
          @click="dialog = false"
          class="text-gray-500 hover:bg-gray-200 rounded-full"
        >
          <IconsClose class="w-5 h-5" />
        </button>
      </div>
      <div class="py-5 px-3">
        <p class="text-sm">
          Enter the links that you would like to use in this document
        </p>
        <form @submit.prevent="addLink">
          <div class="flex space-x-2 mt-3">
            <input
              @keypress.enter="addLink"
              class="border dark:bg-slate-700 dark:border-slate-600 border-gray-200 p-2 rounded-sm w-full outline-none focus:ring-1 focus:ring-gray-500"
              type="url"
              required
              v-model="link"
              placeholder="https://example.com/css/style.css"
            />
            <button
              type="submit"
              class="text-gray-500 dark:text-gray-200 text-lg p-2 border dark:border-green-600 rounded-sm group hover:bg-green-600 hover:border-green-600 transition-all"
            >
              <IconsAddLink class="w-5 h-5 group-hover:text-white" />
            </button>
          </div>
        </form>
        <br />
        <!-- Links list -->
        <template v-for="(link, i) in links">
          <div :key="`cssLink${i}`" class="flex space-x-2 mb-2">
            <input
              class="border border-gray-200 p-2 rounded-sm w-full outline-none focus:ring-1 focus:ring-gray-500"
              type="url"
              disabled
              :value="link"
            />
            <button
              @click="$emit('removeLink', i)"
              class="text-gray-500 dark:text-gray-200 text-lg p-2 border dark:border-red-600 rounded-sm group hover:bg-red-600 hover:border-red-600 transition-all"
            >
              <IconsRemoveLink class="w-5 h-5 group-hover:text-white" />
            </button>
          </div>
        </template>
        <div class="flex justify-end items-center mt-2">
          <button
            @click="dialog = false"
            class="bg-green-600 text-white py-2 px-5 rounded-sm text-sm"
          >
            All Done
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    show: Boolean,
    links: Array,
  },
  data() {
    return {
      link: null,
    };
  },
  methods: {
    addLink() {
      if (!this.link) return;
      this.$emit("addLink", this.link);
      this.link = null;
    },
  },
  computed: {
    dialog: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("close", val);
      },
    },
  },
};
</script>

<style></style>
