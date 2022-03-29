<template>
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
	</v-col>
</template>

<script>
export default {

}
</script>