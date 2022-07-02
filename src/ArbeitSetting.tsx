import { useEffect, useState } from 'react';
import axios from 'axios';
import Minimize from '@mui/icons-material/Minimize';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

interface work_time {
    start_time: string,
    end_time: string
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
    expected_day_per_week: number
}

export const ArbeitSetting = () => {
    const weekday_en = ["monday", "tuesday", "wednesday", "thursday", "saturday", "friday", "sunday"];
    const weekday_jp = ["月", "火", "水", "木", "金", "土", "日"]
    const [arbeits, setArbeits] = useState<Array<job>>([]);
    const [chenge, setChange] = useState(0);

    function formatdate(date: Date): string {
        return ('00' + date.getHours().toString()).slice(-2) + ":" + ('00' + date.getMinutes().toString()).slice(-2);
    }

    function origlogger(d: any): any {
        console.log(d);
    }

    function updateArbeit(arbeit: job, idx: number) {
        arbeits[idx] = arbeit;
        setArbeits(arbeits);
        setChange(chenge + 1);
    }

    useEffect(() => {
        axios.get("http://20.5.121.159:5000/api/v1/part_time_jobs/").then((res) => {
            setArbeits(res.data.part_time_jobs);
        });
    }, []);
    
    return (
        <>
        <div style={{backgroundColor:"#F4F4F4",margin:"0",paddingBottom:"40px",height:"100vh"}}>
        {/* <Typography sx={{ ml: "5%", fontSize: 30, mt: "1%", mb: "1%" }}>アルバイト設定</Typography> */}
        <h1 style={{margin:"0px 20px",padding:"10px 10px", color:"#23221F"}}>アルバイト設定</h1>
        <div style={{backgroundColor:"#fff",marginBottom:"20px",marginLeft:"20px",marginRight:"20px",paddingTop:"20px",paddingBottom:"10px",minHeight:"100%"}}>
        <Stack spacing = {3} ml="5%" mr="-10%" justifyContent="center">
            { arbeits.map((arbeit: job, idx: number) => {
                return (
                    <Card sx = {{ width: "80%", boxShadow: 10}} key = { arbeit.id }>
                        <CardHeader sx = {{ color: "#FFFFFF", bgcolor:"#646464" }} title={ arbeit.name }/>
                        <Stack spacing = {2} ml="5%" mr="5%">
                            <Typography sx = {{ fontSize: 30 }}>{  }</Typography>
                            <Stack spacing = {3} direction = "row">
                                <Typography sx = {{ fontSize: 30}}>給与額　　　　　</Typography>
                                <Stack spacing = {1} direction = "row">
                                    <Typography sx = {{ fontSize: 30}}>時給</Typography>
                                    <TextField
                                        InputProps = {{
                                            inputMode: 'numeric',
                                            endAdornment: <InputAdornment position="end">円</InputAdornment>
                                        }}
                                        size = "small"
                                        value = {arbeit.hourly_wage}
                                    />
                                </Stack>
                            </Stack>
                            <Stack spacing = {3} direction = "row">
                                <Typography sx = {{ fontSize: 30 }}>勤務日数　　　　</Typography>
                                <Stack spacing = {1} direction = "row">
                                    <Typography sx = {{ fontSize: 30}}>週</Typography>
                                    <TextField
                                        InputProps = {{
                                            inputMode: 'numeric',
                                            endAdornment: <InputAdornment position="end">回</InputAdornment>
                                        }}
                                        size = "small"
                                        value = {arbeit.expected_day_per_week}
                                    />
                                </Stack>
                            </Stack>
                            <Stack spacing = {3}>
                                <LocalizationProvider dateAdapter = {AdapterDateFns} key = {arbeit.id}>
                                { weekday_en.map((day, itr) => {
                                    return (
                                        <>
                                        <Stack spacing = {1} direction = "row">
                                            <Typography sx = {{ fontSize: 30 }}>{
                                                itr ? "　　　　　　　　" : "勤務時間　　　　"
                                            }</Typography>
                                            <Checkbox {...{
                                                inputProps: {
                                                    'aria-label': 'Checkbox demo'
                                                }
                                            }} defaultChecked/>
                                            <Typography sx = {{ fontSize: 30 }}>{ weekday_jp[itr] }</Typography>
                                            <DesktopTimePicker
                                                value = {new Date(Date.parse("2022/07/02 " + arbeit.enabled_work_time[day][0].start_time))}
                                                ampm = {false}
                                                onChange = {(newTime) => {
                                                    arbeit.enabled_work_time[day][0].start_time = formatdate(newTime as Date);
                                                    updateArbeit(arbeit, idx);
                                                }}
                                                renderInput = {(params) =>
                                                    <TextField size = "small" {...params}/>
                                                }
                                            />
                                            <Minimize/>
                                            <DesktopTimePicker
                                                value = {new Date(Date.parse("2022/07/02 " + arbeit.enabled_work_time[day][0].end_time))}
                                                ampm = {false}
                                                onChange = {(newTime) => {
                                                    arbeit.enabled_work_time[day][0].end_time = formatdate(newTime as Date);
                                                    updateArbeit(arbeit, idx);
                                                }}
                                                renderInput = {(params) =>
                                                    <TextField size = "small" {...params}/>
                                                }
                                            />
                                        </Stack>
                                        </>
                                    )
                                })}
                                </LocalizationProvider>
                                <Stack direction = "row">
                                    <Typography sx = {{ fontSize: 30 }}>交通費　　　　　</Typography>
                                    <Typography sx = {{ fontSize: 30}}>片道</Typography>
                                    <TextField
                                        InputProps = {{
                                            inputMode: 'numeric',
                                            endAdornment: <InputAdornment position="end">円</InputAdornment>
                                        }}
                                        size = "small"
                                        value = { arbeit.transportation_expenses }
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Card>
                )
            })}
        </Stack>
        </div>
        </div>
        </>
    )
}