import React from 'react';
import Chart from "react-apexcharts";

const data = {
    series: [75, 50, 25],
    categories: ["Sales", "Orders", "Return"],
  };

const Analytic = () => {
    const chartOptions = {
        chart: { background: "transparent" },
        colors: ["#2499EF", "#FF9777", "#FF6B93"],
        labels: ["Sales", "Orders", "Return"],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: { show: false },
              value: { show: false },
            },
            hollow: { size: "20%" },
            track: {
              background: "#E5EAF2",
              margin: 12,
            },
          },
        },
        stroke: {
          lineCap: "round",
          curve: "smooth",
        },
        legend: {
          show: true,
          position: "bottom",
          fontFamily: "inherit",
          fontSize: "13px",
          fontWeight: 500,
          onItemClick: { toggleDataSeries: false },
          onItemHover: { highlightDataSeries: true },
        },
        tooltip: {
          enabled: true,
          style: { fontFamily: "inherit" },
          y: {
            formatter: (value) => `$${value}`,
          },
        },
        states: {
          hover: {
            filter: { type: "none" },
          },
          active: {
            filter: { type: "none" },
          },
        },
      };
    
      const chartSeries = data.series;
    return (
        <div className='w-[30%] bg-white p-8 '>
            <h1 className='text-xl font-serif'>Analytics</h1>
            <div>
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="radialBar"
                    height={250}
                />
            </div>
        </div>
    );
}
export default Analytic;