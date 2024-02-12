<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios



export default {
	name: "EventDetail",
	props: ["id"],
	data() {
		return {
			store,
			event: null,
			error: false,
		}
	},
	mounted() {
		// this.event = this.store.eventList.find(item => item.id == this.id);
		this.getEventDetail();
	},
	methods: {
		getEventDetail() {
            let url = this.store.apiEvents + this.store.eventsEndPoint + this.id;

            axios.get(url).then(result => {
                if (result.status === 200) {
                    if (result.data.success) {
                        this.event = result.data.payload;
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
			<div v-if="!event" class="d-flex justify-content-center align-items-center">
			<h1>Loading..</h1>
			</div>
				<div class="row py-3 text-warning">
					<h1>Event Name: {{ event?.name }}</h1>
					<h2>User Organizator: {{ event?.user.name }}</h2>
					<h3>User email: <a href="#">{{ event?.user.email }}</a></h3>
					<h4>Available Tickets: {{ event?.available_tickets }}</h4>
					<h4>Event date: {{ event?.date }}</h4>
					<div class="col-6">
						<span class="mx-1 badge rounded-pill text-bg-success fs-6" v-for="tag in event?.tags">
							#{{tag.name }}
						</span>
					</div>

					<div class="row d-flex justify-content-end">
						<div class="col-2 py-3">
							<router-link :to="{ name: 'Events' }" class="btn btn-info">
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