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
      <h3>Калькулятор обміну</h3>
      <div className="block">
        <div>Я хочу</div>
        <div><label><input type="radio" name="radio" defaultValue="0" />купити</label></div>
        <div><label><input type="radio" name="radio" defaultValue="1" />продати</label></div>
      <div>
      <input type="number" defaultValue="150" />
      <select name="" id="">
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="EUR">EUR</option>
      </select>
      </div>
      <div>
        <h4>Результат</h4>
        <ul className="calc-res">
          <li>EUR 150</li>
          <li>EUR 150</li>
          <li>EUR 150</li>
          <li>EUR 150</li>
        </ul>
      </div>
      </div>
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
