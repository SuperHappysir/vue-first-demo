import CTable from './src/main.vue';

CTable.install = function(Vue) {
  Vue.component(CTable.name, CTable);
};

export default CTable;