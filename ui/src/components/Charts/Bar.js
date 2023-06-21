import React, { useState } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

//import the test count
const id = localStorage.getItem("projectID");

function Bars() {
  //set build
  const [build, setBuild] = useState("");

  //Get the builds
  fetch(`https://testrig.onrender.com/api/project/getbuilds/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var builds = data.result;
      setBuild(builds);
    });

  const data = [build[0], build[1], build[2], build[3], build[4]];
  
  return (
    <>
      <div className="h-[22rem] bg-white p-4 rounded-sm  flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Total Test From Top 5 Builds</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="test_type" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="test_pass" fill="#0ea5e9" />
						<Bar dataKey="test_fail" fill="#ea580c" />
            <Bar dataKey="test_parallel" fill="#FFBB28" />
            <Bar dataKey="test_error" fill="#FF8042" />
            <Bar dataKey="test_stop" fill="#ea8042" />
            <Bar dataKey="other" fill="#ea8042" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
    </>
  );
}

export default Bars;
