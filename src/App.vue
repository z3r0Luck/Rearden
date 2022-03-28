<template>
	<v-app>
		<v-system-bar status class="noselect" height="30" dark>
			<v-icon>mdi-vpn</v-icon>
			<v-progress-circular v-if="vpnLoading" size="20" indeterminate color="primary"></v-progress-circular>
			<span v-else>Connected to MGN VPN</span>
			<v-spacer></v-spacer>
			<span>{{ date }}</span>
			<v-spacer></v-spacer>
			<v-icon>mdi-wifi-strength-4</v-icon>
			<v-icon>mdi-signal</v-icon>
			<v-icon>mdi-battery</v-icon>
			<span>{{ clock }}</span>
		</v-system-bar>

		<v-main class="mgn_container">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			date: new Date().toDateString(),
			clock: new Date().toLocaleTimeString(),
			vpnLoading: true
		}
	},

	created() {
		setInterval(() => {
			let js_date = new Date();
			this.clock = js_date.toLocaleTimeString();
			this.date = js_date.toDateString();
		}, 500);
	},

	mounted() {
		setInterval(() => {
			this.vpnLoading = false;
		}, 1300);
	},
};
</script>

<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none;
            user-select: none;
}

::selection {
	background-color: #263238;
}

.mgn_container {
	background-image: url('/kali.jpg');
	background-position: center;
	background-size: cover;
	background-blend-mode: soft-light;
}

.mgn_header {
	background: rgba(0, 0, 0, .4);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(11.1px);
}

.mgn_form {
	padding: 70px;
}
</style>