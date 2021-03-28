<template>
	<h2 class="m-1.5 mb-2.5 text-center capitalize text-xl">
		<slot></slot>
	</h2>
</template>

<script>
export default {
	name: 'Subheading',
	}
</script>

<style lang="scss" scoped>
	h2 {
		text-transform: capitalize;
		text-align: center;
		margin: 5px;
		margin-bottom: 10px;
		font-size: $font-size-medium;
	}
</style>
