import * as React from 'react';
import { VideoModel } from '../model';
import './Video.scss';
import { Col } from 'antd';

interface Props {
  video: VideoModel;
  key?: string;
  onClick?: () => void;
}
const VideoDetail = ({ video, onClick }: Props) => {
  return (
    <Col xs={1} sm={2} md={3} lg={4} xl={6}>
      <div key={video.id} className="video-item" onClick={onClick}>
        <iframe
          width={240 * .6}
          height={134 * .6}
          src={`https://www.youtube.com/embed/${
            video.url
          }?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
        />
        <h5 className="video-title">{video.title}</h5>
        <p className="video-desc">{video.description}</p>
      </div>
    </Col>
  );
};

export default VideoDetail;
