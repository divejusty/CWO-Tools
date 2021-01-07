<template>
	<h1>
		<slot></slot>
	</h1>
</template>

<script>
export default {
	name: 'Heading',
	}
</script>

<style lang="scss" scoped>
	h1 {
		text-transform: capitalize;
		text-align: center;
		margin: 5px;
		margin-bottom: 10px;
		font-size: $font-size-large;
	}
</style>
