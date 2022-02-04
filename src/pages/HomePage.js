import React from 'react';

import '../styles/HomePage.css';
import ReactPlayer from 'react-player';
import vid1 from '../videos/vid1.mp4';

const HomePage = () => {
  return (
    <>
      {/* <ReactPlayer url="../vid1.MP4" /> */}
      <ReactPlayer
        className="react-player fixed-bottom"
        url={vid1}
        width="100%"
        height="100%"
        controls={true}
      />
      <div>
        Choose from among many courses, expand
        your career opportunities. Courses
        available from 19.99!
      </div>
    </>
  );
};

export default HomePage;
