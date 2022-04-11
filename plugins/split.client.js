import VueSplit from "vue-splitjs";
import Vue from "vue";
import Popover from "vue-js-popover";
Vue.component("VueSplit", VueSplit);
Vue.use(Popover, { tooltip: true });
