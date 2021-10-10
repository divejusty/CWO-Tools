<template>
	<div class="w-full flex no-print">
		<div v-closable="closeMenu">
			<IconButton @click="menuExpanded =! menuExpanded">
				=
			</IconButton>
			<div class="absolute top-10 left-3 border-default rounded-md" v-show="menuExpanded" @click="closeMenu">
				<ul>
					<slot name="menuItems"></slot>
					<MenuSpacer />
					<MenuItem @click="toggleTheme">Dark/Light</MenuItem>
					<MenuItem>Over</MenuItem>
				</ul>
			</div>
		</div>
		

		<Heading class="text-center flex-grow">
			<slot></slot>
		</Heading>
	</div>
</template>

<script>
import { toggleThemeMode } from '../utils'

export default {
	data () {
		return {
			menuExpanded: false,
		}
	},
	methods: {
		toggleTheme() {
			toggleThemeMode()
		},
		closeMenu() {
			// Only close the menu when it's actually open
			if (this.menuExpanded) {
				this.menuExpanded = false
			}
		},
	},
}
</script>
