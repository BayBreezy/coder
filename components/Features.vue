<template>
  <section class="lg:mt-28 mt-14 lg:pt-10 pt-5">
    <p
      class="text-primary-500 dark:text-primary-100 text-center uppercase font-bold"
    >
      Showcase Your Skills
    </p>
    <div class="flex mt-20 lg:px-8">
      <div class="w-1/2 hidden lg:block">
        <h1 class="font-semibold text-4xl">
          Let them know <br />what you are capable of
        </h1>
      </div>
      <div>
        <!-- Card -->
        <div
          class="hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer rounded-lg p-5 hover:shadow-lg"
        >
          <div
            class="rounded-full inline-block dark:bg-primary-400 bg-primary-500 text-white p-5"
          >
            <IconsBlock class="w-10 h-10" />
          </div>
          <h2 class="text-2xl font-semibold mt-6">Fast Prototyping</h2>
          <p class="mt-4 text-lg">Quickly create simple snippets that work.</p>
        </div>
        <!-- Card -->
        <div
          class="mt-10 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer rounded-lg p-5 hover:shadow-lg"
        >
          <div
            class="rounded-full inline-block dark:bg-primary-400 bg-primary-500 text-white p-5"
          >
            <IconsShareScreen class="w-10 h-10" />
          </div>
          <h2 class="text-2xl font-semibold mt-6">Showcase your skills</h2>
          <p class="mt-4 text-lg">
            Let your friends and co-workers know how talented you are.
          </p>
        </div>
        <!-- Card -->
        <div
          class="mt-10 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer rounded-lg p-5 hover:shadow-lg"
        >
          <div
            class="rounded-full inline-block dark:bg-primary-400 bg-primary-500 text-white p-5"
          >
            <IconsClick class="w-10 h-10" />
          </div>
          <h2 class="text-2xl font-semibold mt-6">Share anywhere</h2>
          <p class="mt-4 text-lg">
            Share your code with anyone witha few clicks.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
