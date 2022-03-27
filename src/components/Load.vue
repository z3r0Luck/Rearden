<template>
	<v-container fill-height fluid>
		<v-row class="text-center rounded-xl" align="center" justify="center">
			<v-col cols="5">
				<v-system-bar class="rounded-t-xl" height="40" window dark>
					<v-spacer></v-spacer>
					<v-icon>mdi-minus</v-icon>
					<v-icon>mdi-checkbox-blank-outline</v-icon>
					<v-icon>mdi-close</v-icon>
				</v-system-bar>

				<div class="mgn_form mgn_header rounded-b-xl">
					<v-col cols="12" align="center" justify="center" class="mb-10">
						<v-img src="hack.png" width="70"></v-img>
					</v-col>

					<h4 class="mb-5">Message here...</h4>

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
			value: 10,
			values: [5, 10, 15, 20, 25]
		}
	},

	mounted() {
		setInterval(() => {
			this.value += this.values[Math.floor(Math.random() * this.values.length)];
		}, 1000);
	},
}
</script>