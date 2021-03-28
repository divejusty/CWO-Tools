<template>
	<base-button @click="click" :isText="isText" :danger="danger">
		<slot></slot>
	</base-button>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
	name: 'TextButton',
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
			default: true,
		},
		danger: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
}
</script>
