import Vue from 'vue';
import VueBrowserUpdate from '@sum.cumo/vue-browserupdate';

Vue.use(VueBrowserUpdate, {
  options: {
    noclose: true,
    l: 'fr',
    container: document.getElementById('container'),
    required: {
      e: 93,
      f: 93,
      s: -1,
      c: 93,
      samsung: -1,
    },
    unsupported: true,
  },
});
