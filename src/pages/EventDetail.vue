<script>
import { store } from "../store.js" //state management


export default {
	name: "EventDetail",
	props: ["id"],
	data() {
		return {
			store,
			event: null,
		}
	},
	mounted() {
		this.event = this.store.eventList.find(item => item.id == this.id);
	},
	methods: {
		
	}
}
</script>

<template>
	<div class="container">
		<div class="row">
			<h1>Event Name: {{ event?.name }}</h1>
			<h2>User Organizator: {{ event?.user.name }}</h2>
		</div>
	</div>
	
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