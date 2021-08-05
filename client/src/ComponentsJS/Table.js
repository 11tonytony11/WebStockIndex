import React from 'react';

export default function Table(props) {
    return (
  <table>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>{props.isFinancial ? "Revenue" : "Name"}</td>
      <td>{props.isFinancial ? props.data["Revenue"] : props.data["Name"]}</td>
    </tr>
    <tr>
      <td>{props.isFinancial ? "Gross Profit" : "Inst. Own"}</td>
      <td>{props.isFinancial ? props.data["Gross"] : props.data["InstOwn"]}</td>
    </tr>
    <tr>
      <td>{props.isFinancial ? "Operating Income" : "Short Float"}</td>
      <td>{props.isFinancial ? props.data["Operating"] : props.data["ShortFloat"]}</td>
    </tr>
    <tr>
      <td>{props.isFinancial ? "Net income" : "52W Range"}</td>
      <td>{props.isFinancial ? props.data["net"] : props.data["Range"]}</td>
    </tr>
    <tr>
      <td>{props.isFinancial ? "" : "P/E"}</td>
      <td>{props.isFinancial ? "" : props.data["PE"]}</td>
  </tr>
</table>
    );
}

