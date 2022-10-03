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
              <div className="profileRightBottom">
                <Feed/>
                <Rightbar/>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
