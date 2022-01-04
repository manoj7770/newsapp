import React from "react";

const CountryList = (props) => {
  return (
    <div>
      <button onClick={() => props.fetchNewData("in")}>India</button>
      <button onClick={() => props.fetchNewData("us")}>USA</button>
      <button onClick={() => props.fetchNewData("cn")}>China</button>
      <button onClick={() => props.fetchNewData("rs")}>Russia</button>
      <button onClick={() => props.fetchNewData("pak")}>Pakistan</button>
      <button onClick={() => props.fetchNewData("as")}>Australia</button>
      <button onClick={() => props.fetchNewData("ne")}>NewZealand</button>
    </div>
  );
};

export default CountryList;