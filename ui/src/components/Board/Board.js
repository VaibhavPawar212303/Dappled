import React from "react";

//import icon
import {
  BsBugFill,
  BsEye,
  BsXDiamond,
  BsAwardFill,
  BsBox,
} from "react-icons/bs";
import Bars from "../Charts/Bar";
import Piechart from "../Charts/Piechart";
import RecentReport from "./RecentReport";

//import the test count
const id = localStorage.getItem("projectID");
const regression = localStorage.getItem("Regression");
const visual = localStorage.getItem("Visual");
const API = localStorage.getItem("API");
const Smoke = localStorage.getItem("Smoke");

//Regression count
fetch(`https://dappled.onrender.com/api/build/1`, {
  method: "GET",
  mode:"cors"
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
//Visual count
fetch(`https://testrig.onrender.com/api/project/getTestCount/visual/${id}`, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var builds = data.result.length;
    localStorage.setItem("Visual", builds);
  });
//API count
fetch(`https://testrig.onrender.com/api/project/getTestCount/api/${id}`, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var builds = data.result.length;
    localStorage.setItem("API", builds);
  });
//smoke count
fetch(`https://testrig.onrender.com/api/project/getTestCount/smoke/${id}`, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var builds = data.result.length;
    localStorage.setItem("Smoke", builds);
  });

const total =
  parseInt(regression) + parseInt(visual) + parseInt(API) + parseInt(Smoke);

function Board() {
  return (
    <div>
      <div className="flex gap-4 w-full">
        <div className="bg-white rounded-sm mt-3 flex-1 border border-gray-400 flex item-center shadow-sm">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400 mt-1 ml-4 mb-1">
            <BsBugFill />
          </div>
          <div className="pl-4">
            <span>Total Regression Test</span>
            <div className="flex items-center justify-center">{regression}</div>
          </div>
        </div>
        <div className="bg-white rounded-sm mt-3 flex-1 border border-gray-400 flex item-center shadow-sm">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-400 mt-1 ml-4 mb-1">
            <BsEye />
          </div>
          <div className="pl-4">
            <span>Total Visual Test</span>
            <div className="flex items-center justify-center">{visual}</div>
          </div>
        </div>
        <div className="bg-white rounded-sm mt-3 flex-1 border border-gray-400 flex item-center shadow-sm">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-300 mt-1 ml-4 mb-1">
            <BsXDiamond />
          </div>
          <div className="pl-4">
            <span>Total API Test</span>
            <div className="flex items-center justify-center">{API}</div>
          </div>
        </div>
        <div className="bg-white rounded-sm mt-3 flex-1 border border-gray-400 flex item-center shadow-sm">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-300 mt-1 ml-4 mb-1">
            <BsAwardFill />
          </div>
          <div className="pl-4">
            <span>Total Smoke Test</span>
            <div className="flex items-center justify-center">{Smoke}</div>
          </div>
        </div>
        <div className="bg-white rounded-sm mt-3 flex-1 border border-gray-400 flex item-center shadow-sm">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-100 mt-1 ml-4 mb-1">
            <BsBox />
          </div>
          <div className="pl-4">
            <span>Total Test</span>
            <div className="flex items-center justify-center">{total}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 bg-white mt-3 rounded-sm">
          <Bars />
        </div>
        <div className="flex flex-1 items-center justify-center bg-white mt-3">
          <Piechart />
        </div>
      </div>
      <div className="flex flex-row bg-white p-4 w-full mt-4 gap-10">
        <div className="flex flex-1 px-4 pt-3 pb-4 border border-grey-300">
          <strong className="flex-1 items-start text-gray-700 font-medium">
            Recent Test Result
            <div>
              <RecentReport />
            </div>
          </strong>
          <strong className="text-gray-700 font-medium">See More...</strong>
        </div>
        <div className="flex-1">
          <strong className="text-gray-700 font-medium">Top 5 Builds</strong>
        </div>
      </div>
    </div>
  );
}

export default Board;
