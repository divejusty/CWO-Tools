<template>
	<AppLayout>
		<template slot="sidebar">
			<Settings :participants=participants :requirements=requirements :discipline=discipline class="flex-grow"
			@change="discipline = $event"
			@delete-participant="deleteParticipant" />

			<div class="info no-print flex-grow-0">
				<Subheading>Uitleg</Subheading>
				<ol class="list-decimal ml-3">
					<li>Selecteer een discipline</li>
					<li>Vul deelnemers in (naam en welk diploma)</li>
					<li>Druk de lijst af (zorg dat achtergrondkleuren aan staan!)</li>
				</ol>
			</div>

			<Options @do-reset="doReset()" @do-print="doPrint()" class="flex-grow-0" />
		</template>

		<template>
			<Checklist :participants="participants" :requirement="selectedRequirement" />
		</template>
	</AppLayout>
</template>

<script>
// Import components
import AppLayout from '../AppLayout'
import Options from './Options'
import Settings from './Settings'
import Checklist from './Checklist'

// Import other dependencies
import { DateTime } from 'luxon'

export default {
	components: {
		Options,
		Settings,
		Checklist,
		AppLayout,
	},
	data () 
	{
		return {
			participants: [],
			requirements: [],
			discipline: null,
			version: {
				date: '',
			},
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
		versionInfo()
		{
			// Create a Date object from the timestamp (after multiplying it by 1000, as PHP returns it in seconds)
			let date = new DateTime(this.version.date * 1000)
			return date.toLocaleString()

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
	created() {
		this.fetchAllRequirements()
		this.version.date = window.appVersionDate
	},
}
</script>
