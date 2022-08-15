import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About copy/About';



class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
  return (
    <div className="site">
    <Header />
  <div className="container">
    <main>
      <Routes>
        <Route path="/" element={<Rate />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </main>
  </div> 
  <div className="container" id="cookie_info">
    <div className="site-content">
      <div className="well">
        На нашому сайті ми використовуєм cookie для збору інформації технічного характеру.<br /> Ми обробляємо IP адрес вашого регіону і місцезнаходження<button>Ok</button></div>
    </div>
  </div>
<Footer />
  </div>
  );
}
}
export default App;
