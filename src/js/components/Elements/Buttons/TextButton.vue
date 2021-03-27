<template>
	<base-button @click="click" :isText="true">
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
}
</script>
