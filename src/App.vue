<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js"; //state management
import AppHeader from './components/AppHeader.vue';


export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            store,
        };
    },
    mounted() {
    },
    methods: {},

}
</script>

<template>
	
	<AppHeader />
	
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