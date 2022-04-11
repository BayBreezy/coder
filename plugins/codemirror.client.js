import Vue from "vue";
import VueCodemirror from "vue-codemirror";
// import base style
import "codemirror/lib/codemirror.css";

//Themes
import "codemirror/theme/monokai.css";
import "codemirror/theme/elegant.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/neat.css";
import "codemirror/theme/ssms.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/twilight.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/material.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/duotone-dark.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/vibrant-ink.css";

//Import languages
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/xml/xml";
import "codemirror/mode/htmlembedded/htmlembedded";

//Import fold
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";

//Editing addons
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";

//Hint addons

import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/xml-hint";

Vue.use(VueCodemirror);
