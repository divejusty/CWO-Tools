<template>
	<div class="w-full flex">
		<IconButton @click="menuExpanded =! menuExpanded">
			=
		</IconButton>
		<div class="absolute top-10 left-3 border rounded-md" v-show="menuExpanded">
			<ul>
				<slot name="menuItems"></slot>
				<MenuItem @click="toggleTheme">Dark/Light</MenuItem>
				<MenuItem>Over</MenuItem>
			</ul>
		</div>

		<Heading class="text-center flex-grow">
			<slot></slot>
		</Heading>
	</div>
</template>

<script>
export default {
	data () {
		return {
			menuExpanded: false,
		}
	},
	methods: {
		toggleTheme() { // TODO: Extract this?
			if(localStorage.theme === null || localStorage.theme === 'dark') {
				localStorage.theme = 'light'
				document.documentElement.classList.remove('dark')
			} else {
				localStorage.theme = 'dark'
				document.documentElement.classList.add('dark')
			}
		}
	},
}
</script>
