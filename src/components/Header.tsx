import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { BsPersonCircle } from 'react-icons/bs'

export const Header = () => {
    return (
        <header className="header" style={headerStyle}>
            <h3 style={titleStyle}>シフトる</h3>
            <ul style={ulStyle}>
            <li style={liStyle}><Link to="/" style={linkStyle}>シフト作成</Link></li>
            <li style={liStyle}><Link to="/arbeitsetting" style={linkStyle}>アルバイト設定</Link></li>
            <li style={liStyle}><Link to="/calendar" style={linkStyle}>Calendar</Link></li>
            <li>
            <IconContext.Provider value={{style: iconStyle}}><BsPersonCircle /></IconContext.Provider>
            </li>
            </ul>
        </header>
    )
}

const headerStyle = {
    padding: "6px 0px",
    backgroundColor: "#B2DFDB",
    display:"flex",
    alignItems:"center",
    marginBottom: "0px"
}
const titleStyle = {
    color: "#000",
    fontSize: "48px",
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
    fontSize: "20px",
    fontWeight: "400",
    marginRight:"30px",
    marginLeft:"30px",
    textDecoration:"none"
}

const iconStyle = {
    fontSize: "40px",
    marginRight:"30px",
    marginLeft:"30px"
}