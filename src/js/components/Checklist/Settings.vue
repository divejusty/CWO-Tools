<template>
	<div class="config no-print">
		<Subheading>instellingen</Subheading>
		<FormLabel>Discipline</FormLabel>
		<BaseSelect name="discipline" @change="$emit('change', $event.target.value)" class="w-full">
			<option :value="null" disabled :selected="discipline==null">---Discipline---</option>
			<option v-for="requirement in requirements" :value="requirement.name" :key="requirement.name" :selected="discipline==requirement.name">
				{{ requirement.name }}
			</option>
		</BaseSelect>

		<FormLabel>Deelnemers</FormLabel>
		<div>
			<div class="participant" v-for="participant in participants" :key="participant.uuid">
				<div class="participant__name">
					{{ participant.name }}
				</div>
				<div class="participant__level">
					{{ participant.level }}
				</div>
				<div class="participant__actions">
					<IconButton class="float-right" @click.native="$emit('delete-participant', participant.uuid)" :danger="true">
						x
					</IconButton>
				</div>
			</div>
		</div>

		<div class="flex flex-row">
			<BaseInput name="new-name" placeholder="Naam" v-model="newName" @keyup.enter="addParticipant" />
			<BaseInput inputType="number" name="new-level" placeholder="cwo" min="1" max="4" v-model="newLevel" />
			<IconButton @click.native="addParticipant" :disabled="!submittable" class="flex-shrink-0">+</IconButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		participants: {
			type: Array,
			default: () => {
				return []
			},
		},
		requirements: {
			type: Array,
			default: () => {
				return []
			},
		},
		discipline: {
			type: String,
			default: '',
		},
	},
	data () { return {
		newName: '',
		newLevel: 1,
	}},
	computed: {
		submittable() {
			return this.newName.length > 0 && this.newLevel >= 1 && this.newLevel <= 4 // TODO: Add UUID check 
		},
	},
	methods: {
		addParticipant() {
			if(!this.submittable) {
				return
			}

			this.participants.push({
				uuid: this.newName + '-' + this.newLevel,
				name: this.newName,
				level: this.newLevel,
			})

			this.newName = ''
			this.newLevel = 1			
		},
	},
}
</script>

<style lang="scss" scoped>
.participant {
	display: flex;
	width: 100%;
	place-content: start space-evenly;
	align-items: center;
	margin: 5px;

	&__name {
		flex-grow: 1;
	}

	&__level, &__actions {
		flex-grow: 0;
		padding-left: 5px;
	}
}
</style>
