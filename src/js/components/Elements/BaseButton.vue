<template>
	<button @click="click">
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
}
</script>

<style lang="scss" scoped>
	button {
		padding: $button-padding;
		border-radius: $button-rounding;

		width: $button-width;
		height: $button-height;
		font-weight: bold;
		cursor: pointer;

		&:disabled {
			cursor: not-allowed;
		}

		&.delete {
			float: right;
			background-color: $colour-danger;
			border-color: darken($colour-danger, 10);
		}

		&.text {
			width: auto;
		}
	}
</style>
