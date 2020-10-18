import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
  return (
    <div>
      <VideoSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
