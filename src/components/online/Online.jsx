import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarFriendContainer">
            <img src={user.profilePicture} className="rightbarFriendImg" alt="" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
 