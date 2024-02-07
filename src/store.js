import { reactive } from "vue";

export const store = reactive({
  chiave: "valore",
  eventList: [],
  apiEvents: "http://127.0.0.1:8000/api/",
  eventsEndPoint: "events",
});
