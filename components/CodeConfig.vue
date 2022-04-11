<template>
  <div>
    <div
      class="z-20 dark:bg-slate-900 inset-x-0 top-0 h-12 flex items-center justify-between shadow-md"
    >
      <div class="flex space-x-5 ml-5 text-sm font-medium">
        <span
          :class="{ 'text-red-600': active === 'HTML' }"
          @click="$emit('activate', 'HTML')"
          class="cursor-pointer"
          >Html</span
        >
        <span
          :class="{ 'text-red-600': active === 'CSS' }"
          @click="$emit('activate', 'CSS')"
          class="cursor-pointer"
          >CSS</span
        >
        <span
          :class="{ 'text-red-600': active === 'JS' }"
          @click="$emit('activate', 'JS')"
          class="cursor-pointer"
          >JS</span
        >
        <tooltip />
      </div>
      <div class="flex items-center space-x-3 mr-3 text-sm font-medium">
        <div class="flex items-center cursor-pointer" v-popover:themesList>
          Theme:
          <span class="flex items-center ml-2 capitalize"
            >{{ selectedtheme }} <IconsMenuDown class="w-5 h-5" />
          </span>
        </div>
        <popover
          class="mt-2 dark:bg-slate-800 dark:text-slate-100 overflow-auto"
          event="click"
          :pointer="false"
          name="themesList"
        >
          <template v-for="(theme, i) in themes">
            <div
              @click="
                selectedtheme = theme;
                $emit('changeTheme', theme);
              "
              :class="{
                'dark:bg-slate-600 bg-gray-200': selectedtheme === theme,
              }"
              class="px-3 py-1 transition-all hover:bg-gray-200 dark:hover:bg-slate-600 rounded-sm cursor-pointer"
              :key="`theme${i}-${theme}`"
            >
              <span class="capitalize">{{ theme }}</span>
            </div>
          </template>
        </popover>
        <span class="cursor-pointer" @click="jsModal = true">JS Links</span>
        <span class="cursor-pointer" @click="cssModal = true">CSS Links</span>
      </div>
    </div>
    <!-- CSS link modal -->
    <ModalsCSSLinks
      :links="cssLinks"
      :show="cssModal"
      @close="cssModal = false"
      @addLink="cssLinks.push($event)"
      @removeLink="cssLinks.splice($event, 1)"
    />
    <!-- JS link modal -->
    <ModalsJSLinks
      :links="jsScripts"
      :show="jsModal"
      @close="jsModal = false"
      @addLink="jsScripts.push($event)"
      @removeLink="jsScripts.splice($event, 1)"
    />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: "JS",
    },
  },
  watch: {
    cssLinks: {
      handler(val) {
        this.$emit("updatecssLinks", val);
      },
      deep: true,
    },
    jsScripts: {
      handler(val) {
        this.$emit("updatejsScripts", val);
      },
      deep: true,
    },
  },
  data() {
    return {
      cssModal: false,
      jsModal: false,
      cssLinks: [],
      jsScripts: [],
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
