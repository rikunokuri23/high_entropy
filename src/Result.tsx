import { useLocation, useNavigate } from "react-router-dom"
import { createEventId } from "./components/event-utils";

export const Result = () => {
    const location:any = useLocation();
    const navigate = useNavigate();

    // const location:any = {data:{
    //     result:{0: {
    //         length: 9,
    //         salary: 50000,
    //         shifts: [
    //             {
    //                 break_time: 1,
    //                 end_time: "Sat, 02 Jul 2022 11:00:00 GMT",
    //                 name: "牛角新宿店",
    //                 period: {
    //                     from: "2022-07-02T13:00:00+0900",
    //                     to: "2022-07-02T20:00:00+0900"
    //                 },
    //                 salary: 7800,
    //                 start_time: "Sat, 02 Jul 2022 04:00:00 GMT",
    //                 transportation_expenses: 0,
    //                 work_time: 6
    //             },
    //             {
    //                 break_time: 0,
    //                 end_time: "Sun, 03 Jul 2022 07:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-03T11:00:00+0900",
    //                     to: "2022-07-03T16:00:00+0900"
    //                 },
    //                 salary: 5250,
    //                 start_time: "Sun, 03 Jul 2022 02:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 5
    //             },
    //             {
    //                 break_time: 0,
    //                 end_time: "Mon, 04 Jul 2022 08:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-04T12:00:00+0900",
    //                     to: "2022-07-04T17:00:00+0900"
    //                 },
    //                 salary: 5250,
    //                 start_time: "Mon, 04 Jul 2022 03:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 5
    //             },
    //             {
    //                 break_time: 0,
    //                 end_time: "Thu, 07 Jul 2022 08:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-07T14:00:00+0900",
    //                     to: "2022-07-07T17:00:00+0900"
    //                 },
    //                 salary: 3150,
    //                 start_time: "Thu, 07 Jul 2022 05:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 3
    //             },
    //             {
    //                 break_time: 0,
    //                 end_time: "Sat, 09 Jul 2022 09:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-09T12:00:00+0900",
    //                     to: "2022-07-09T18:00:00+0900"
    //                 },
    //                 salary: 6300,
    //                 start_time: "Sat, 09 Jul 2022 03:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 6
    //             },
    //             {
    //                 break_time: 0,
    //                 end_time: "Mon, 11 Jul 2022 12:00:00 GMT",
    //                 name: "牛角新宿店",
    //                 period: {
    //                     from: "2022-07-11T16:00:00+0900",
    //                     to: "2022-07-11T21:00:00+0900"
    //                 },
    //                 salary: 6500,
    //                 start_time: "Mon, 11 Jul 2022 07:00:00 GMT",
    //                 transportation_expenses: 0,
    //                 work_time: 5
    //             },
    //             {
    //                 break_time: 1,
    //                 end_time: "Thu, 21 Jul 2022 12:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-21T14:00:00+0900",
    //                     to: "2022-07-21T21:00:00+0900"
    //                 },
    //                 salary: 6300,
    //                 start_time: "Thu, 21 Jul 2022 05:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 6
    //             },
    //             {
    //                 break_time: 0,
    //                 end_time: "Fri, 22 Jul 2022 13:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-22T19:00:00+0900",
    //                     to: "2022-07-22T22:00:00+0900"
    //                 },
    //                 salary: 3150,
    //                 start_time: "Fri, 22 Jul 2022 10:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 3
    //             },
    //             {
    //                 break_time: 1,
    //                 end_time: "Mon, 25 Jul 2022 13:00:00 GMT",
    //                 name: "海鮮三崎港成増店",
    //                 period: {
    //                     from: "2022-07-25T15:00:00+0900",
    //                     to: "2022-07-25T22:00:00+0900"
    //                 },
    //                 salary: 6300,
    //                 start_time: "Mon, 25 Jul 2022 06:00:00 GMT",
    //                 transportation_expenses: 398,
    //                 work_time: 6
    //             }
    //         ]
    //     }}
    // }}

    console.log("locations",location.state.data.results[0].shifts);
    // console.log(location2.data.results.shift.shifts);
    // console.log(location.data.result[0].shifts);
    // console.log(location.data)
    const shiftResult:Array<any> = location.state.data.results[0].shifts;
    let totalWorkTime = 0;
    shiftResult.map((shift) => {
        totalWorkTime += shift.work_time;
    })
    const createDate = new Date(shiftResult[0].period.from);
    // const trBackgoundColorAyrray:Array<string> = ["#ddd","#fff"];
    let trIterate:number = 0;
    const addTrIterate = () => trIterate++;
    
    const shiftForCalendar = shiftResult.map((shift)=>{
        return {
            id: createEventId(),
            title: shift.name,
            start: shift.period.from,
            end: shift.period.to,
            color:"#ff7f50"
        }
    })

    const onClickApply = () => {
        navigate("/calendar",{state: shiftForCalendar})
    }

    return (
        <>
        <div style={{backgroundColor:"#F4F4F4",margin:"0",paddingBottom:"40px",height:"100vh"}}>
        <h1 style={{margin:"0px 20px",padding:"10px 10px", color:"#23221F"}}>シフト作成結果</h1>
        <div style={{backgroundColor:"#fff",marginBottom:"20px",marginLeft:"20px",marginRight:"20px",paddingBottom:"10px",minHeight:"100%"}}>
            <h2 style={{marginTop:"0px",marginLeft:"30px",marginBottom:"0px",padding:"15px 10px",color:"#23221F"}}>{`${createDate.getFullYear()}年${createDate.getMonth()+1}月`}</h2>
            <div style={{backgroundColor:"#F4F4F4",margin:"0px 20px",padding:"10px",borderRadius:"10px",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                <p style={{fontSize:"20px"}}>{`給与額　　${location.state.data.results[0].salary}円`}</p>
                <p style={{fontSize:"20px"}}>{`勤務日数　　${location.state.data.results[0].length}日`}</p>
                <p style={{fontSize:"20px"}}>{`勤務時間　　${totalWorkTime}時間`}</p>
            </div>
            <div style={{margin:"30px 20px",padding:"20px 20px",border:"1px solid black",borderRadius:"10px"}}>
            <button style={{padding:"5px 20px",borderRadius:"1000px",backgroundColor:"#F4F4F4",border:"2px solid #ddd"}}>全て</button>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"10px"}}>
            <table style={{borderCollapse:"collapse",width:"100%"}}>
            <tbody id="shiftResult">
            <tr>
                    <td>日付</td>
                    <td style={{textAlign:"center"}}>アルバイト名</td>
                    <td>開始時刻</td>
                    <td>終了時刻</td>
                    <td>休憩時間</td>
                    <td>勤務時間</td>
                    <td>日給</td>
                </tr>
            {shiftResult.map((shift)=>{
                const shiftDate = new Date(shift.period.from);
                console.log(shiftDate);
                if (trIterate % 2 === 0) {
                    addTrIterate();
                    return <tr style={{backgroundColor:"#ddd",fontSize:"20px"}}>
                        <td>{`${('0' +(shiftDate.getMonth()+1)).slice(-2)}/${('0' + shiftDate.getDate()).slice(-2)}(${shift.start_time.slice(0,3)})`}</td>
                        <td style={{textAlign:"center"}}>{shift.name}</td>
                        <td>{`${shift.period.from.slice(11,16)}`}</td>
                        <td>{`${shift.period.to.slice(11,16)}`}</td>
                        <td>{`${shift.break_time}:00`}</td>
                        <td>{`${shift.work_time}:00`}</td>
                        <td>{`${Math.floor(shift.salary / 1000)},${shift.salary % 1000}`}</td>
                        </tr>
                } else {
                    addTrIterate();
                    return <tr style={{backgroundColor:"#fff",fontSize:"20px"}}>
                        <td>{`${('0' +(shiftDate.getMonth()+1)).slice(-2)}/${('0' + shiftDate.getDate()).slice(-2)}(${shift.start_time.slice(0,3)})`}</td>
                        <td style={{textAlign:"center"}}>{shift.name}</td>
                        <td>{`${shift.period.from.slice(11,16)}`}</td>
                        <td>{`${shift.period.to.slice(11,16)}`}</td>
                        <td>{`${shift.break_time}:00`}</td>
                        <td>{`${shift.work_time}:00`}</td>
                        <td>{`${Math.floor(shift.salary / 1000)},${shift.salary % 1000}`}</td>
                        </tr>
                }
        })}
            </tbody>
        </table>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"right"}}>
                <button onClick={onClickApply} style={{
                    backgroundColor: "#ffb74d",
                    width: "100px",
                    border: "none",
                    padding: "5px 8px",
                    borderRadius: "5px",
                    marginTop: "20px",
                    fontSize:"20px"
                    }}>適用</button>
        </div>
            </div>
        
        </div>
        </div>
        </>
    )
}