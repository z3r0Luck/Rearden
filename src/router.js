import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
// COMPONENTS
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Load from './components/Load.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login,
			meta: {
				requiresAuth: false,
				disallowAuthed: true
			}
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			meta: {
				requiresAuth: true,
				disallowAuthed: false
			}
		},
		{
			path: '/load',
			name: 'Load',
			component: Load,
			meta: {
				requiresAuth: true,
				disallowAuthed: false
			}
		},
	]
});

router.beforeEach(function (to, from, next) {
	const session = VueCookies.get('mgn_session');

	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (session) {
			next();
		} 
		else {
			next({ path: '/' });
		}
	}
	else if (to.matched.some(attr => attr.meta.disallowAuthed)) {
		if (session) {
			next({ path: '/home' });
		} 
		else {
			next();
		}
	}
});

export default router;