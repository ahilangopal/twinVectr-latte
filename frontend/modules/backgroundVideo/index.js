
import React, {Component} from "react";
const Video = require('components/video');

class BGVideo extends Component {

    constructor(props) {
        super(props);  
    }

    render() {
        const { videoMp4 } = this.props;
        return (
            <div className="parallax-video">
                <Video 
                    videoMp4 = {videoMp4}
                    height = '600'
                    width = '1200'
                    autoPlay
                    loop
                    muted
                />
            </div>
        );
    }
}

module.exports = BGVideo;
