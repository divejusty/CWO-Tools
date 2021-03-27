<template>
	<base-button @click="click">
		<slot></slot>
	</base-button>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
	name: 'IconButton',
	methods: {
		click(event) {
			this.$emit('click', event)
			event.target.blur()
		}
	},
}
</script>
