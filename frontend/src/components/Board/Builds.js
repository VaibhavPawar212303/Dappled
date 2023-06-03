import React, { useState } from "react";

function Builds() {
  const [build, setBuild] = useState("");
  //Regression count
  fetch(`http://localhost:8000/api/build`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var result = data.buildData;
      console.log(result);
      setBuild(result);
    });

  console.log(build);

  return <div>Builds</div>;
}

export default Builds;
