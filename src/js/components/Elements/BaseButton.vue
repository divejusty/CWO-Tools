<template>
	<button @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
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

		&.delete {
			float: right;
			color: $colour-danger;
			border-color: $colour-danger;
		}

		&.text {
			width: auto;
		}
	}
</style>
