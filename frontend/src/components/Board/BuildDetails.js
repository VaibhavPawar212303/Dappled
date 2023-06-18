import React, { useState } from "react";
var Build_Id = localStorage.getItem("Build_Id");
var videobuffer;

function BuildDetails() {
  fetch(`http://localhost:8000/api/build/test/${Build_Id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((responseData) => {
      videobuffer = responseData;
    });

  return (
    <div class="mt-3 ml-11">
      <div class="media">
        <video width="550" height="300" controls>
          <source
            src={`data:video/mp4;base64,${videobuffer}`}
            type="video/mp4"
          />
        </video>
        <div class="media-body">
          <h5 class="mt-0">Center-aligned media</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
          <p class="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildDetails;
