import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ShiftGenerateFrom } from "./components/ShiftGenerateForm";
import { ShiftGenerateFormMUI } from "./components/ShiftGenerateFormMUI";

    


export const ShiftGenerate = () => {
    const navigate = useNavigate();
    const onClickGenerate = () => {
        // axios.post("http://20.5.121.159:5000/api/v1/shifts/create",{  
        //     "expected_salary": 50000,
        //     "period": {
        //         "from": "2022-07-01",
        //         "to":"2022-07-08"
        //     }
        // }).then((res) => {
        //     navigate("/result",{ state: res.data });
        // })
        navigate("/result");
        
    }
    return (
        <>
        <div style={{backgroundColor:"#F4F4F4",margin:"0",paddingBottom:"40px",height:"80vh"}}>
        <h1 style={{margin:"0px 20px",padding:"10px 10px", color:"#23221F"}}>シフト作成</h1>
        <ShiftGenerateFormMUI />
        {/* <ShiftGenerateFrom /> */}
        <button onClick={onClickGenerate}>test</button>
        
        </div>
        </>
    )
}