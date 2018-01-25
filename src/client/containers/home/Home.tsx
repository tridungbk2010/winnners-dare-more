import * as React from 'react';
import Header from '../../components/header/Header';
import './Home.css';
import VideoUpLoad from '../upload-video/VideoUpLoad';
import Footer from '../../components/footer/Footer';

interface HomeProps {}
interface HomeState {
  fixTopMenu: boolean;
}
class Home extends React.Component<HomeProps, HomeState> {
  constructor(public props: HomeProps) {
    super(props);
    this.state = {
      fixTopMenu: false,
    };
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        <VideoUpLoad />
        <Footer />
      </div>
    );
  }
}

export default Home;
