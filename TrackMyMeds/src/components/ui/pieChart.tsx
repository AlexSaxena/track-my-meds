import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const WeeklyMedicationChart = () => {
  const data = [
    { name: "Taken", value: 15 },
    { name: "Not Taken", value: 5 },
    { name: "Skipped", value: 3 },
  ];

  const COLORS = ["#34D399", "#FBBF24", "#F87171"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default WeeklyMedicationChart;
