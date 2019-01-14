import React from "react";
import PropTypes from "prop-types";

export const SeasonTableData = ({ seasonData }) => (
  <table>
    <tbody>
      {Object.keys(seasonData).map(el => (
        <tr key={el}>
          <th className="left-content">{el}:</th>
          <th className="right-content">{seasonData[el]}</th>
        </tr>
      ))}
    </tbody>
  </table>
);

SeasonTableData.propTypes = {
  seasonData: PropTypes.object.isRequired
};
