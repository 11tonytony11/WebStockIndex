import Header from './ComponentsJS/Header';
import Footer from './ComponentsJS/Footer';
import Ticker from './ComponentsJS/Ticker';
import Graph from './ComponentsJS/Graph';
import Analysts from './ComponentsJS/Analysts';
import Table from './ComponentsJS/Table';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {symbol: 'amzn', data: {}};
    this.handler = this.handler.bind(this);
  }

  handler(e) 
  {
    if(e.key === 'Enter')
    {
      var newSymbol = document.getElementById("SearchBox").value;
      this.setState({symbol: newSymbol}, () => {
        fetch(`http://localhost:5000/api/${this.state.symbol}`)
        .then(response => response.json())
        .then(newData => this.setState({data: newData}));
      })
    }
  }

  render()
  {
    return(
      <div>
      <Header onKeyDown={this.handler}/>
      <Ticker />
      <Graph symbol={this.state.symbol}/>
      <h1>Key Data</h1>
      <Table isFinancial={false} data = {this.state.data}/>
      <h1>Financial Data</h1>
      <Table isFinancial={true} data = {this.state.data}/>
      <h1>What analysts say</h1>
      <Analysts symbol={this.state.symbol}/>
      <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
document.getElementById('root')
);