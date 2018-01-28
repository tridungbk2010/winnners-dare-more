import * as React from 'react';
import './Video.scss';
import { connect, Dispatch } from 'react-redux';
import { RootState } from '../../../rootReducer';
import * as videoActions from '../actions';
import { VideoState } from '../model';
// import Loader from '../../common/Loader';

interface Props {
  getVideos: (token: string) => videoActions.Actions;
  video: VideoState;
}
class VideosList extends React.Component<Props, Object> {
  componentDidMount(): void {
    this.props.getVideos('token');
  }
  render() {
    return (
      <div className="video-list-container">
        <h3 className="h3-all-video">All Videos</h3>
        {this.props.video.loading ? (
          <div className="loader">
            <span>
              <i className="fas fa-spinner fa-spin fa-2x"/>
            </span>
          </div>
        ) : (
          <div className="video-list">
            {this.props.video.videos.map(video => (
              <div key={video.id} className="video-item">
                <iframe
                  width="240"
                  height="134"
                  src={`https://www.youtube.com/embed/${
                    video.url
                  }?rel=0&amp;controls=0&amp;showinfo=0`}
                  frameBorder="0"
                />
                <h5 className="video-title">{video.title}</h5>
                <p className="video-desc">{video.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  video: state.video,
});

const mapDispatchToProps = (dispatch: Dispatch<videoActions.Actions>) => ({
  getVideos: (token: string) => dispatch(videoActions.getAllVideos(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
