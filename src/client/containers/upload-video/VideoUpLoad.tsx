import * as React from 'react';
import Dropzone, { ImageFile } from 'react-dropzone';
import './VideoUpload.scss';

class VideoUpLoad extends React.Component {
  handleOnDrop = (files: ImageFile[]) => {
    console.log(files);
  }

  render() {
    return (
      <div className="video-up-load-container">
        <h3 className="video-info">UPLOAD YOUR VIDEO</h3>
        <Dropzone
          onDrop={this.handleOnDrop}
          accept="video/*"
          className="drop-zone-style"
        >
          <div className="icon-up-load" />
          <button className="btn-choose-video">Choose your video</button>
          <span className="drop-here">Or Drop your file here</span>
        </Dropzone>
        <div className="vd-footer">
          <span className="requirements">REQUIREMENTS</span>
          <div className="requirement-list">
            <span>
              Video must be in format: mp4, quicktime, avi, webm, x-flv or 3gpp
            </span>
            <span>You must own the rights to the clip you upload.</span>
            <span>You must be above 18 years old.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoUpLoad;
