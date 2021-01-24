<template>
	<div class="app">
		<Settings :participants=participants :requirements=requirements :discipline=discipline
		@change="discipline = $event"
		@delete-participant="deleteParticipant" />

		<div class="info no-print">
			<Subheading>Uitleg</Subheading>
			<ol class="list">
				<li>Selecteer een discipline</li>
				<li>Vul deelnemers in (naam en welk diploma)</li>
				<li>Druk de lijst af (zorg dat achtergrondkleuren aan staan!)</li>
			</ol>
		</div>

		<Options @do-reset="doReset()" @do-print="doPrint()" />

		<Checklist :participants="participants" :requirement="selectedRequirement" />

		<div class="copyright no-print center">
			Laatst bijgewerkt op 24/01/2021. De source is beschikbaar op <a href="https://github.com/divejusty/CWO-Tools" target="_blank">GitHub</a>.
		</div>
	</div>
</template>

<script>
// Import components
import Options from './Checklist/Options'
import Settings from './Checklist/Settings'
import Checklist from './Checklist/Checklist'

export default {
	components: {
		Options,
		Settings,
		Checklist,
	},
	data () {
		return {
			participants: [],
			requirements: [],
			discipline: null,
		}
	},
	computed: {
		selectedRequirement()
		{
			let requirement = this.requirements.find(requirement => {
				return requirement.name == this.discipline
			})
			if(requirement === undefined) {
				return {}
			}
			return requirement
		},
	},
	methods: {
		fetchAllRequirements()
		{
			fetch('app.php')
				.then((response) => {
					return response.json()
				}).then((data) => {
					data.forEach(element => {
						this.fetchRequirements(element)
					})
				}).catch(error => {
					console.error(error)
				})
		},
		fetchRequirements(file)
		{
			fetch('assets/reqs/' + file + '.json')
			.then(response => {
				return response.json()
			}).then(data => {
				this.requirements.push(data)
			}).catch(error => {
				console.error(error)
			})
		},
		onSelectDiscipline(discipline)
		{
			this.discipline = discipline
		},
		deleteParticipant(uuid)
		{
			this.participants = this.participants.filter(participant => {
				return participant.uuid !== uuid
			})
		},
		doPrint() {
			if(this.discipline !== null && this.participants.length > 0) {
				window.print()
			} else {
				alert('Er is nog niet genoeg informatie om te printen')
			}
		},

		doReset() {
			this.participants = []
			this.discipline = null;
		}
	},
	mounted() {
		this.fetchAllRequirements()
	}
}
</script>

<style lang="scss">
.app {
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-areas:
		"config checklist"
		"info checklist"
		"options checklist"
		"copyright copyright";
	grid-template-columns: 300px 1fr;
	grid-template-rows: 2fr 1fr 1fr $grid-copyright-height;
}

@media screen and (max-width: 750px) {
	.app {
		grid-template-areas:
			"config"
			"info"
			"options"
			"checklist"
			"copyright";
		grid-template-columns: auto;
		grid-template-rows: auto auto auto auto $grid-copyright-height; 
	}
}

.config, .checklist, .info, .options {
	padding: $padding;
	box-sizing: border-box;
}

.config, .info, .options {
	border-right: 1px solid $colour-foreground;
}

.config { grid-area: config; }
.checklist { grid-area: checklist; }
.options { grid-area: options; }
.info { grid-area: info; }

.copyright {
	border-top: 1px solid $colour-foreground;
	grid-area: copyright;
	padding: $padding;
}

@media print {
	.app {
		grid-template-areas: "checklist";
		grid-template-columns: auto;
		grid-template-rows: auto;
	}
}

</style>
