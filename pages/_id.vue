<template>
  <div class="fixed w-full h-full">
    <CodeNav @vertical="horizontal = false" @horizontal="horizontal = true" />
    <main class="relative h-full">
      <client-only>
        <splitpanes :horizontal="horizontal" class="h-full">
          <pane
            min-size="30"
            class="bg-white dark:bg-slate-700 relative overflow-auto"
          >
            <CodeConfig
              @updatecssLinks="cssLinks = $event"
              @updatejsScripts="jsScripts = $event"
              :active="activeTab"
              @activate="activeTab = $event"
              @changeTheme="selectedtheme = $event"
            />
            <Editor
              @updateInput="jsText = $event"
              :class="{ hidden: activeTab !== 'JS' }"
              :theme="selectedtheme"
              mode="javascript"
            />
            <Editor
              @updateInput="cssText = $event"
              :class="{ hidden: activeTab !== 'CSS' }"
              :theme="selectedtheme"
              mode="css"
            />
            <Editor
              @updateInput="htmlText = $event"
              :class="{ hidden: activeTab !== 'HTML' }"
              :theme="selectedtheme"
              mode="text/html"
              class="mb-5"
            />
          </pane>
          <pane min-size="30" class="relative h-full">
            <div class="w-full h-full">
              <iframe
                sandbox="allow-scripts"
                width="100%"
                title="output"
                height="100%"
                :srcdoc="srcDoc"
              ></iframe>
            </div>
          </pane>
        </splitpanes>
      </client-only>
    </main>
  </div>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
  components: { Splitpanes, Pane },
  data() {
    return {
      activeTab: "HTML",
      htmlText: "",
      jsText: "",
      cssText: "",
      jsText: "",
      horizontal: false,
      selectedtheme: "monokai",
      cssLinks: [],
      jsScripts: [],
    };
  },
  methods: {
    beforeWindowUnload(e) {
      if (this.isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.isDirty) {
      next(false);
      window.location = to.path; // this is the trick
    } else {
      next();
    }
  },
  mounted() {
    window.addEventListener("beforeunload", this.beforeWindowUnload);
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.beforeWindowUnload);
  },
  computed: {
    isDirty() {
      return (
        !!this.htmlText ||
        !!this.jsText ||
        !!this.cssText ||
        !!this.jsScripts.length ||
        !!this.cssLinks.length
      );
    },
    styles() {
      let s = [];
      this.cssLinks.forEach((link) => {
        s.push(`<link type="text/css" rel="stylesheet" href="${link}">`);
      });
      return s;
    },
    scripts() {
      let s = [];
      this.jsScripts.forEach((link) => {
        s.push(`<script src="${link}"><\/script>`);
      });
      return s;
    },
    srcDoc() {
      //iframe srcdoc template tags
      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>
            ${this.styles.join("")}
            <style>
              ${this.cssText}
            </style>
          </head>
          <body>
            ${this.htmlText}
            ${this.scripts.join("")}
            <script>
              ${this.jsText}
            <\/script>
          </body>
        </html>
      `;
    },
  },
};
</script>

<style></style>
