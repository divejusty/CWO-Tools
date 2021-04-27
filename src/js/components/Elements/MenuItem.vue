<template>
	<li @click="$emit('click')"
		class="p-2 interactable">
		<slot></slot>
	</li>
</template>
