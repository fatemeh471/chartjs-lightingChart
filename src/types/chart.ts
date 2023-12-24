export type lineChartTypes = {
    labels: (string | number)[],  // یا هر نوع داده‌ای که می‌خواهید
    datasets: {
      label: string,
      data: number[],  // یا هر نوع داده‌ای که می‌خواهید
      borderColor: string,
      borderWidth: number,
      fill: boolean,
    }[],
  };
  