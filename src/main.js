import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router.js';
import VueCookies from 'vue-cookies';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(Vuelidate);

Vue.$cookies.remove('mgn_session');

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');