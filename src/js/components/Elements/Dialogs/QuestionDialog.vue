<template>
	<BaseDialog :shown="shown">
		<slot></slot>
	</BaseDialog>
</template>

<script>
export default {
	props: {
		shown: {
			type: Boolean,
			required: true,
		},
	}
}
</script>
