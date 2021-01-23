<template>
	<div class="checklist">
		<Heading class="checklist__title no-print">Checklist</Heading>
		<table class="table">
			<thead>
			<tr v-if="participants.length > 0">
				<td class="table__label"></td>
				<td class="table__label" v-for="(participant, key) in participants" :key="key">
					{{ participant.name }} ({{ participant.level }})
				</td>
			</tr>
			</thead>

			<tbody>
				<tr v-for="(task, key) in requirement.requirements" :key="key" :class="(maxLevel < task.diploma) ? 'no-print' : ''">
					<td class="table__label">{{ task.name }}</td>
					<td :class="'table__cell table__cell--' + (task.diploma > participant.level ? 'noreq' : 'req')"
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
.table {
	border-collapse: collapse;
	font-size: $font-size;

	td {
		border: 1px solid $colour-border;
		padding: 5px 8px;
		min-width: 70px;

		text-align: center;
	}

	&__label {
		color: $colour-foreground;
		background: $colour-box;
		text-transform: capitalize;
	}

	&__cell {
		&--req {
			background: $colour-foreground;
		}

		&--noreq {
			background-image: url("../../../images/unavailable.gif");
		}
	}
}

@media print {
	.table {
		td {
			border-color: $colour-border-print;
		}

		&__label {
			color: $colour-foreground-print;
			background: $colour-box-print;
		}

		&__cell {
			&--req {
				background: $colour-background-print;
			}

			&--noreq {
				background-image: url("../../../images/unavailable.gif");
			}
		}
	}
}
</style>
