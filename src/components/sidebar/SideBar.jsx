import "./sidebar.css"

const SideBar = () => {
    console.log("abc")
    return (
        <>
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About me</span>
                <img 
                    src="https://images.unsplash.com/photo-1514921865419-4e9c1990d06e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis sequi, cupiditate laboriosam ab necessitatibus maxime.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-f"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
        </>
    )
}
export default SideBar