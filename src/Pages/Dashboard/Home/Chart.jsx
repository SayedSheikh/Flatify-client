import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ChartJSBar = ({ chartData }) => {
  // Transform data into chart.js format
  const labels = chartData.map((item) => item.name);
  const counts = chartData.map((item) => item.count);

  const data = {
    labels,
    datasets: [
      {
        label: "Listings Data",
        data: counts,
        backgroundColor: ["#60a5fa", "#34d399", "#facc15", "#f87171"],
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ccc", // for dark mode
        },
        grid: {
          color: "#444", // grid lines
        },
      },
      x: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "#444",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ccc",
        },
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <div className="bg-base-200 p-6 rounded-lg h-[400px] shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartJSBar;
