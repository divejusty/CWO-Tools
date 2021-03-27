<template>
	<button @click="click"
			class="rounded-md dark:bg-gray-100 bg-gray-800 dark:text-gray-800 text-gray-100 p-1.5 h-10 cursor-pointer font-bold"
			:class="(isText ? '' : 'W-10')">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	methods: {
		click(event) {
			this.$emit('click', event)
			event.target.blur()
		}
	},
	props: {
		isText: {
			type: Boolean,
			required: false,
			default: false,
		}
	},
}
</script>

<style lang="scss" scoped>
	button {
		&:disabled {
			cursor: not-allowed;
		}

		&.delete {
			float: right;
			background-color: $colour-danger;
			border-color: darken($colour-danger, 10);
		}
	}
</style>
