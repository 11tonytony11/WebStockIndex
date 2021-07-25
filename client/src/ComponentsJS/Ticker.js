import React from 'react';

var tickerSettings = {
    "symbols": [
      {
        "description": "SP500",
        "proName": "AMEX:SPY"
      },
      {
        "description": "Nasdaq 100",
        "proName": "NASDAQ:QQQ"
      },
      {
        "description": "NVIDIA",
        "proName": "NASDAQ:NVDA"
      },
      {
        "description": "AMAZON",
        "proName": "NASDAQ:AMZN"
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "light",
    "isTransparent": false,
    "displayMode": "adaptive",
    "locale": "en"
};

export default class Ticker extends React.Component
{
  //-------------------------------------------------------------------
  /*
    This is the component mounted life cycle event. it embeds the stock ticker to the page
    Input:  None
    Output: None
  */
  //-------------------------------------------------------------------
  componentDidMount()
  {
    const script = document.createElement('script');

    script.src ="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify(tickerSettings);
    script.async = true;

    document.getElementById("Ticker").appendChild(script);
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
    return(
      <div id = "Ticker">
        <div className="tradingview-widget-containerTicker"/>
          <div className="tradingview-widget-container__widget">
          </div>
      </div>
      );
  }
}