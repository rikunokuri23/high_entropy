import axios from "axios";
import { useEffect, useState } from "react";
import { Calender } from "./components/Calendar";



export const CalendarPase = () => {
    
    return (
        <>
        {/* <h1>カレンダー</h1> */}
        <Calender />
        <p style={{marginLeft:"10px"}}>by FullCalendar</p>
        </>
    )
}