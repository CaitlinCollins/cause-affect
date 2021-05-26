
import API from "./API";

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today



function loadEvents() {
  API.getEvents()
    .then(res => {
      return(res.data);
    }
    )
    .catch(err => console.log(err))
};

export const API_EVENTS = loadEvents();
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
