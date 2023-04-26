import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Api from "./Api";
const ChartMy = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let phone = [];
    let id = [];
    axios.get(Api).then((res) => {
      for (const chartobj of res.data) {
        phone.push(parseInt(chartobj.phone));
        id.push(parseInt(chartobj.id));
      }
      setChartData({
        labels: phone,
        datasets: [
          {
            label: "phone",
            data: phone,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2
          },
          {
            label: "id",
            data: id,
            fill: false,
            borderColor: "#742774",
            borderWidth: 2
          }
        ]
      });
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <h1 className="awesome">User level & id data</h1>
      <div className="setchart">
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "USER DATA LEVEL", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChartMy;
