import React from "react";
import PropTypes from "prop-types";

export const TableData = ({ seasonData }) => (
  <table>
    <tbody>
      {Object.keys(seasonData).map(el => {
        if (!seasonData[el]) {
          return;
        }
        return (
          <tr key={el}>
            <th className="left-content">{el}:</th>
            <th className="right-content">{seasonData[el]}</th>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TableData.propTypes = {
  seasonData: PropTypes.object.isRequired
};
