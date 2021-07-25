import "../ComponentsCSS/Analysts.css";
import React from 'react';

var analystsSettings = {
        "interval": "1m",
        "width": 425,
        "isTransparent": false,
        "height": 450,
        "symbol": "NASDAQ:AAPL",
        "showIntervalTabs": true,
        "locale": "en",
        "colorTheme": "light"
};

export default class Analysts extends React.Component
{
    //-------------------------------------------------------------------
    /*
    This is the component updated life cycle event. it embeds the analyst ticker to the page
    Input:  None
    Output: None
    */
    //-------------------------------------------------------------------
    componentDidUpdate()
    {
        var element = document.getElementById("tradingview-widget-containerAnalysts");
        const script = document.createElement('script');
        analystsSettings["symbol"] = this.props.symbol;

        if(element.childNodes.item(0))
        {
            element.removeChild(element.childNodes.item(0));
        }

        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        script.innerHTML = JSON.stringify(analystsSettings);
        
        element.appendChild(script);
    }
    //-------------------------------------------------------------------
    /*
    This is the component mounted life cycle event. it embeds the analyst ticker to the page
    Input:  None
    Output: None
    */
    //-------------------------------------------------------------------
    componentDidMount()
    {
        this.componentDidUpdate();
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
            <div className="tradingview-widget-containerAnalysts">
                <div className="tradingview-widget-container__widget" id="tradingview-widget-containerAnalysts">
                </div>
            </div>
        );
    }
}