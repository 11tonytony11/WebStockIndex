
var fs = require('fs');

//-------------------------------------------------------------------
/*
This function returns AMZN data for the default non-param request
Input:  req & res objects
Output: sends AMZN json data
*/
//-------------------------------------------------------------------
function getDefault(req, res)
{
    console.log(`Sending: ${JSON.stringify(getDataFromFile())}`)
    res.send(getDataFromFile());
}
//-------------------------------------------------------------------
/*
This function sends to client data of his selected stock
Input:  req & res objects
Output: sends json data with info to user
*/
//-------------------------------------------------------------------
function getBySymbol(req, res)
{
    res.send(getDataFromFile(req.params.symbol));
}
//-------------------------------------------------------------------
/*
This function reads stock data from the json file
Input:  string - symbol ticker
Output: json with data about the specific company
*/
//-------------------------------------------------------------------
function getDataFromFile(symbol = "AMZN")
{
    const obj = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf8'));

    return obj[symbol.toUpperCase()];
}
//-------------------------------------------------------------------
module.exports = {
  getDefault,
  getBySymbol
}