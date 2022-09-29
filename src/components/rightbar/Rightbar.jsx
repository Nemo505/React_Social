import "./rightbar.css"
import { Cake } from "@mui/icons-material";

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
          <li className="rightbarFriend">
              <div className="rightbarFriendContainer">
                <img src="assets/maple/wu2.jpg" className="rightbarFriendImg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
                <span className="rightbarUsername">Nemo</span>
          </li>
          <li className="rightbarFriend">
              <div className="rightbarFriendContainer">
                <img src="assets/maple/wu2.jpg" className="rightbarFriendImg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
                <span className="rightbarUsername">Nemo</span>
          </li>
        </ul>

      </div>
    </div>
  )
}
