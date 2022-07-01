import { useState }  from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { shiftResponse } from "./event-utils";

export const ShiftGenerateFormMUI = () => {
  const navigate = useNavigate();

  // state here
  const [age, setAge] = useState("");
  const [wantYear, setWantYear] = useState(new Date().getFullYear());
  const [wantMonth, setWantMonth] = useState(new Date().getMonth() + 1);

  const [startYear, setStartYear] = useState(new Date().getFullYear());
  const [startMonth, setStartMonth] = useState(new Date().getMonth() + 1);
  const [startDay, setStartDay] = useState(new Date().getDate());

  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [endMonth, setEndMonth] = useState(new Date().getMonth() + 1);
  const [endDay, setEndDay] = useState(new Date().getDate());

  const [wantSalary, setWantSalary] = useState(50000);


  // onChangeの引数 => selectXXXX
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const selectWantYear = (e: any) => {
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
  const selectWantSalary = (e:any) => {
    setWantSalary(Number(e.target.value));
  };

  // 選択するitem => setXXXXX
  const setYear = () => {
    let list: Array<Number> = [];
    for (let i = 2022; i <= new Date().getFullYear() + 5; i++) {
      list.push(i);
    }
    return list;
  };
  const setMonth = () => {
    let list: Array<any> = [];
    for (let i = 1; i <= 12; i++) {
      list.push(i);
    }
    return list;
  };
  const setDay = () => {
    let list: Array<any> = [];
    const lastday = new Date(Number(wantYear), Number(wantMonth), 0).getDate();
    for (let i = 1; i <= lastday; i++) {
      list.push(i);
    }
    return list;
  };

  const setSalary = () => {
    let list: Array<any> = [];
    for (let i = 1; i <= 100; i++) {
      list.push(i * 1000);
    }
    return list;
  };
  console.log(wantYear);

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
    // const calcResult = shiftResponse;
    // navigate("/result",{ state: calcResult });
  }

    const formatDate = (year:number,month:number,day:number) => {
      const formatMonth = ("00" + String(month)).slice(-2);
      const formatDay = ("00" + String(day)).slice(-2);
      return `${year}-${formatMonth}-${formatDay}`
    };
    const onClickCreate = () => {
      // console.log(wantYear, wantMonth);
      // console.log(startYear, startMonth, startDay);
      // console.log(endYear, endMonth, endDay);
      // console.log(wantSalary);
      const request = {
          "expected_salary": wantSalary,
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
    <>
      <div style={{backgroundColor:"#fff",marginBottom:"20px",marginLeft:"20px",marginRight:"20px",paddingBottom:"10px",minHeight:"100%"}}>
        <h2 style={{marginTop:"0px",marginLeft:"30px",marginBottom:"0px",padding:"10px 10px"}}>{`${wantYear}年${wantMonth}月`}</h2>
        <div style={{backgroundColor:"#F4F4F4",margin:"0px 30px", padding:"20px 0px",borderRadius:"10px"}}>
        <div style={{paddingBottom:"10px"}}>
          <p style={{ display: "inline-block", fontSize: "20px",width:"150px",paddingLeft:"20px" }}>指定月</p>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <Select
            value={wantYear}
            onChange={selectWantYear}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setYear().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>年</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            value={wantMonth}
            onChange={selectWantMonth}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setMonth().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>月</p>
      </div>
      <div style={{paddingBottom:"10px"}}>
      <p style={{ display: "inline-block", fontSize: "20px",width:"150px",paddingLeft:"20px" }}>指定期間</p>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <Select
            value={startYear}
            onChange={selectStartYear}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setYear().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>年</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            value={startMonth}
            onChange={selectStartMonth}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setMonth().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>月</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            value={startDay}
            onChange={selectStartDay}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setDay().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>日</p>
        <p
          style={{
            display: "inline-block",
            fontSize: "20px",
            marginLeft: "20px",
            marginRight: "20px"
          }}
        >
          ~
        </p>

        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <Select
            value={endYear}
            onChange={selectEndYear}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setYear().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>年</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            value={endMonth}
            onChange={selectEndMonth}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setMonth().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>月</p>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            value={endDay}
            onChange={selectEndDay}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setDay().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px" }}>日</p>
        </div>
        <p style={{ display: "inline-block", fontSize: "20px" ,width:"150px",paddingLeft:"20px"}}>希望給与額</p>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <Select
            value={wantSalary}
            onChange={selectWantSalary}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {setSalary().map((x) => {
              return <MenuItem value={x.toString()}>{String(x)}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <p style={{ display: "inline-block", fontSize: "20px"}}>円</p>
        {/* <button onClick={onClickGenerate} style={{
            backgroundColor: "#ffb74d",
            width: "200px",
            border: "none",
            padding: "5px 8px",
            borderRadius: "5px"
          }}>シフト作成</button> */}
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      <button onClick={onClickCreate} style={{
            backgroundColor: "#ffb74d",
            width: "200px",
            border: "none",
            padding: "5px 8px",
            borderRadius: "5px",
            marginTop: "20px",
            fontSize:"25px"
          }}>シフト作成</button>
      </div>
      </div>
    </>
  );
}
