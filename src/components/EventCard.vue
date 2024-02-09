<script>
export default {
    name: "EventCard",
    props: ["item"]
}
</script>

<template>
    <div class="col-4">
        <!-- item card -->
        <div class="card my-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ item.user ? item.user.name : "User Unknown" }}</h6>
                <p class="card-text">Available Tickets: {{ item.available_tickets }}</p>
                <p class="card-text">Date: {{ item.date }}</p>
            </div>

            <div class="card-footer text-center">
                <router-link :to="{ name: 'Event-detail', params: { id: item.id } }" class="btn btn-success">
                    <span>Dettail</span>
                </router-link>
            </div>
        </div>
    </div>
</template>