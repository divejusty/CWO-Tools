<template>
	<select v-on="inputListeners" v-bind="$attrs" 
			class="h-8  interactable border-default p-1.5 rounded-md m-1">
		<slot></slot>
	</select>
</template>

<script>
export default {
	name: 'BaseInput',
	methods: {
		click(event) {
			this.$emit('click', event)
			event.target.blur()
		}
	},
	computed: {
		inputListeners() {
			let vm = this
			return Object.assign(
				{},
				this.$listeners,
				{
					input(event) {
						vm.$emit('input', event.target.value)
					}
				}
			)
		},
	},
	props: {
		inputType: {
			type: String,
			required: false,
			default: 'text',
		},
	},
}
</script>
