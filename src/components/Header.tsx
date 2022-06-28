import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="header" style={headerStyle}>
            <h3 style={titleStyle}>シフト自動作成</h3>
            {/* <Link to="/" style={linkStyle}>シフト作成</Link> */}
            {/* <Link to="/arbeitsetting">アルバイト設定</Link> */}
            {/* <Link to="/calendar">Calendar</Link> */}
            <ul style={ ulStyle}>
            <li style={liStyle}><Link to="/" style={linkStyle}>シフト作成</Link></li>
            <li style={liStyle}><Link to="/arbeitsetting" style={linkStyle}>アルバイト設定</Link></li>
            <li style={liStyle}><Link to="/calendar" style={linkStyle}>Calendar</Link></li>
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

const linkStyle = {
    color: "#555",
    marginRight:"30px",
    marginLeft:"30px",
    textDecoration:"none"
}