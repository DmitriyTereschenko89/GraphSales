import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function AppGraph({salesData}) {
    
  return (
    <ComposedChart
        width={900}
        height={450}
        data={salesData}
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="formatDate" />
      <YAxis type="number" dataKey="amount" orientation={"left"} yAxisId={0}/>
      <YAxis type="number" dataKey="averageSale" orientation={"right"} yAxisId={1} />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" name="total amount of sales" barSize={20} fill="#413ea0" yAxisId={0} />
      <Line type="monotone" dataKey="averageSale" name="average amount of sales" stroke="#ff7300" yAxisId={1} />
    </ComposedChart>
  );
}
