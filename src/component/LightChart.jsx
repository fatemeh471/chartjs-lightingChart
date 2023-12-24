import { lightningChart } from '@arction/lcjs';
import React, { useRef, useEffect, useId, useState } from 'react';
import { setlicense } from '../constants/lightChart';
import {generateRandomData} from '../helper'
const LightChart = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(null);
    const chartRef = useRef(null);
    const id = useId()

    useEffect(() => {
      if (!chartRef.current) return;

      const lc = lightningChart(setlicense).ChartXY({
        container: id
      }).setTitle('lighting chart');

      const series = lc.addLineSeries();

      const updateChartData = () => {
      series.clear();
      series.add(generateRandomData());
    };

    const startUpdating = () => {
      const id = setInterval(updateChartData, 1000);
      setTimerId(id);
    };

    startUpdating();

    return () => {
      clearInterval(timerId);
      lc.dispose();
    };
  }, []);
  const handlePausePlayClick = () => {
      clearInterval(timerId);
      setIsPaused(!isPaused);
  };
    return (
    <div className="flex flex-col items-center justify-center">
        <div id={id} ref={chartRef} style={{ width: "800px", height: "300px" }}></div>
        <button className="bg-blue-500 text-white py-1 px-5 rounded mt-5" onClick={handlePausePlayClick}>{'Pause'}</button>
    </div>)
};

export default LightChart;
