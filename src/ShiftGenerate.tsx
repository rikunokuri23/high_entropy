import { useNavigate } from "react-router-dom"

export const ShiftGenerate = () => {
    const navigate = useNavigate();
    const onClickGenerate = () => {
        navigate("/result")
    }
    return (
        <>
        <h1>シフト作成</h1>
        <button onClick={onClickGenerate}>作成</button>
        </>
    )
}