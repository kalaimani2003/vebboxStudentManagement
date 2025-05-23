import React from 'react';
import './MonthlyCollectionChart.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', amount: 45000 },
  { name: 'Feb', amount: 52000 },
  { name: 'Mar', amount: 37000 },
  { name: 'Apr', amount: 20000 },
  { name: 'May', amount: 46000 },
  { name: 'Jun', amount: 44000 },
  {name: 'Jul', amount: 50000 },
  { name: 'Aug', amount: 60000 },
  { name: 'Sep', amount: 55000 },
  { name: 'Oct', amount: 48000 },
  { name: 'Nov', amount: 53000 },
  { name: 'Dec', amount: 62000 },
];

const MonthlyCollectionChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3 className="chart-title">Monthly Fee Collection</h3>
        <h3 className="chart-month">July 2024</h3>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2d4fa2" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis tickFormatter={(value) => value.toLocaleString()} stroke="#ffffff" />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="amount" fill="#ffffff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyCollectionChart;
