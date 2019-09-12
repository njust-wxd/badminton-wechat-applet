import Vue from 'vue';
import App from './App.vue';
import showToast from './common/showToast';

Vue.config.productionTip = false;
Vue.prototype.$showToast = showToast;

new App().$mount();
