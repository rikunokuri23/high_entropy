import axios from "axios";
import { useEffect, useState } from "react";


type ItemType =  {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    creator: any;
    organizer: any;
    start: {
        dateTime?: string;
        date?: string;
    };
    end: {
        dateTime?: string;
        date?: string;
    };
    transparency: string;
    iCalUID: string;
    sequence: Number;
    reminders: any;
    eventType: string;
}

type EventsType = {
    kind: string;
    etag: string;
    summary: string;
    description: string;
    updated: string;
    timeZone: string;
    accessRole: string;
    defaultReminders: any;
    nextSyncToken: string;
    items: Array<ItemType>;
}
type CalendarEventsType = {
    title: string;
    start: string;
    end: string;
}

async function getCalendarEvents() {
    const response = await axios.get<EventsType>(
        "http://high-entropy.australiaeast.cloudapp.azure.com:8080/get_calendar"
    );
    const calendarEvents = response.data.items.map((resp) => {
        if (resp.start.dateTime && resp.end.dateTime) {
            return Promise.resolve({
                title: resp.summary,
                start: resp.start.dateTime,
                end: resp.end.dateTime,
            })
        } else if (resp.start.date && resp.end.date) {
            return Promise.resolve({
                title: resp.summary,
                start: resp.start.date,
                end: resp.end.date,
            })
        }
        
    })
    // console.log(calendarEvents);
    return calendarEvents;
}

export const Calendar = () => {
    const [calendarDatas,setCalendarDatas] = useState<CalendarEventsType[]>([{title:"aaa", start:"bbb",end:"ccc"}]);
    // let calecndarDatas: Array<CalendarEventsType>;
    useEffect(()=>{
        // let calendarDatas = getCalendarEvents();
        axios.get<EventsType>(
            "http://high-entropy.australiaeast.cloudapp.azure.com:8080/get_calendar"
        ).then(
            (res) => {
                const dataArray: any = res.data.items.map((resp) => {
                    if (resp.start.dateTime && resp.end.dateTime) {
                        return {
                            title: resp.summary,
                            start: String(resp.start.dateTime),
                            end: String(resp.end.dateTime),
                        }
                    } else if (resp.start.date && resp.end.date) {
                        return {
                            title: resp.summary,
                            start: String(resp.start.date),
                            end: String(resp.end.date),
                        }
                    }
                    
                });
                setCalendarDatas(dataArray);
            }
        );
    },[]);
    console.log(calendarDatas);
    console.log(typeof Object.values(calendarDatas));
    let eventGuide = 0;
    const createEventId = () => String(eventGuide++);
    const initial =  calendarDatas.map((data)=>{
        return {
            id:createEventId(),
            title: data.title,
            start: data.start,
            end: data.end,
        }
    })
    console.log("initial", initial)
    return (
        <>
        <h1>カレンダー</h1>
        </>
    )
}