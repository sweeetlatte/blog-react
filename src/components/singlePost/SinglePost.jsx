import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    className="singlePostImg"
                    src="https://images.unsplash.com/photo-1570451488142-71d08e1511e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                    alt="" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Latte</b></span>
                    <span className="singlePostDate">1 hour ago</span>                   
                </div>
                <p className="singlePostDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque modi, repellat aliquid enim officiis expedita tenetur, officia et iste deleniti doloribus? Dicta suscipit nisi tempora consectetur maxime exercitationem natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur facilis blanditiis nihil, doloremque iste architecto soluta asperiores neque cum veritatis eos quibusdam exercitationem fugiat, tempore veniam corporis iure! Possimus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem dolor saepe quaerat possimus, voluptatem laborum porro aut nisi ea ducimus repellat illum iure deleniti dignissimos quasi recusandae quia totam aperiam.
                    </p>
            </div>
        </div>
    )
}
