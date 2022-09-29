import "./post.css"
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/maple/leoWu1.jpg" alt="" />
                    <span className="postUsername">Nemo</span>
                    <span className="postDate">5 minutes ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">How are You? I am into you</span>
                <img className="postImg" src="/assets/maple/wu2.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                   <ThumbUp htmlColor="blue" className="likeIcon"/>
                   <Favorite htmlColor="red" className="likeIcon"/>
                   <span className="postLikeCounter">43 People like</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">9 comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
