<template>
  <header class="flex items-center justify-between lg:py-4 py-5">
    <nuxt-link to="/">
      <h1 class="md:text-4xl text-2xl font-bold">Coder</h1>
    </nuxt-link>
    <div class="space-x-5 hidden lg:flex">
      <nuxt-link
        to="#"
        v-popover:login
        class="inline-block py-2 px-5 rounded-lg bg-gray-100 hover:bg-gray-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-600 transition-all"
        >Login</nuxt-link
      >
      <popover
        class="mt-2 dark:bg-slate-800 dark:text-slate-100 overflow-auto"
        event="click"
        :pointer="false"
        name="login"
      >
        <p class="p-2 text-center text-red-600">Comming Soon!</p>
      </popover>
      <nuxt-link
        to="/133"
        class="inline-block py-2 px-5 rounded-lg bg-black hover:bg-gray-800 transition-all text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
        >Start Coding</nuxt-link
      >
      <ToggleTheme />
    </div>
    <div class="lg:hidden block space-x-2">
      <ToggleTheme class="py-3" />
      <button
        class="border dark:border-slate-700 border-gray-300 py-3 px-3 rounded-md"
      >
        <IconsMenu class="" />
      </button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
