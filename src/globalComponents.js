import DropDown from "./components/Dropdown.vue";


const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
  },
};

export default GlobalComponents;
