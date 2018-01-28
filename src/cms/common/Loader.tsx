import * as React from 'react';
import ContentLoader from 'react-content-loader';
const Loader = () => (
  <ContentLoader
    height={160}
    width={180}
    speed={1}
    primaryColor={'#f3f3f3'}
    secondaryColor={'#ecebeb'}
  >
    <rect x="1" y="169" rx="3" ry="3" width="140.7" height="6.4" />
    <rect x="100" y="69.05" rx="0" ry="0" width="0" height="0" />
    <rect x="-1" y="121.05" rx="0" ry="0" width="149" height="9" />
    <rect x="-2" y="136.05" rx="0" ry="0" width="171" height="9" />
    <rect x="-1" y="152.05" rx="0" ry="0" width="99" height="8" />
    <rect x="0" y="0.05" rx="0" ry="0" width="187" height="110" />
  </ContentLoader>
);

export default Loader;
