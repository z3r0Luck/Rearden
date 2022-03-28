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

						<v-col cols="6" v-for="(code, index) in passcodes" :key="code">
							<v-text-field
								:label="'code ' + index"
								v-model.trim="passcode"
								clearable
								required
							></v-text-field>
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
export default {
	data() {
		return {
			loadingBtn: false,
			passcodes: 6,
			passcode: ''
		}
	},

	methods: {
		SubmitCodes() {
			this.loadingBtn = true;

			setTimeout(() => {
				this.$router.push('/load');

				this.loadingBtn = false;
			}, 2000);
		}
	},
}
</script>