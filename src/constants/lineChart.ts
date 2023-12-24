export const basicData = {
  labels: [],
  datasets: [
    {
      label: "Random Data",
      data: [],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      fill: false,
    },
  ],
}
export const lineOption = {
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      ticks: {
        stepSize: 1,
        min: 1,
        max: 100,
      },
    },
    y: {
      type: "time",
      time: {
        displayFormats: {
          second: "ss:mm:HH",
        },
      },
    },
  },
};