import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/241543367_2704188559881200_3188345803014803352_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AtQz3xhqebEAX-rUP3b&_nc_ht=scontent.fdad1-2.fna&oh=c64d3d851e2527fb0fdc10703091bb7b&oe=616F65DF" 
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Latte"/>
                    <label>Email</label>
                    <input type="email" placeholder="latte@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
