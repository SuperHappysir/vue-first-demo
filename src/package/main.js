import CTable from './c-table/';
const components = [
  CTable
];

function install(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}

if (window.Vue) {
    install(window.Vue);
}
export default {
  CTable
};