import SideBar from "./components/SidebarPlugin";

// asset imports
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import "./assets/scss/material-dashboard.scss";

// library auto imports
import "es6-promise/auto";


export default {
  install(Vue) {
    Vue.use(SideBar);
    Vue.use(VueMaterial);
  },
};
