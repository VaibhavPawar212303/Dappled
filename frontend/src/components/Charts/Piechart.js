import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

//get the id
const id = localStorage.getItem("projectID");

const RADIAN = Math.PI / 180;
const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#ff9ca3"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BuyerProfilePieChart() {
  //get the regression build pass data
  fetch(`https://testrig.onrender.com/api/project/getTestCount/regression/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var Regression1 = data.result[0].test_pass;
      var totalRegression = parseInt(Regression1);
      localStorage.setItem("RegressionPassTestCount", totalRegression);
    });
  //Visual count
  fetch(`https://testrig.onrender.com/api/project/getTestCount/visual/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var visual1 = data.result[0].test_pass;
      var totalVisual = parseInt(visual1);
      localStorage.setItem("VisualPassTestCount", totalVisual);
    });
  //Api count
  fetch(`https://testrig.onrender.com/api/project/getTestCount/api/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var api1 = data.result[0].test_pass;
      var totalApi = parseInt(api1);
      localStorage.setItem("ApiPassTestCount", totalApi);
    });
  //Smoke count
  fetch(`https://testrig.onrender.com/api/project/getTestCount/smoke/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var smoke = data.result[0].test_pass;
      var totalSmoke = parseInt(smoke);
      localStorage.setItem("SmokePassTestCount", totalSmoke);
    });
  var RegressionCount = localStorage.getItem("RegressionPassTestCount");
  var VisualCount = localStorage.getItem("VisualPassTestCount");
  var ApiCount = localStorage.getItem("ApiPassTestCount");
  var SmokeCount = localStorage.getItem("SmokePassTestCount");

  const data = [
    { name: "Regression", value: parseInt(RegressionCount) },
    { name: "API", value: parseInt(ApiCount) },
    { name: "Visual", value: parseInt(VisualCount) },
    { name: "Smoke", value: parseInt(SmokeCount) },
  ];

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm  flex flex-col">
      <strong className="text-gray-700 font-medium">
       Total Aggregate Of Top 5 Build
      </strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
