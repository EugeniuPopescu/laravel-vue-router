<script>
import EventComponent from "../components/EventComponent.vue"


export default {
	name: "AppHomePage",
    components: {
		EventComponent
	},
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
	<EventComponent />
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