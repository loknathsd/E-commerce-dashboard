import React from 'react';
import Chart from "react-apexcharts";

const data = {
    series: [
        {
            name: "Spent",
            data: [22, 80, 36, 50, 60, 30, 90, 26, 75, 10, 55, 65],
        },
    ],
    categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
};

const TotalSpent = () => {
    const chartOptions = {
        chart: {
            background: "transparent",
            toolbar: { show: false },
        },
        colors: "#2499EF",
        dataLabels: { enabled: false },
        grid: {
            show: false,
        },
        states: {
            active: {
                filter: { type: "none" },
            },
            hover: {
                filter: { type: "none" },
            },
        },

        xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            categories: data.categories,
            labels: {
                style: {
                    colors: 'gray',
                    fontFamily: 'serif',
                    fontWeight: 700,
                },
            },
        },
        yaxis: { show: false },

        plotOptions: {
            bar: {
                borderRadius: 8,
                columnWidth: "60%",
                rangeBarOverlap: false,
            },
        },
        tooltip: {
            x: { show: false },
            y: {
                formatter: (val) => `$${val}`,
            },
        },

        responsive: [
            {
                breakpoint: 550,
                options: {
                    chart: {
                        height: 350,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                    xaxis: {
                        labels: { show: false },
                    },
                    yaxis: {
                        show: true,
                        labels: {
                            style: {
                                colors: 'red',
                                fontFamily: '',
                                fontWeight: 500,
                            },
                        },
                    },
                },
            },
        ],
    };
    const chartSeries = data.series;
    return (
        <div className='bg-white w-[60%] p-10'>
            <h4 className='font-serif'>Total Spent</h4>
            <h1 className='text-2xl text-blue-400 font-bold' >$682</h1>
            <div >
                <Chart
                    height={250}
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                />
            </div>

        </div>
    );
};

export default TotalSpent;