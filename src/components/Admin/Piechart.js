import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'User Registrations', value: 400 },
  { name: 'Books Issued', value: 300 },
  { name: 'Books Returned', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChartComponent = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieData}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
