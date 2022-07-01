import { EventInput } from "@fullcalendar/react";

let eventGuide = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, "");

export const createEventId = () => String(eventGuide++);

export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: "Breakfast",
        start: String(todayStr) + "T07:00:00",
        end: String(todayStr) + "T07:30:00",
    },
    {
        id: createEventId(),
        title: "Lunch!!",
        start: todayStr + "T11:00:00",
        end: todayStr + "T12:14:00",
    },
    {
        id: createEventId(),
        title: "Dinner",
        start: todayStr + "T18:00:00",
        end: todayStr + "T19:00:00",
    }
]