<template>
	<v-container fill-height fluid>
		<v-row class="text-center rounded-xl" align="center" justify="center">
			<v-col cols="5">
				<v-system-bar class="rounded-t-xl" height="40" window dark>
					<span>R34rd3n H4ckT00L</span>
					<v-spacer></v-spacer>
					<v-icon>mdi-minus</v-icon>
					<v-icon>mdi-checkbox-blank-outline</v-icon>
					<v-icon>mdi-close</v-icon>
				</v-system-bar>
				<v-form ref="form" @submit.prevent="SubmitCodes()" lazy-validation class="mgn_form mgn_header rounded-b-xl">
					<v-row>	
						<v-col cols="12" align="center" justify="center">
							<v-img src="hack.png" width="70"></v-img>
						</v-col>

						<v-col cols="12">
							<h4 class="mb-5">Enter the codes you have...</h4>
						</v-col>

						<v-col cols="6">
							<v-text-field
								label="Code 1"
								v-model.trim="$v.passcode1.$model"
								:error-messages="passcode1Errors"
								@input="$v.passcode1.$touch()"
								@blur="$v.passcode1.$touch()"
								clearable
								required
							></v-text-field>
							<h5 class="red--text text-left">{{ msg1 }}</h5>
						</v-col>
						<v-col cols="6">
							<v-text-field
								label="Code 2"
								v-model.trim="$v.passcode2.$model"
								:error-messages="passcode2Errors"
								@input="$v.passcode2.$touch()"
								@blur="$v.passcode2.$touch()"
								clearable
								required
							></v-text-field>
							<h5 class="red--text text-left">{{ msg2 }}</h5>
						</v-col>
						<v-col cols="6">
							<v-text-field
								label="Code 3"
								v-model.trim="$v.passcode3.$model"
								:error-messages="passcode3Errors"
								@input="$v.passcode3.$touch()"
								@blur="$v.passcode3.$touch()"
								clearable
								required
							></v-text-field>
							<h5 class="red--text text-left">{{ msg3 }}</h5>
						</v-col>
						<v-col cols="6">
							<v-text-field
								label="Code 4"
								v-model.trim="$v.passcode4.$model"
								:error-messages="passcode4Errors"
								@input="$v.passcode4.$touch()"
								@blur="$v.passcode4.$touch()"
								clearable
								required
							></v-text-field>
							<h5 class="red--text text-left">{{ msg4 }}</h5>
						</v-col>
						<v-col cols="6">
							<v-text-field
								label="Code 5"
								v-model.trim="$v.passcode5.$model"
								:error-messages="passcode5Errors"
								@input="$v.passcode5.$touch()"
								@blur="$v.passcode5.$touch()"
								clearable
								required
							></v-text-field>
							<h5 class="red--text text-left">{{ msg5 }}</h5>
						</v-col>
						<v-col cols="6">
							<v-text-field
								label="Code 6"
								v-model.trim="$v.passcode6.$model"
								:error-messages="passcode6Errors"
								@input="$v.passcode6.$touch()"
								@blur="$v.passcode6.$touch()"
								clearable
								required
							></v-text-field>
							<h5 class="red--text text-left">{{ msg6 }}</h5>
						</v-col>

						<v-col cols="12">
							<v-btn large type="submit" class="ma-2" color="primary" :loading="loadingBtn" :disabled="loadingBtn">Submit Codes</v-btn>
						</v-col>
					</v-row>
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
			loadingBtn: false,
			passcodes: [
				'588758', 
				'677597', 
				'965949', 
				'699374',
				'486217',
				'123456'
			],
			passcode1: '',
			passcode2: '',
			passcode3: '',
			passcode4: '',
			passcode5: '',
			passcode6: '',
			msg1: '',
			msg2: '',
			msg3: '',
			msg4: '',
			msg5: '',
			msg6: '',
		}
	},

	validations: {
		passcode1: {
			required
		},
		passcode2: {
			required
		},
		passcode3: {
			required
		},
		passcode4: {
			required
		},
		passcode5: {
			required
		},
		passcode6: {
			required
		},
	},

	computed: {
		passcode1Errors() {
			const errors = [];
			if (!this.$v.passcode1.$dirty) return errors;
			!this.$v.passcode1.required && errors.push('Code is required.');
			return errors;
		},
		passcode2Errors() {
			const errors = [];
			if (!this.$v.passcode2.$dirty) return errors;
			!this.$v.passcode2.required && errors.push('Code is required.');
			return errors;
		},
		passcode3Errors() {
			const errors = [];
			if (!this.$v.passcode3.$dirty) return errors;
			!this.$v.passcode3.required && errors.push('Code is required.');
			return errors;
		},
		passcode4Errors() {
			const errors = [];
			if (!this.$v.passcode4.$dirty) return errors;
			!this.$v.passcode4.required && errors.push('Code is required.');
			return errors;
		},
		passcode5Errors() {
			const errors = [];
			if (!this.$v.passcode5.$dirty) return errors;
			!this.$v.passcode5.required && errors.push('Code is required.');
			return errors;
		},
		passcode6Errors() {
			const errors = [];
			if (!this.$v.passcode6.$dirty) return errors;
			!this.$v.passcode6.required && errors.push('Code is required.');
			return errors;
		},
	},

	methods: {
		SubmitCodes() {
			let codes_OK = true;
			this.$v.$touch();

			if (!this.$v.$invalid) {
				this.loadingBtn = true;
				setTimeout(() => {
					if (!this.passcodes.some(code => code === this.passcode1)) {
						codes_OK = false;
						this.msg1 = 'Code is not correct!';
					}

					if (!this.passcodes.some(code => code === this.passcode2)) {
						codes_OK = false;
						this.msg2 = 'Code is not correct!';
					}

					if (!this.passcodes.some(code => code === this.passcode3)) {
						codes_OK = false;
						this.msg3 = 'Code is not correct!';
					}

					if (!this.passcodes.some(code => code === this.passcode4)) {
						codes_OK = false;
						this.msg4 = 'Code is not correct!';
					}

					if (!this.passcodes.some(code => code === this.passcode5)) {
						codes_OK = false;
						this.msg5 = 'Code is not correct!';
					}

					if (!this.passcodes.some(code => code === this.passcode6)) {
						codes_OK = false;
						this.msg6 = 'Code is not correct!';
					}

					if (codes_OK) {
						this.$router.push('/load');
					}
					this.loadingBtn = false;
				}, 1700);
			}
		}
	},
}
</script>