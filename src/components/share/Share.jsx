import "./share.css"
import {Subscriptions, Label, LocationOn, MoodOutlined} from '@mui/icons-material';

export default function 
() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/maple/leoWu1.jpg" alt="" />
                <input placeholder="What's on your Mind?" className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Subscriptions htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOn htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <MoodOutlined htmlColor="brown" className="shareIcon"/>
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button className="shareButton">share</button>
            </div>
        </div>
    </div>
  )
}
