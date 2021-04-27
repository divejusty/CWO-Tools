<template>
	<div class="app w-screen h-screen">
		<div class="sidebar border-r p-3 pt-0 flex flex-col justify-between">
			<AppMenu>
				<slot name="title">App</slot>
				<template slot="menuItems">
					<slot name="menu"></slot>
				</template>
			</AppMenu>
		
			<slot name="sidebar"></slot>
		</div>
		<slot class="main"></slot>

		<div class="copyright no-print text-center p-3 border-t">
			Laatst bijgewerkt op {{ versionInfo }}. De source is beschikbaar op <Link href="https://github.com/divejusty/CWO-Tools" target="_blank">GitHub</Link>.
		</div>
	</div>
</template>

<script>
// Import components
import AppMenu from './AppMenu'

// Import other dependencies
import { DateTime } from 'luxon'

export default {
	components: {
		AppMenu,
	},
	data () {
		return {
			version: {
				date: '',
			},
		}
	},
	computed: {
		versionInfo()
		{
			// Create a Date object from the timestamp (after multiplying it by 1000, as PHP returns it in seconds)
			let date = new DateTime(this.version.date * 1000)
			return date.toLocaleString()
		},
	},
	created() {
		this.version.date = window.appVersionDate
	},
}
</script>

<style lang="scss">
.app {
	display: grid;
	grid-template-areas:
		"sidebar main"
		"copyright copyright";
	grid-template-columns: 300px 1fr;
	grid-template-rows: auto 38px; // TODO convert to rem
}

@media screen and (max-width: 750px) { // TODO convert to proper breakpoints
	.app {
		grid-template-areas:
			"sidebar"
			"main"
			"copyright";
		grid-template-columns: auto;
		grid-template-rows: auto auto 38px; 
	}
}

.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.copyright { grid-area: copyright; }

@media print {
	.app {
		grid-template-areas: "main";
		grid-template-columns: auto;
		grid-template-rows: auto;
	}
}

</style>
