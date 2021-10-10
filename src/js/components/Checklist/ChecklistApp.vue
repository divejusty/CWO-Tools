<template>
	<AppLayout>
		<InfoDialog :shown="infoDialog.shown" @dialog-close="infoDialog.callback">
			<Subheading>Uitleg</Subheading>
			<ol class="list-decimal ml-5">
				<li>Selecteer een discipline</li>
				<li>Vul deelnemers in (naam en welk diploma)</li>
				<li>Druk de lijst af (zorg dat achtergrondkleuren aan staan!)</li>
			</ol>
		</InfoDialog>
		<QuestionDialog :shown="questionDialog.shown" @dialog-close="questionDialog.callback(answer)">{{ questionDialog.message }}</QuestionDialog>

		<template slot="title">
			Checklist Generator
		</template>

		<template slot="menu">
			<MenuItem @click="showExplanation">Uitleg</MenuItem>
			<MenuItem @click="doPrint">
				Afdrukken
			</MenuItem>
			<MenuItem @click="doReset" :danger="true">
				Reset alles
			</MenuItem>
		</template>

		<template slot="sidebar">
			<Settings :participants=participants :requirements=requirements :discipline=discipline class="flex-grow"
			@change="discipline = $event"
			@delete-participant="deleteParticipant" />
		</template>

		<template>
			<Checklist :participants="participants" :requirement="selectedRequirement" />
		</template>
	</AppLayout>
</template>

<script>
// Import components
import AppLayout from '../AppLayout'
import Settings from './Settings'
import Checklist from './Checklist'

export default {
	components: {
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
			infoDialog: {
				shown: false,
				callback: this.closeDialogs
			},
			questionDialog: {
				shown: false,
				message: '',
				callback(answer) {
					console.log(answer)
				}
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
		},
		showExplanation() {
			this.infoDialog.shown = true
		},
		closeDialogs() {
			this.infoDialog.shown = false
			this.questionDialog.shown = false
		}
	},
	created() {
		this.fetchAllRequirements()
		this.version.date = window.appVersionDate
	},
}
</script>
