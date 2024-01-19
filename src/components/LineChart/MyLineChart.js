import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
// import {LineChart} from 'recharts';

const MyLineChart = () => {
    
    const data = [
        {
          name: "Company A",
          Mobile: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Company B",
          Mobile: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Company C",
          Mobile: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Company D",
          Mobile: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Company E",
          Mobile: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Company F",
          Mobile: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Company G",
          Mobile: 3490,
          pv: 4300,
          amt: 2100
        }
      ];

    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
        <Line type="monotone" dataKey="Mobile" stroke="#82ca9d" />
    </LineChart>
    );
};

export default MyLineChart;