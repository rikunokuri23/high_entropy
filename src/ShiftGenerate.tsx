import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ShiftGenerateFrom } from "./components/ShiftGenerateForm";

    


export const ShiftGenerate = () => {
    const navigate = useNavigate();
    const onClickGenerate = () => {
        axios.post("http://20.5.121.159:5000/api/v1/shifts/create",{  
            "expected_salary": 50000,
            "period": {
                "from": "2022-07-01",
                "to":"2022-07-08"
            }
        }).then((res) => {
            navigate("/result",{ state: res.data });
        })
        
    }
    return (
        <>
        <h1>シフト作成</h1>
        <ShiftGenerateFrom />
        <button onClick={onClickGenerate}>作成</button>
        </>
    )
}