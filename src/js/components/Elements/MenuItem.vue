<template>
	<li @click="$emit('click')"
		class="p-2 interactable first:rounded-t-md last:rounded-b-md" :class="classes">
		<slot></slot>
	</li>
</template>

<script>
export default {
	props: {
		danger: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	computed: {
		classes() {
			let classList = ''

			if(this.danger) {
				classList += 'dark:text-red-500 text-red-900 '
			}

			return classList
		},
	},
}
</script>
