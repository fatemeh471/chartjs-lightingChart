import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="text-white bg-[#FF9119 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-[#336600]/80  me-2 mb-2"
        onClick={() => {
          navigate(`/line-chart`);
        }}
      >
        LineChart
      </button>
      <button
        type="button"
        className="text-white bg-[#FFcccc font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-[#cc0066]/80  me-2 mb-2"
        onClick={() => {
          navigate(`/light-chart`);
        }}
      >
        LightChart
      </button>
    </div>
  );
}

export default Home;
