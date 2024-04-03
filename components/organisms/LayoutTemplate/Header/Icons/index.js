import React from "react";
import {
  FaHome,
  FaUserEdit,
  FaSortAmountUpAlt,
  FaBook,
  FaChartPie,
} from "react-icons/fa";
const MapIconToComponent = (iconName) => {
  switch (iconName) {
    case "FaHome":
      return (
        <div className="text-green-500 mr-2">
          <FaHome size="18" />
        </div>
      );
    case "FaUserEdit":
      return (
        <div className="text-green-500 mr-2">
          <FaUserEdit size="18" />
        </div>
      );
    case "FaSortAmountUpAlt":
      return (
        <div className="text-green-500 mr-2">
          <FaSortAmountUpAlt size="18" />
        </div>
      );
    case "FaBook":
      return (
        <div className="text-green-500 mr-2">
          <FaBook size="18" />
        </div>
      );
    case "FaChartPie":
      return (
        <div className="text-green-500 mr-2">
          <FaChartPie size="18" />
        </div>
      );
    default:
      return null;
  }
};

export default MapIconToComponent;
