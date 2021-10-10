<template>
	<div class="w-screen h-screen absolute top-0 left-0 z-40" v-show="shown" @click.exact="doClose">
		<div class="border-default rounded-md w-80 absolute top-20 left-1/2 -ml-40 bg-gray-700 z-50 p-3">
			<slot></slot>
		</div>
	</div>
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
