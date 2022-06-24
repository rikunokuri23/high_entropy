export const Header = () => {
    return (
        <header className="header" style={headerStyle}>
            <h3 style={titleStyle}>シフト自動作成</h3>
            <ul style={ ulStyle}>
            <li style={liStyle}>シフト作成</li>
            <li style={liStyle}>アルバイト設定</li>
            <li style={liStyle}>Calendar</li>
            </ul>
        </header>
    )
}

const headerStyle = {
    padding: "6px 0px",
    backgroundColor: "#aaa",
    display:"flex",
    alignItems:"center"
}
const titleStyle = {
    color: "#555",
    padding: "0px",
    margin:"0px 10px"

}

const ulStyle = {
    listStyle:"none",
    display: "flex",
    marginLeft:"auto"
}
const liStyle = {
    color: "#555",
    marginRight:"30px",
    marginLeft:"30px"
}