<template>
	<div class="options no-print">
		<Subheading>Opties</Subheading>
		<TextButton @click="$emit('do-print')">Afdrukken</TextButton>
		<TextButton @click="$emit('do-reset')" :danger=true>Reset alles</TextButton>
		<TextButton @click="toggleTheme">Dark/Light</TextButton>
	</div>
</template>

<script>
export default {
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
