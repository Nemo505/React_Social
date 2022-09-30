import "./rightbar.css"
import { Cake } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <Cake htmlColor="olive" className="birthdayImg"/>
          <span className="birthdayText">
           <b> LeoWu </b>and <b>Chyu</b> have Birthdays Today.</span>
        </div>

        <img src="assets/maple/wu3.jpg" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">OnlineFriend</h4>

        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>

      </div>
    </div>
  )
}
