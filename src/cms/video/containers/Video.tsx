import * as React from 'react';
import { VideoModel } from '../model';
import VideoList from './VideosList';
import VideoEdit from './VideoEdit';
import { Modal } from 'antd';

interface State {
  video: VideoModel;
  visible: boolean;
}

class Video extends React.Component<Object, State> {
  state = {
    visible: false,
    video: {
      id: '',
      url: '',
      title: '',
    },
  };
  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleShowVideo = (video: VideoModel) => this.setState({video, visible: true});

  render() {
    const {video, visible} = this.state;
    return (
      <div>
        <Modal
          title={video.title}
          visible={visible}
          mask={true}
          footer={null}
          maskClosable={false}
          width={'60%'}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <VideoEdit video={video} ratio={3}/>
        </Modal>
        <VideoList showVideo={this.handleShowVideo}/>
      </div>
    );
  }
}

export default Video;
