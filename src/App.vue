<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	data() {
		return {
			store,
			menuItems: [
				{
					routeName: "home",
					label: "Home"
				},
				{
					routeName: "shop",
					label: "Shop"
				},
				{
					routeName: "events",
					label: "Events"
				},
			],
		}
	},
	mounted() {
		this.doThings();

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<header class="bg-info">
		<div class="container py-4">
			<h1>
				<div class="row">
					<div v-for="(item, index) in menuItems" :key="index" class="col-4">
						<router-link :to="{name: item.routeName}" class="nav-link">
							{{ item.label }}
						</router-link>
					</div>
				</div>
			</h1>
		</div>
	</header>
	
	<router-view></router-view>
	
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>