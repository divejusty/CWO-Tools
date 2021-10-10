<template>
	<BaseDialog class="flex flex-col" :shown="shown" @dialog-close="doClose">
		<slot></slot>
		<TextButton @click="doClose">Sluiten</TextButton>
	</BaseDialog>
</template>

<script>
export default {
	props: {
		shown: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		doClose() {
			if (this.shown) {
				this.$emit('dialog-close')
			}
		},
	},
}
</script>
