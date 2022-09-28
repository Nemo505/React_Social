import "./sidebar.css"
import {DynamicFeed} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <DynamicFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
        </ul>
      </div>
      </div>
  )
}
