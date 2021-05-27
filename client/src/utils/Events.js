let eventGuid = 0

export const INITIAL_EVENTS = [
  {
    title: "Food Drive",
    date: "2021-05-28",
    start: "2021-05-28T09:00:00",
    end: "2021-05-28T11:00:00",
    volunteersNeeded: 12,
  },
  {
    title: "Clothing Drive",
    date: "2021-05-29",
    start: "2021-05-29T09:00:00",
    end: "2021-05-29T11:00:00",
    volunteersNeeded: 10,
  },
  {
    title: "Cook",
    date: "2021-05-29",
    start: "2021-05-29T09:00:00",
    end: "2021-05-27T11:00:00",
    volunteersNeeded: 3,
  },
  {
    title: "Blanket Drive",
    date: "2021-05-30",
    start: "2021-05-30T09:00:00",
    end: "2021-05-30T11:00:00",
    volunteersNeeded: 12,
    // //2019-09-05T09:00:00
  },
  {
    title: "Food Drive",
    date: "2021-05-27",
    start: "2021-05-27T09:00:00",
    end: "2021-05-27T11:00:00",
    volunteersNeeded: 12,
  },
];

export function createEventId() {
  return String(eventGuid++)
}
