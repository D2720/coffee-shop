import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home = props => {
  return (
    <div className='Home'>
      HOME
      <div className='header'>
        <Header />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;