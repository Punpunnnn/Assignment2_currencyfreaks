import React from "react";

export const Table = ({ data }) => {
  // console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <td>Currency</td>
          <td>We Buy</td>
          <td>Exchange Rate</td>
          <td>We Sell</td>
        </tr>
      </thead>
      <tbody>
        {/* Tampilkan data yang sudah difilter */}
        {Object.keys(data).map((key, index) => {
          const res = (5 / 100) * data[key];
          return (
            <tr key={index}>
              <td>{key}</td>
              <td>{parseFloat(data[key]) + res}</td>
              <td>{data[key]}</td>
              <td>{parseFloat(data[key]) - res}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
