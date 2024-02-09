<script>
import { store } from "../store.js"; //state management
import register from "../debug"; //per debuggare il componente da console
import axios from 'axios'; //importo Axios
import EventCard from "../components/EventCard.vue";

export default {
    name: "EventList",
    components: {
        EventCard
    },
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
            console.log("EventList does things");
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
            <h1 class="text-center py-4">Events</h1>
            <div class="row">
                <EventCard  v-for="evento in store.eventList" :item="evento"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di EventList
</style>