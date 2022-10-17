import "./rightbar.css"
import { Cake } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <Cake htmlColor="olive" className="birthdayImg"/>
          <span className="birthdayText">
           <b> LeoWu </b>and <b>Chyu</b> have Birthdays Today.</span>
        </div>

        <img src="" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">OnlineFriend</h4>

        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
        <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoKey">London</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoKey">Prague</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoKey">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/maple/wu3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nemo Chyu</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/maple/wu3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nemo Chyu</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/maple/wu3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nemo Chyu</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/maple/wu3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nemo Chyu</span>
          </div>
        </div>
        </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
