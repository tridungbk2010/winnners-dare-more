import * as React from 'react';
import './Video.scss';
import { connect, Dispatch } from 'react-redux';
import { RootState } from '../../../rootReducer';
import * as videoActions from '../actions';
import { VideoModel, VideoState } from '../model';
import VideoItem from './VideoDetail';
import { Spin } from 'antd';

interface Props {
  getVideos: (token: string) => videoActions.Actions;
  videoState: VideoState;
  showVideo: (video: VideoModel) => void;
}
class VideosList extends React.Component<Props, Object> {
  componentDidMount(): void {
    this.props.getVideos('token');
  }
  render() {
    const { videoState } = this.props;
    return (
      <div className="video-list-container">
        <h3 className="h3-all-video">All Videos</h3>
        <Spin spinning={videoState.loading} size="large">
          <div className="video-list">
            {videoState.videos.map(video => (
              <VideoItem video={video} key={video.id} onClick={this.props.showVideo.bind(this, video)}/>
            ))}
          </div>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  videoState: state.video,
});

const mapDispatchToProps = (dispatch: Dispatch<videoActions.Actions>) => ({
  getVideos: (token: string) => dispatch(videoActions.getAllVideos(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
