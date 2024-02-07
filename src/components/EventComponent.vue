<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import axios from 'axios'; //importo Axios

export default {
    name: "EventComponent",
    data() {
        return {
            store
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.getEventList();

    },
    methods: {
        getEventList() {
            console.log("EventComponent does things");
            axios.get(this.store.apiEvents + this.store.eventsEndPoint).then(risultato => {
                // if di controllo
                if ( risultato.status === 200 && risultato.data.success) {
                    console.log(risultato.data.payload);
                    this.store.eventList = risultato.data.payload;
                } else {
                    // controllare statusCode, presenza e veridicità di data.success
                    console.error("qualcosa è andato storto...");
                }
            }).catch(errore => {
                console.error(errore);
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <div>
            <h1 class="text-center fw-bold text-info">Events</h1>
            <div class="row">
                <div class="col-4" v-for="event in this.store.eventList">
                    <!-- event card -->
                    <div class="card my-3" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{ event.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{{ event.user.name }}</h6>
                            <p class="card-text">Available Tickets: {{ event.available_tickets }}</p>
                            <p class="card-text">Date: {{ event.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di EventComponent
</style>