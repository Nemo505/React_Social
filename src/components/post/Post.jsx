import "./post.css"
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";
import { Users } from "../../dummyData";

export default function Post({post}) {


  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u) => u.id === parseInt(post?.userId))[0].profilePicture} alt="" />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === parseInt(post?.userId))[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className ="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                   <ThumbUp htmlColor="blue" className="likeIcon"/>
                   <Favorite htmlColor="red" className="likeIcon"/>
                   <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
