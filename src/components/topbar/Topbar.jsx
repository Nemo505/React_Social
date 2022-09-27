import "./topbar.css"
import { ManageSearch, AcUnit, Lyrics, NotificationsActive  } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Maple Social</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
            <ManageSearch className="searchIcon"/>
            <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">

        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timelime</span>
        </div>

        <div className="topbarIcons">

          <div className="topbarIconItem">
            <AcUnit/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <Lyrics/>
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsActive/>
            <span className="topbarIconBadge">1</span>
          </div>

        </div>
        <img src="assets/maple/1.png" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
