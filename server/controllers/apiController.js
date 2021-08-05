
var Stock = require('../models/stock');

//-------------------------------------------------------------------
/*
This function returns AMZN data for the default non-param request
Input:  req & res objects
Output: sends AMZN json data
*/
//-------------------------------------------------------------------
async function getDefault(req, res)
{
    res.send(await getDataFromDB());
}
//-------------------------------------------------------------------
/*
This function sends to client data of his selected stock
Input:  req & res objects
Output: sends json data with info to user
*/
//-------------------------------------------------------------------
async function getBySymbol(req, res)
{
    res.send(await getDataFromDB(req.params.symbol));
}
//-------------------------------------------------------------------
/*
This function reads stock data from the db
Input:  string - symbol ticker
Output: json with data about the specific company
*/
//-------------------------------------------------------------------
async function getDataFromDB(symbol = "AMZN")
{
    var data;
    await Stock.findOne({Symbol: symbol.toUpperCase()}, function(err, res) {
        data = res;
    });
    return data;
}
//-------------------------------------------------------------------
module.exports = {
  getDefault,
  getBySymbol
}
