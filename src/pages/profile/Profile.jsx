import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
            <div className="profileRightTop">

              <div className="profileCover">
                <img className="profileCoverImg" src="assets/maple/wu3.jpg" alt="" />
                <img className="profileUserImg" src="assets/maple/wu2.jpg" alt="" />
              </div>

              <div className="profileInfo">
                  <h4 className="profileInfoName">Nemo</h4>
                  <span className="profileInfoDesc">Hong</span>
              </div>
            </div>

            <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
            </div>

          </div>
        </div>

    </>
  )
}
