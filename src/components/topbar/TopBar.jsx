import "./topbar.css"
import ava from "../../assets/images/ava.jpg"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-linkedin-in"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className="topImg"
                    src={ava} 
                    alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
