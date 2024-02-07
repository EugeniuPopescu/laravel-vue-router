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
        this.doThings();

        axios.get(this.store.apiEvents + this.store.eventsEndPoint).then(risultato => {
            // if di controllo
            if ( risultato.status === 200 && risultato.data.success) {
                console.log(risultato.data.payload);
            } else {
                // controllare statusCode, presenza e veridicità di data.success
                console.error("qualcosa è andato storto...");
            }
		}).catch(errore => {
			console.error(errore);
		});
    },
    methods: {
        doThings() {
            console.log("EventComponent does things");
        }
    }
}
</script>

<template>
    <div>
        <h1>Sono un componente!</h1>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di EventComponent
</style>