import "./post.css"

export const Post = () => {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://images.unsplash.com/photo-1582215669338-6cfdb76bca45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" 
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <sapn className="postCat">Music</sapn>
                    <sapn className="postCat">Life</sapn>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quasi impedit quod dolore, qui aut error obcaecati recusandae, enim ea nemo harum alias totam. Eius dolores recusandae ducimus vitae libero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse laborum est aliquam quaerat in ipsa provident officia, adipisci, et doloribus illum atque quae illo. Velit nihil voluptatibus sed impedit!
            </p>
        </div>
    )
}
