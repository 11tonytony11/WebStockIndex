import "../ComponentsCSS/Graph.css";
import React from "react";

var graphSettings = {
    "width": "100%",
    "height": 610,
    "symbol": "",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "graph"
  }

export default class Graph extends React.Component
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
        this.state = {currSymbol: 'amzn'}
    }
    //-------------------------------------------------------------------
    /*
    This function embeds the graph in the page
    Input:  ovrride - if override unique re-embed
    Output: None
    */
    //-------------------------------------------------------------------
    embedGraph(override = false)
    {
        if(this.state.currSymbol === this.props.symbol && !override)
        {
            return;
        }

        var script = document.createElement('script');
        graphSettings["symbol"] = this.props.symbol;

        script.innerHTML = "new TradingView.widget(" + JSON.stringify(graphSettings) + ");";
        script.async = true;

        this.setState({currSymbol: this.props.symbol})
        document.getElementById("graph").appendChild(script);
    }
    //-------------------------------------------------------------------
    /*
    This is the component mounted life cycle event. it embeds the graph to the page
    Input:  None
    Output: None
    */
    //-------------------------------------------------------------------
    componentDidMount()
    {
        this.embedGraph(true);
    }
    //-------------------------------------------------------------------
    /*
    This is the component update life cycle event. it embeds the graph to the page
    Input:  None
    Output: None
    */
    //-------------------------------------------------------------------
    componentDidUpdate()
    {
        if(this.state.currSymbol !== this.props.symbol)
        {
            this.embedGraph();
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
            <div className="tradingview-widget-container">
                <div className="tradingview_c37d5" id="graph">
                </div>
            </div>
        )
    }
}