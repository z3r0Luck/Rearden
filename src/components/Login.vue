<template>
	<v-container fill-height fluid>
		<v-row class="text-center" align="center" justify="center">
			<v-col cols="5">
				<v-system-bar class="rounded-t-xl" height="40" window dark>
					<span>R34rd3n H4ckT00L</span>
					<v-spacer></v-spacer>
					<v-icon>mdi-minus</v-icon>
					<v-icon>mdi-checkbox-blank-outline</v-icon>
					<v-icon>mdi-close</v-icon>
				</v-system-bar>

				<v-form ref="form" @submit.prevent="Login()" lazy-validation class="mgn_form mgn_header rounded-b-xl">
					<v-col cols="12" align="center" justify="center">
						<v-img src="hack.png" width="70"></v-img>
					</v-col>

					<v-col cols="12" v-if="loading">
						<h2>Loading R34rd3n H4ckT00L</h2>
						<v-progress-circular indeterminate color="primary"></v-progress-circular>
					</v-col>

					<pre v-if="!loading" class="d-flex justify-center align-center">
/$$$$$$$   /$$$$$$  /$$   /$$                 /$$  /$$$$$$            
| $$__  $$ /$$__  $$| $$  | $$                | $$ /$$__  $$          
| $$  \ $$|__/  \ $$| $$  | $$  /$$$$$$   /$$$$$$$|__/  \ $$ /$$$$$$$ 
| $$$$$$$/   /$$$$$/| $$$$$$$$ /$$__  $$ /$$__  $$   /$$$$$/| $$__  $$
| $$__  $$  |___  $$|_____  $$| $$  \__/| $$  | $$  |___  $$| $$  \ $$
| $$  \ $$ /$$  \ $$      | $$| $$      | $$  | $$ /$$  \ $$| $$  | $$
| $$  | $$|  $$$$$$/      | $$| $$      |  $$$$$$$|  $$$$$$/| $$  | $$
|__/  |__/ \______/       |__/|__/       \_______/ \______/ |__/  |__/
					</pre>

					<v-col cols="12" v-if="!loading">
						<v-text-field
							solo
							label="Username"
							:disabled="submitted"
							v-model.trim="$v.username.$model"
							:error-messages="usernameErrors"
							@input="$v.username.$touch()"
							@blur="$v.username.$touch()"
							required
						></v-text-field>
					</v-col>

					<v-col cols="12" v-if="!loading">
						<v-text-field
							solo
							:disabled="submitted"
							v-model.trim="$v.password.$model"
							:error-messages="passwordErrors"
							@input="$v.password.$touch()"
							@blur="$v.password.$touch()"
							label="Password"
							type="password"
						></v-text-field>
					</v-col>

					<v-col cols="12" v-if="error !== ''">
						<h4 class="red--text">{{ error }}</h4>
					</v-col>

					<v-col cols="12" v-if="!loading">
						<v-btn large type="submit" class="ma-2" color="primary" dark :loading="loadingLoginBtn" :disabled="loadingLoginBtn">Submit</v-btn>
					</v-col>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
	data() {
		return {
			username: '',
			password: '',
			loading: true,
			loadingLoginBtn: false,
			submitted: false,
			user: {
				name: 'letsakis',
				pass: 'ts1mp0uk1!'
			},
			error: ''
		}
	},

	validations: {
		username: {
			required
		},
		password: {
			required
		},
	},

	computed: {
		usernameErrors() {
			const errors = [];
			if (!this.$v.username.$dirty) return errors;
			!this.$v.username.required && errors.push('Username is required.');
			return errors;
		},

		passwordErrors() {
			const errors = [];
			if (!this.$v.password.$dirty) return errors;
			!this.$v.password.required && errors.push('Password is required.');
			return errors;
		}
	},

	mounted() {
		setTimeout(() => {
			this.loading = false;
		}, 2600);
	},

	methods: {
		Login() {
			this.$v.$touch();

			if (!this.$v.$invalid) {
				this.loadingLoginBtn = true;
				this.submitted = true;

				setTimeout(() => {
					if (this.username === this.user.name && this.password === this.user.pass) {
						// this.$cookies.set('mgn_session', 'Z6MehYx7=$LW7NC6t24F');
						this.$router.push('/home');
					}
					else {
						this.error = 'Username or password is wrong!'
					}
					this.submitted = false;
					this.loadingLoginBtn = false;
				}, 1200);
			}
		}
	},
}
</script>