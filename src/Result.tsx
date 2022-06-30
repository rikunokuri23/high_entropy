import { useLocation } from "react-router-dom"

export const Result = () => {
    const location:any = useLocation();
    console.log(location.state.data.results[0].shifts);
    return (
        <>
        <h1>シフト作成結果</h1>
        {/* <p>{String(location.state)}</p> */}
        </>
    )
}