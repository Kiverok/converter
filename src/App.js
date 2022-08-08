import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';



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
      <Rate />
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
