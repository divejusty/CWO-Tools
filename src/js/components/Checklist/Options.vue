<template>
	<div class="options no-print">
		<Subheading>Opties</Subheading>
		<BaseButton class="text" @click="$emit('do-print')">Afdrukken</BaseButton>
		<BaseButton class="text" @click="$emit('do-reset')">Reset alles</BaseButton>
	</div>
</template>
