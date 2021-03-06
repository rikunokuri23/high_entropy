import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   Select,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
//   makeStyles
// } from "@material-ui/core";

export const ShiftGenerateFrom = () => {
    const navigate = useNavigate();
  const [wantYear, setWantYear] = useState(new Date().getFullYear());
  const [wantMonth, setWantMonth] = useState(new Date().getMonth() + 1);

  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [startMonth, setStartMonth] = useState(new Date().getMonth() + 1);
  const [startDay, setStartDay] = useState(new Date().getDate());

  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [endMonth, setEndMonth] = useState(new Date().getMonth() + 1);
  const [endDay, setEndDay] = useState(new Date().getDate());

  const [wantWedge, setWantWedge] = useState(50000);
  const selectWantYear = (e:any) => {
    setWantYear(Number(e.target.value));
  };
  const selectWantMonth = (e:any) => {
    setWantMonth(Number(e.target.value));
  };

  const selectStartYear = (e:any) => {
    setStartYear(Number(e.target.value));
  };
  const selectStartMonth = (e:any) => {
    setStartMonth(Number(e.target.value));
  };
  const selectStartDay = (e:any) => {
    setStartDay(Number(e.target.value));
  };

  const selectEndYear = (e:any) => {
    setEndYear(Number(e.target.value));
  };
  const selectEndMonth = (e:any) => {
    setEndMonth(Number(e.target.value));
  };
  const selectEndDay = (e:any) => {
    setEndDay(Number(e.target.value));
  };
  const selectWantWedge = (e:any) => {
    setWantWedge(Number(e.target.value));
  };
  const setYear = () => {
    let list: Array<any> = [];
    for (let i = 2022; i <= new Date().getFullYear()+5; i++) {
      list.push(
        <option key={`year_${i}`} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };
  const setMonth = () => {
    let list: Array<any> = [];
    for (let i = 1; i <= 12; i++) {
      list.push(
        <option key={`month_${i}`} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };
  const setDay = () => {
    let list: Array<any> = [];
    const lastday = new Date(Number(wantYear), Number(wantMonth), 0).getDate();
    for (let i = 1; i <= lastday; i++) {
      list.push(
        <option key={`day_${i}`} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };

  const setWedge = () => {
    let list: Array<any> = [];
    for (let i = 1; i <= 100; i++) {
      list.push(
        <option key={`wedge_${i * 1000}`} value={i * 1000}>
          {i * 1000}
        </option>
      );
    }
    return list;
  };

  const formatDate = (year:number,month:number,day:number) => {
    const formatMonth = ("00" + String(month)).slice(-2);
    const formatDay = ("00" + String(day)).slice(-2);
    return `${year}-${formatMonth}-${formatDay}`
  };
  const onClickCreate = () => {
    console.log(wantYear, wantMonth);
    console.log(startYear, startMonth, startDay);
    console.log(endYear, endMonth, endDay);
    console.log(wantWedge);
    const request = {
        "expected_salary": wantWedge,
        "period": {
            "from": formatDate(startYear,startMonth,startDay),
            "to": formatDate(endYear,endMonth,endDay),
        }
    }
    console.log(request)
    axios.post("http://20.5.121.159:5000/api/v1/shifts/create",request
        ).then((res) => {
            navigate("/result",{ state: res.data });
        })
  };

  return (
    <div>
      <div>
        <form>
          <div className="inputCantainer">
            <div className="wantMonth">
              <select
                // native
                value={wantYear}
                onChange={selectWantYear}
                id="want-year"
                name="year"
              >
                {setYear()}
              </select>
              ???
              <select
                // native
                value={wantMonth}
                onChange={selectWantMonth}
                id="want-month"
                name="month"
              >
                {setMonth()}
              </select>
              ???
            </div>
            <div className="startEnd">
              <select
                // native
                value={startYear}
                onChange={selectStartYear}
                id="start-year"
                name="year"
              >
                {setYear()}
              </select>
              ???
              <select
                // native
                value={startMonth}
                onChange={selectStartMonth}
                id="start-month"
                name="month"
              >
                {setMonth()}
              </select>
              ???
              <select
                // native
                value={startDay}
                onChange={selectStartDay}
                id="start-day"
                name="day"
              >
                {setDay()}
              </select>
              ??? ??????
              <select
                // native
                value={endYear}
                onChange={selectEndYear}
                id="end-year"
                name="year"
              >
                {setYear()}
              </select>
              ???
              <select
                // native
                value={endMonth}
                onChange={selectEndMonth}
                id="end-month"
                name="month"
              >
                {setMonth()}
              </select>
              ???
              <select
                // native
                value={endDay}
                onChange={selectEndDay}
                id="end-day"
                name="day"
              >
                {setDay()}
              </select>
              ???
            </div>
            <select
              // native
              value={wantWedge}
              onChange={selectWantWedge}
              id="wantWedge"
              name="wedge"
            >
              {setWedge()}
            </select>
            ???
            <br />
          </div>
          {/* <input
            type="submit"
            value="???????????????"
            style={{
              backgroundColor: "#ffb74d",
              width: "200px",
              border: "none",
              padding: "5px 8px"
            }}
          /> */}
          <br />
        </form>
        <button onClick={onClickCreate}
        style={{
            backgroundColor: "#ffb74d",
            width: "200px",
            border: "none",
            padding: "5px 8px",
            borderRadius: "5px"
          }}>???????????????</button>
      </div>
    </div>
  );
};
