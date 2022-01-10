import React from "react";

const CountryList = (props) => {
  return (
    <div>
      <button onClick={() => props.fetchNewData("in")}>India</button>
      <button onClick={() => props.fetchNewData("us")}>USA</button>
      <button onClick={() => props.fetchNewData("cn")}>China</button>
      <button onClick={() => props.fetchNewData("rs")}>Russia</button>
      <button onClick={() => props.fetchNewData("ar")}>Argentina</button>
      <button onClick={() => props.fetchNewData("au")}>Australia</button>
      <button onClick={() => props.fetchNewData("nz")}>New Zealand</button>
    </div>
  );
};

export default CountryList;