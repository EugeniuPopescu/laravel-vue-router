<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios



export default {
	name: "TagDetail",
	props: ["id"],
	data() {
		return {
			store,
			tag: null,
			error: false,
		}
	},
	mounted() {
		// this.tag = this.store.eventList.find(item => item.id == this.id);
		this.getEventDetail();
	},
	methods: {
		getEventDetail() {
            let url = this.store.apiEvents + this.store.tagsEndPoint + this.id;

            axios.get(url).then(result => {
                if (result.status === 200) {
                    if (result.data.success) {
                        this.tag = result.data.payload;
                    } else {
                        console.error("Ops... non siamo in grado di soddisfare la richiesta.");
						this.error = true;
                    }

                } else if (result.status === 301) {
                    console.error("Ops... ciò che cerchi non si trova più qui.");
                } else if (result.status === 400) {
                    console.error("Ops... non riusciamo a comprendere ciò che hai richiesto.");
                } else if (result.status === 404) {
                    console.error("Ops... non riusciamo a trovare ciò che hai richiesto.");
                } else if (result.status === 500) {
                    console.error("Ops... ci scusiamo per l'inconveniente, stiamo spegnendo l'incendio.");
                }
            }).catch(errore => {
                console.error(errore);
				this.$router.push({ name: "Events" }); // redireziona alla lista eventi
            });
        }
	}
}
</script>

<template>
	<div class="container">
		<div v-if="error">
			<h1>Si è verificato un errore</h1>
		</div>
		<div v-else>
			<div v-if="!tag" class="d-flex justify-content-center align-items-center">
			<h1>Loading..</h1>
			</div>
				<div class="py-3">
					<h1 class="badge rounded-pill text-bg-success fs-1">Tag Name: #{{ tag?.name }}</h1>
					<h2>
						Tag Link: <a href=".">{{ tag?.link }}</a>
					</h2>


					<div class="row d-flex justify-content-end">
						<div class="col-2 py-3">
							<router-link :to="{ name: 'Tags' }" class="btn btn-info">
								<span>Go Back</span>
							</router-link>
						</div>
					</div>
				</div>
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