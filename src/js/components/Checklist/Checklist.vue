<template>
	<div class="checklist overflow-y-scroll overflow-x-hidden m-2">
		<table class="border-collapse text-sm">
			<thead>
			<tr v-if="participants.length > 0">
				<td class="">{{ requirement.name }}</td>
				<td class="capitalize" v-for="(participant, key) in participants" :key="key">
					{{ participant.name }} ({{ participant.level }})
				</td>
			</tr>
			</thead>

			<tbody>
				<tr v-for="(task, key) in requirement.requirements" :key="key" :class="(maxLevel < task.diploma) ? 'no-print' : ''">
					<td class="capitalize">{{ task.name }}</td>
					<td :class="'requirement' + (task.diploma > participant.level ? ' not-required' : '')"
						v-for="(participant, key) in participants" :key="key">&nbsp;</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		requirement: {
			type: Object,
			default: () => {
				return {}
			},
		},
		participants: {
			type: Array,
			default: () => {
				return []
			},
		},
	},
	computed: {
		maxLevel() {
			return this.participants.reduce((accumulator, participant) => {
				return Math.max(accumulator, participant.level)
			}, 0)
		}
	},
}
</script>

<style lang="scss" scoped>
// Apply Tailwind classes like this such that they don't have to be repeated over every table element.
@layer components {
	td {
		@apply
			py-1 px-2
			text-center print:text-black
			border dark:border-gray-100 print:dark:border-black
			dark:bg-gray-800 print:dark:bg-gray-300
		;
		min-width: 70px;

		&.requirement {
			@apply 
				dark:bg-gray-600 print:dark:bg-transparent
			;
		}

		&.not-required {
			background-image: url("../../../images/unavailable.gif");	
		}
	}
}
</style>
