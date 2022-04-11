<template>
  <header
    class="h-[70px] dark:bg-slate-900 flex items-center justify-between px-5 border-b dark:border-slate-600 border-gray-300"
  >
    <div class="flex items-center space-x-6">
      <nuxt-link to="/">
        <h1 class="md:text-4xl text-2xl font-bold">Coder</h1>
      </nuxt-link>
      <nuxt-link
        v-popover:soon
        to="#"
        class="inline-block py-2 px-5 rounded-lg bg-gray-100 hover:bg-gray-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-600 transition-all"
        >Share</nuxt-link
      >
      <popover
        class="mt-2 dark:bg-slate-800 dark:text-slate-100 overflow-auto"
        event="click"
        :pointer="false"
        name="soon"
      >
        <p class="p-2 text-center text-red-600">Comming Soon!</p>
      </popover>
    </div>
    <div class="space-x-2">
      <button
        @click="$emit('horizontal')"
        class="border dark:border-slate-700 border-gray-300 py-3 px-3 rounded-md"
      >
        <IconsCol class="rotate-90" />
      </button>
      <button
        @click="$emit('vertical')"
        class="border dark:border-slate-700 border-gray-300 py-3 px-3 rounded-md"
      >
        <IconsCol />
      </button>
      <ToggleTheme class="py-3" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
