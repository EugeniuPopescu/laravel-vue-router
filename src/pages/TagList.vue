<script>
import { store } from "../store.js"; //state management
import register from "../debug"; //per debuggare il componente da console
import axios from 'axios'; //importo Axios
import TagCard from "../components/TagCard.vue";

export default {
    name: "TagList",
    components: {
        TagCard
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
            console.log("TagList does things");

            let url = this.store.apiEvents + this.store.tagsEndPoint;

            axios.get(url).then(risultato => {
                // if di controllo
                if (risultato.status === 200) {
                    if (risultato.data.success) {
                        console.log(risultato.data.payload);
                        this.store.eventList = risultato.data.payload;
                    } else {
                        // controllare statusCode, presenza e veridicità di data.success
                        console.error("qualcosa è andato storto...");
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
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <div>
            <h1 class="text-center">Tags</h1>
            <div class="row">
                <TagCard  v-for="tag in store.eventList" :item="tag"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di TagList
</style>