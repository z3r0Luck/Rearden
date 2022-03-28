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

				<div class="mgn_form mgn_header rounded-b-xl">
					<v-col cols="12" align="center" justify="center" class="mb-10">
						<v-img src="hack.png" width="70"></v-img>
					</v-col>

					<h4 class="mb-5">{{ msg }}</h4>

					<v-progress-linear
						height="10"
						v-model="value"
					></v-progress-linear>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			value: 0,
			values: [5, 7, 10, 12, 20],
			messages: ['Message here 1...', 'Message here 2...', 'Message here 3...'],
			msg: ''
		}
	},

	mounted() {
		let i = 0;
		let intervalID = setInterval(() => {
			if (i === this.messages.length) {
				this.value = 100;
				clearInterval(intervalID);
			}
			else {
				if (this.value > 100 && i < this.messages.length) {
					this.value = 0;
					i++;
				}
				else {
					this.value += this.values[Math.floor(Math.random() * this.values.length)];
				}
				this.msg = this.messages[i];
			}
		}, 1000);
	},
}
</script>