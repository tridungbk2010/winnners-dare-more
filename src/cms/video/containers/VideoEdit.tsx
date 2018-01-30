import * as React from 'react';
import { VideoModel } from '../model';
import { Button } from 'antd';

interface Props {
  video: VideoModel;
  ratio: number;
}
class VideoEdit extends React.Component<Props, Object> {
  render() {
    const { video, ratio } = this.props;
    return (
      <div className="video-detail-container">
        <div>
          <div>
            <h3>Video title</h3>
            <p>Descriptions</p>
          </div>
        </div>
        <div>
          <iframe
            width={240 * ratio}
            height={134 * ratio}
            src={`https://www.youtube.com/embed/${
              video.url
            }?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
          />
        </div>
        <div>
          <Button type="primary" ghost={true}>
            Approve
          </Button>
          <Button type="danger" ghost={true}>
            Decline
          </Button>
        </div>
      </div>
    );
  }
}

export default VideoEdit;
