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

					<v-col cols="12" v-if="loadingExploit">
						<h4 class="mb-5">{{ msg }}</h4>
						<v-progress-linear color="green" height="10" v-model="value"></v-progress-linear>
					</v-col>
					<v-col v-else>
						<h3>Exploited successfully!</h3>
						<h4>{{ extra_msg }}</h4>
						<h4 class="mt-5">Transfering money in progress</h4>
						<v-progress-linear indeterminate color="green" height="10"></v-progress-linear>
					</v-col>
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
			values: [12, 5, 10, 7, 6],
			loadingExploit: true,
			messages: [
				'[*] Started reverse TCP handler on 10.10.10.12:2080',
				'[*] 10.10.10.12:2080 - Connecting to target for exploitation.',
				'[*] 10.10.10.12:2080 - Connecting to target for exploitation..',
				'[*] 10.10.10.12:2080 - Connecting to target for exploitation...',
				'[*] 10.10.10.12:2080 - Connecting to target for exploitation....',
				'[*] 10.10.10.12:2080 - Connection established for exploitation.',
				'[*] 10.10.10.12:2080 - Target OS selected valid for OS indicated by SMB reply',
				'[*] 10.10.10.12:2080 - Sending all but last fragment of exploit packet',
				'[*] 10.10.10.12:2080 - Starting non-paged pool grooming',
				'[+] 10.10.10.12:2080 - Target arch selected valid for arch indicated by DCE/RPC reply',
				'[*] 10.10.10.12:2080 - Trying exploit with 12 Groom Allocations.',
				'[*] 10.10.10.12:2080 - Sending all but last fragment of exploit packet',
				'[*] 10.10.10.12:2080 - Starting non-paged pool grooming',
				'[+] 10.10.10.12:2080 - Sending SMBv2 buffers',
				'[+] 10.10.10.12:2080 - Closing SMBv1 connection creating free hole adjacent to SMBv2 buffer.',
				'[*] 10.10.10.12:2080 - Sending final SMBv2 buffers.',
				'[*] 10.10.10.12:2080 - Sending last fragment of exploit packet!',
				'[*] 10.10.10.12:2080 - Receiving response from exploit packet',
				'[+] 10.10.10.12:2080 - ETERNALBLUE overwrite completed successfully (0xC000000D)!',
				'[*] 10.10.10.12:2080 - Sending egg to corrupted connection.',
				'[*] 10.10.10.12:2080 - Triggering free of corrupted buffer.',
				'[*] Sending stage (206403 bytes) to 10.10.0.101',
				'[*] Meterpreter session 1 opened (10.10.10.12:2080 -> 10.10.0.101:49207) at 2080-03-29 12:01:46 -0500',
				'[+] 10.10.10.12:2080 - =-=-=-=-=-=-=-=CONNECTED=-=-=-=-=-=-=-=-=-='
			],
			extra_msg: 'Server username: NT AUTHORITY\\SYSTEM',
			msg: ''
		}
	},

	mounted() {
		let j = 0;
		let min = 2200;
		let max = 3300;
		let random_time = Math.floor(Math.random() * (max - min + 1) + min);

		setInterval(() => {
			this.msg = this.messages[j];
			random_time = Math.floor(Math.random() * (max - min + 1) + min);
			j++;
		}, random_time);

		let intervalID = setInterval(() => {
			if (j === this.messages.length) {
				clearInterval(intervalID);
				this.value = 100;
				this.loadingExploit = false;
			}
			else {
				if (this.value > 100) {
					this.value = 0;
				}
				else {
					this.value += this.values[Math.floor(Math.random() * this.values.length)];
				}
			}
		}, 1000);
	},
}
</script>