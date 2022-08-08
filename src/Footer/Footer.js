import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
  return (
    <footer className="footer">
    <div className="footer-bottom">
      <div className="container">
        <div className="flex-container">
          <div className="flex-item">
            <h1 className="footer-title">React course</h1>
            <p>All Rights Reserved</p>
          </div>
          <div className="flex-item">
            <div className="module-body">
              <ul className="list-unstyled">
                <li><a href="/contact/" tooltip="Контакти">Контакти</a></li>
                <li><a href="/d">Гарантії</a></li>
                <li><a href="/b">Про сервіс</a></li>
                <li><a href="/o">Умови повернення</a></li>
                <li><a href="/p">Використання сервісу</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-bar">
      <div className="flex-container">
        <div className="flex-item">
          <ul className="link">
          </ul>
        </div>
        <div className="flex-item">
          <div className="clearfix payment-methods">
            <ul>
              <img alt=" "/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
}
export default Footer;
