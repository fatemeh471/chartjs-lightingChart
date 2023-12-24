import { Route, Routes } from "react-router-dom";
import LightChart from "./component/LightChart";
import './index.css'
import LineChart from "./component/LineChart";
import Home from "./page/home";
const App = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/light-chart" element={<LightChart />} />
          <Route path="/line-chart" element={<LineChart />} />
       </Routes>
    </div>
  );
};

export default App;
