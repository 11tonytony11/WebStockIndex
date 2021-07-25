import "../ComponentsCSS/Header.css";
import React from "react";

export default class Header extends React.Component 
{
  //-------------------------------------------------------------------
  /*
    This is the component constructor
    Input:  props
    Output: None
  */
  //-------------------------------------------------------------------
  constructor(props)
  {
    super(props);
    this.state = {exchange: 'Nasdaq', symbol: 'amzn', prev: ''};
    this.handleSymbolSearch = this.handleSymbolSearch.bind(this);
  }
  //-------------------------------------------------------------------
  /*
    This function handles the search function
    Input:  event object
    Output: None
  */
  //-------------------------------------------------------------------
  handleSymbolSearch(e) 
  {
    if(e.key === 'Enter')
    {
      var newSymbol = document.getElementById("SearchBox").value;
      this.setState({prev: this.state.symbol, symbol: newSymbol});

      this.props.onKeyDown(e);
    }
  }
  //-------------------------------------------------------------------
  /*
    This is the render function
    Input:  None
    Output: None
  */
  //-------------------------------------------------------------------
  render() 
  {
    return (
      <header className="Header">
        <img src="./Stock.png" className="Logo" alt="logo" />
        <nav className="Nav">
          <button onClick={() => alert("סתם רציתי כפתור בית")}>Home</button>
          <p>|</p>
          <button onClick={() => this.setState({exchange: 'Nasdaq'})}>Nasdaq</button>
          <p>|</p>
          <button onClick={() => this.setState({exchange: 'NYSE'})}>NYSE</button>
          <p>|</p>
          <button onClick={() => this.setState({exchange: 'ARCA'})}>ARCA</button>
          <p>|</p>
          <button onClick={() => alert('אין אודות')}>About</button>
          <input className="content" id="SearchBox" placeholder={`Search any symbol on ${this.state.exchange}`} onKeyDown={this.handleSymbolSearch}/>
        </nav>
      </header>
     );
  }
}