import { useEffect, useState } from 'react';
import axios from 'axios';

interface work_time {
    start_time: Date,
    end_time: Date
}

interface job {
    created_at: Date,
    enabled_work_time: {
        [day_of_week: string]: [work_time] 
    },
    hourly_wage: number,
    id: string,
    name: string,
    transportation_expenses: number,
}

export const ArbeitSetting = () => {
    const [arbeits, setArbeits] = useState<Array<job>>([]);

    useEffect(() => {
        axios.get("http://20.5.121.159:5000/api/v1/part_time_jobs/").then((res) => {
            setArbeits(res.data.part_time_jobs);
        });
    }, []);
    
    return (
        <>
            <h1>アルバイト設定</h1>
            <ul>
                { arbeits.map((arbeit: job) => {
                    return (
                        <li key={ arbeit.id }>
                            <p>{ arbeit.name }</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}