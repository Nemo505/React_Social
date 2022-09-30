import "./sidebar.css"
import {DynamicFeed, Chat, VideoLibrary, Groups, BookmarkBorder, QuestionMark, WorkOutline, Event, Class} from '@mui/icons-material';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon"/>
            <span className="sidebarListItemText">Video</span>
          </li>

          <li className="sidebarListItem">
            <Groups className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <BookmarkBorder className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <QuestionMark className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <Class className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>

        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>

      </div>
    </div>
  )
}
