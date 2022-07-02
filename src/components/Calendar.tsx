import FullCalendar, { DateInput, DateSelectArg, EventApi, EventClickArg, EventContentArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; 
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import {  INITIAL_EVENTS,createEventId } from "./event-utils";
import { useCallback, useEffect, useState } from "react";
// import { Sidebar } from "./Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface ItemType  {
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
        date?: string;
        dateTime?: string;
    };
    end: {
        date?: string;
        dateTime?: string;
    };
    transparency: string;
    iCalUID: string;
    sequence: Number;
    reminders: any;
    eventType: string;
};

interface EventsType {
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
};
interface CalendarEventsType {
    title: string;
    start: DateInput;
    end: DateInput;
};



export const Calender = ()=> {
    const [currentEvents,setCurrentEvents] = useState<EventApi[]>([]);
    const handleEvents = useCallback((events: EventApi[]) => setCurrentEvents(events),[]);
    const locationShift:any = useLocation();
    console.log("location",locationShift.state);


    const [data,setData] = useState<CalendarEventsType[]>([]);
    useEffect(()=>{
        axios.get<EventsType>(
          "http://high-entropy.australiaeast.cloudapp.azure.com:8080/get_calendar2"
          ).then(
              (res) => {
                  const dataArray: any = res.data.items.map((resp) => {
                      if (resp.start.dateTime && resp.end.dateTime) {
                          return {
                            id: createEventId(),
                              title: resp.summary,
                              start: resp.start.dateTime,
                              end: resp.end.dateTime,
                          }
                      } else if (resp.start.date && resp.end.date) {
                          return {
                            id: createEventId(),
                              title: resp.summary,
                              start: String(resp.start.date),
                              end: String(resp.start.date),
                          }
                      }
                  });
                //   setData([...dataArray])
                   setData(dataArray.concat([...locationShift.state]))
                 
              }
          );
      },[])
    
    let eventGuide = 0;
    
    let check = 5 > 1;
    // console.log(check, initial[0]);

    console.log(INITIAL_EVENTS);

    const handleDateSelect = useCallback((selectInfo:DateSelectArg)=>{
        let title = prompt("Please enter title")?.trim();
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                // id: createEventId(),
                title,
                start:selectInfo.startStr,
                end:selectInfo.endStr,
                allDay:selectInfo.allDay,
            });
        }
    },[]);
    
    const handleEventClick = useCallback((clickInfo:EventClickArg)=>{
        if ( window.confirm(`このイベント「${clickInfo.event.title}」を削除しますか`)) {
            clickInfo.event.remove();
        }
    },[]);
    const renderEventContent = (eventContent: EventContentArg) => (
        <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
        </>
    );
    
    let afterChange;
    if (currentEvents[0]) {
        afterChange = currentEvents.map((evnt) => {
            return {
                title:evnt._def.title,
                id:evnt._def.publicId,
                start:evnt._instance?.range.start.toISOString(),
                end:evnt._instance?.range.end.toISOString()
            }})
            console.log("after",afterChange);
            let diffStart = Date.parse(String(afterChange[0].start))-Date.parse(String(INITIAL_EVENTS[0].start))
            let diffEnd = Date.parse(String(afterChange[0].end))-Date.parse(String(INITIAL_EVENTS[0].end))
            console.log(diffStart / 1000 / 60 / 60 - 9, diffEnd / 1000 / 60 / 60 - 9);
            console.log(INITIAL_EVENTS[0].start);
    }
    // console.log("concatData",data.concat([...locationShift.state]))
    return (
        <>
        <div className="demo-app" style={{display:"flex",minHeight:"100%"}}>
            {/* <Sidebar /> */}
            <div className="demo-app-main" style={{flexGrow:"1",padding:"1em"}}>
            {(() => {
            if ({check}) 
            return <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            eventContent={renderEventContent}
            selectable={true}
            editable={true}
            selectMirror={true}
            dayMaxEvents={true}
            navLinks={true}
            businessHours={true}
            // initialEvents={loadCalendarEvents()}
            locales={allLocales}
            locale="ja"
            events={data}
            eventsSet={handleEvents}
            select={handleDateSelect}
            eventClick={handleEventClick}
          />
        })()}
            
        
            </div>
            
        </div>
        </>
      );
}