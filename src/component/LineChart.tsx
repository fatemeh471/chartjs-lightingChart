import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
import { basicData, lineOption } from "../constants/lineChart";
import { lineChartTypes } from "../types/chart";
Chart.register(CategoryScale);

const LineChart = () => {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [lineData, setLineData] = useState<lineChartTypes>(basicData);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        const randomValue = Math.floor(Math.random() * 100) + 1;

        setLineData((prevData) => ({
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: [...prevData.datasets[0].data, randomValue],
              },
            ],
            labels: [...prevData.labels, prevData.labels.length + 1],
        }));
      }, 1000);
    }
    if (lineData.datasets.length > 200) {
      setLineData(basicData);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleChart = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Line Chart</h2>
      <div>
        <Line
          data={lineData}
          options={lineOption}
          style={{ width: "800px", height: "300px" }}
        />
      </div>
      <button
        onClick={toggleChart}
        className="bg-blue-500 text-white py-1 px-5 rounded"
      >
        {isRunning ? "Stop Chart" : "Start Chart"}
      </button>
    </div>
  );
};

export default LineChart;
