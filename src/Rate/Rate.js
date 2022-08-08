import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      'date' : '',
      'currencyRate' : {}
    }
    this.currency = ['USD', 'UAH', 'CAD', 'PHP'];
    this.getRate();
  }
getRate = () => {
  let myHeaders = new Headers();
myHeaders.append("apikey", "vw3CUg44dZ9GGGVf4TnpQtootD5mxY2Z");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
  .then(data => {
    return data.json();
  })
  .then(data => {
    this.setState({date : data.date});
    let result = {};
    for (let i = 0; i < this.currency.length; i++) {
      result[this.currency[i]] = data.rates[this.currency[i]];
      this.setState({currencyRate : result});
    }
  });
}
  render() {
  return (
    <div className="rate">
    <h3>Курс валют на {this.state.date}</h3>
      <div className="flex-container">
        {Object.keys(this.state.currencyRate).map( (keyName,i) =>
        (
          <div className="block flex-item" key={keyName}>
          <div className="currency-name">{keyName}</div>
          <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
          <p>*Можна купити за 1 EUR</p>
        </div>
        )
        )}
      </div> 
      <Calc rate={this.state.currencyRate} />
      </div>
  );
}
}
export default Rate;
