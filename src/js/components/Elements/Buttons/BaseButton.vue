<template>
	<button @click="click"
			class="rounded-md 
			text-gray-800 dark:text-gray-100 
			p-1.5 h-8 m-1
			interactable
			border-default
			text-sm font-bold "
			:class="classes">
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
	computed: {
		classes() {
			let classList = ''

			if(!this.isText) {
				classList += 'w-8 '
			}

			if(this.danger) {
				classList += 'dark:text-red-500 text-red-900 '
				classList += 'dark:border-red-500 border-red-900 '
			}

			return classList
		},
	},
	props: {
		isText: {
			type: Boolean,
			required: true,
			default: false,
		},
		danger: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
}
</script>
