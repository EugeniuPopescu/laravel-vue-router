<script>
import { store } from "../store.js" //state management


export default {
	name: "EventDetail",
	data() {
		return {
			store
		}
	},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<template>
	
	<h1>dettaglio</h1>
	
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use '../styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue

</style>