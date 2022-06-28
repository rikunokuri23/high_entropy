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

interface part_time_jobs {
    job: [job],
    status: number
}

async function getArbeits(): Promise<part_time_jobs> {
        const response = await axios.get<part_time_jobs>(
            "http://20.5.121.159:5000/api/v1/part_time_jobs/"
        );
        console.log("response")
        console.log(response.data);
        return response.data;
}

export const ArbeitSetting = () => {
    const [arbeits, setArbeits] = useState<[] |part_time_jobs>([]);

    useEffect(() => {
        (async () => {
            const arbeits = await getArbeits();
            setArbeits(arbeits);
        })();
    }, []);
    return (
        <>
            <h1>アルバイト設定</h1>
        </>
    )
}