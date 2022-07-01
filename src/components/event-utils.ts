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

export const shiftResponse:any = {data:{
    results:{0: {
        length: 9,
        salary: 50000,
        shifts: [
            {
                break_time: 1,
                end_time: "Sat, 02 Jul 2022 11:00:00 GMT",
                name: "牛角新宿店",
                period: {
                    from: "2022-07-02T13:00:00+0900",
                    to: "2022-07-02T20:00:00+0900"
                },
                salary: 7800,
                start_time: "Sat, 02 Jul 2022 04:00:00 GMT",
                transportation_expenses: 0,
                work_time: 6
            },
            {
                break_time: 0,
                end_time: "Sun, 03 Jul 2022 07:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-03T11:00:00+0900",
                    to: "2022-07-03T16:00:00+0900"
                },
                salary: 5250,
                start_time: "Sun, 03 Jul 2022 02:00:00 GMT",
                transportation_expenses: 398,
                work_time: 5
            },
            {
                break_time: 0,
                end_time: "Mon, 04 Jul 2022 08:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-04T12:00:00+0900",
                    to: "2022-07-04T17:00:00+0900"
                },
                salary: 5250,
                start_time: "Mon, 04 Jul 2022 03:00:00 GMT",
                transportation_expenses: 398,
                work_time: 5
            },
            {
                break_time: 0,
                end_time: "Thu, 07 Jul 2022 08:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-07T14:00:00+0900",
                    to: "2022-07-07T17:00:00+0900"
                },
                salary: 3150,
                start_time: "Thu, 07 Jul 2022 05:00:00 GMT",
                transportation_expenses: 398,
                work_time: 3
            },
            {
                break_time: 0,
                end_time: "Sat, 09 Jul 2022 09:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-09T12:00:00+0900",
                    to: "2022-07-09T18:00:00+0900"
                },
                salary: 6300,
                start_time: "Sat, 09 Jul 2022 03:00:00 GMT",
                transportation_expenses: 398,
                work_time: 6
            },
            {
                break_time: 0,
                end_time: "Mon, 11 Jul 2022 12:00:00 GMT",
                name: "牛角新宿店",
                period: {
                    from: "2022-07-11T16:00:00+0900",
                    to: "2022-07-11T21:00:00+0900"
                },
                salary: 6500,
                start_time: "Mon, 11 Jul 2022 07:00:00 GMT",
                transportation_expenses: 0,
                work_time: 5
            },
            {
                break_time: 1,
                end_time: "Thu, 21 Jul 2022 12:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-21T14:00:00+0900",
                    to: "2022-07-21T21:00:00+0900"
                },
                salary: 6300,
                start_time: "Thu, 21 Jul 2022 05:00:00 GMT",
                transportation_expenses: 398,
                work_time: 6
            },
            {
                break_time: 0,
                end_time: "Fri, 22 Jul 2022 13:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-22T19:00:00+0900",
                    to: "2022-07-22T22:00:00+0900"
                },
                salary: 3150,
                start_time: "Fri, 22 Jul 2022 10:00:00 GMT",
                transportation_expenses: 398,
                work_time: 3
            },
            {
                break_time: 1,
                end_time: "Mon, 25 Jul 2022 13:00:00 GMT",
                name: "海鮮三崎港成増店",
                period: {
                    from: "2022-07-25T15:00:00+0900",
                    to: "2022-07-25T22:00:00+0900"
                },
                salary: 6300,
                start_time: "Mon, 25 Jul 2022 06:00:00 GMT",
                transportation_expenses: 398,
                work_time: 6
            }
        ]
    }},
    params: {
        expected_day_per_week: 2,
        expected_salary: 50000,
        period: {
            from: "2022-07-01",
            to: "2022-07-31"
        }
    },
    status: 200
}}