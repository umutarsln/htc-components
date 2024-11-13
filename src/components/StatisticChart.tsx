"use client";
import { useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Farklı sekmelere ait veriler (Age Data)
const data1 = 8040;
const data2 = 7560;
const data3 = 9200;
const data4 = 6830;
const data5 = 8250;
const data6 = 9100;
const data7 = 7700;
const data8 = 8650;

// Devices Data
const mobileData = 6400;
const desktopData = 5600;
const tabletData = 2800;

// Browser Data
const chromeData = 7200;
const firefoxData = 3100;
const safariData = 2200;
const edgeData = 1700;

// Dinamik renk hesaplama fonksiyonu
const getColorByValue = (value, minValue, maxValue) => {
  const lightness = 90 - ((value - minValue) / (maxValue - minValue)) * 60; // Açık tonlardan koyuya
  return `hsl(220, 90%, ${lightness}%)`; // Mavi tonları (hue 220) için HSL formatında
};

// Age Data için min-max ve renk hesaplama
const ageValues = [data1, data2, data3, data4, data5, data6, data7, data8];
const ageMinValue = Math.min(...ageValues);
const ageMaxValue = Math.max(...ageValues);

const ageData = {
  labels: [
    `0-12 age (${data1})`,
    `13-17 age (${data2})`,
    `18-24 age (${data3})`,
    `25-34 age (${data4})`,
    `35-44 age (${data5})`,
    `45-54 age (${data6})`,
    `55-64 age (${data7})`,
    `+64 age (${data8})`,
  ],
  datasets: [
    {
      label: "Age Statistic",
      data: ageValues,
      backgroundColor: ageValues.map((value) =>
        getColorByValue(value, ageMinValue, ageMaxValue)
      ),
      borderWidth: 1,
    },
  ],
};

// Devices Data için min-max ve renk hesaplama
const devicesValues = [mobileData, desktopData, tabletData];
const devicesMinValue = Math.min(...devicesValues);
const devicesMaxValue = Math.max(...devicesValues);

const devicesData = {
  labels: [
    `Mobile (${mobileData})`,
    `Desktop (${desktopData})`,
    `Tablet (${tabletData})`,
  ],
  datasets: [
    {
      label: "Devices Statistic",
      data: devicesValues,
      backgroundColor: devicesValues.map((value) =>
        getColorByValue(value, devicesMinValue, devicesMaxValue)
      ),
      borderWidth: 1,
    },
  ],
};

// Browser Data için min-max ve renk hesaplama
const browserValues = [chromeData, firefoxData, safariData, edgeData];
const browserMinValue = Math.min(...browserValues);
const browserMaxValue = Math.max(...browserValues);

const browserData = {
  labels: [
    `Chrome (${chromeData})`,
    `Firefox (${firefoxData})`,
    `Safari (${safariData})`,
    `Edge (${edgeData})`,
  ],
  datasets: [
    {
      label: "Web Browser Statistic",
      data: browserValues,
      backgroundColor: browserValues.map((value) =>
        getColorByValue(value, browserMinValue, browserMaxValue)
      ),
      borderWidth: 1,
    },
  ],
};

// Tooltip'i özelleştirme ayarları
const options = {
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#3b82f6", // Mavi arkaplan
      titleColor: "#ffffff", // Beyaz başlık
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyColor: "#ffffff", // Beyaz içerik
      bodyFont: {
        size: 12,
      },
      padding: 10, // İç boşluk
      cornerRadius: 8, // Baloncuk şekli için köşe yuvarlama
      displayColors: false, // Renk kutucuğu gizlensin
      borderColor: "#1e40af", // Daha koyu mavi kenar
      borderWidth: 1,
      callbacks: {
        label: function (tooltipItem) {
          const dataIndex = tooltipItem.dataIndex;
          const label = tooltipItem.label.split(" (")[0]; // Yaş aralığı
          const value = tooltipItem.raw; // Değer
          return `${label}: ${value}`;
        },
      },
    },
  },
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("age");
  const chartRef = useRef(null); // Chart.js referansı
  const [hiddenStates, setHiddenStates] = useState({
    age: Array(ageValues.length).fill(false),
    devices: Array(devicesValues.length).fill(false),
    browser: Array(browserValues.length).fill(false),
  }); // Tıklanma durumunu takip ediyor

  const toggleDatasetVisibility = (index) => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const meta = chart.getDatasetMeta(0); // İlk veri seti
      meta.data[index].hidden = !meta.data[index].hidden; // O veriyi gizle/aç
      chart.update(); // Grafiği güncelle
    }
    const updatedHiddenStates = { ...hiddenStates };
    updatedHiddenStates[activeTab][index] =
      !updatedHiddenStates[activeTab][index];
    setHiddenStates(updatedHiddenStates);
  };

  const renderChartData = () => {
    switch (activeTab) {
      case "age":
        return ageData;
      case "devices":
        return devicesData;
      case "browser":
        return browserData;
      default:
        return ageData;
    }
  };

  const renderChartTitle = () => {
    switch (activeTab) {
      case "age":
        return "Age Statistic";
      case "devices":
        return "Devices Statistic";
      case "browser":
        return "Web Browser Statistic";
      default:
        return "Age Statistic";
    }
  };

  const renderLabels = () => {
    const currentData = renderChartData();
    return currentData.labels.map((label, index) => (
      <li
        key={index}
        className={`flex items-center justify-between lg:text-base text-xl cursor-pointer mx-1 md:mx-2 lg:mx-4 my-1 ${
          hiddenStates[activeTab][index] ? "line-through text-gray-400" : ""
        }`} // Gizlenen veriler çizilmiş ve gri olacak
        onClick={() => toggleDatasetVisibility(index)} // Tıklama olayı
      >
        <span className="flex items-center">
          <span
            className="lg:w-2 lg:h-2 w-3 h-3 rounded-full lg:mr-2 mr-3"
            style={{
              backgroundColor: currentData.datasets[0].backgroundColor[index],
            }}
          ></span>
          {label.split(" (")[0]}{" "}
          {/* Yaş grubu, cihaz ya da tarayıcı kısmını gösteriyoruz */}
        </span>
        <span>{label.split("(")[1].replace(")", "")}</span>{" "}
        {/* Sayıyı gösteriyoruz */}
      </li>
    ));
  };

  return (
    <div className="flex flex-col items-center  justify-center items-center w-full p-4 lg:p-5 mx-1 my-1 bg-white lg:rounded-xl rounded-lg shadow-xl lg:shadow-lg">
      {/* Üst kısımda logo, başlık ve ayar butonu */}
      <div className="flex justify-between w-full  items-center mb-3 lg:mb-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />{" "}
          {/* Logo */}
          <h1 className="text-lg lg:text-xl text-black font-bold ">User Information Chart</h1>
        </div>
        <div>
          <button className="text-gray-700">
            <svg
              className="lg:w-5 lg:h-5  w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6h.01M12 12h.01M12 18h.01"
              />
            </svg>
          </button>{" "}
          {/* Ayarlar butonu */}
        </div>
      </div>

      {/* Sekme bölümü */}
      <div className="flex justify-between lg:justify-around w-full mb-6">
        <button
          className={` px-2 py-1 lg:px-4 lg:py-2 text-base lg:text-sm font-semibold ${
            activeTab === "age"
              ? "bg-blue-500 text-white rounded-md lg:rounded-lg "
              : "bg-white text-gray-700"
          } rounded-l-md`}
          onClick={() => setActiveTab("age")}
        >
          Age Statistic
        </button>
        <button
          className={`px-2 py-1 lg:px-4 lg:py-2 text-base lg:text-sm font-semibold ${
            activeTab === "devices"
              ? "bg-blue-500 text-white rounded-md lg:rounded-lg"
              : "bg-white text-gray-700"
          }`}
          onClick={() => setActiveTab("devices")}
        >
          Devices Statistic
        </button>
        <button
          className={`px-2 py-1 lg:px-4 lg:py-2 text-base lg:text-sm font-semibold ${
            activeTab === "browser"
              ? "bg-blue-500 text-white rounded-md lg:rounded-lg"
              : "bg-white text-gray-700"
          } rounded-r-md`}
          onClick={() => setActiveTab("browser")}
        >
          Web Browser Statistic
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-start lg:justify-between">
        {/* Grafik alanı sol tarafta */}
        <div className="w-full lg:w-1/3 justify-center items-center">
          <div style={{ width: "500px", height: "400px",  }   }>
            {" "}
            {/* Inline stil ile boyut belirliyoruz */}
            <Doughnut
              data={renderChartData()}
              options={options}
              ref={chartRef}
            />
          </div>
        </div>

        {/* Veri listesi sağda */}
        <div className="w-full lg:w-1/3 pt-1 lg:pl-8 flex flex-col justify-center space-y-2 lg:space-y-1 lg:mt-1 mt-4">
          <h2 className="lg:text-base text-black font-semibold mb-3 lg:mb-2">{renderChartTitle()}</h2>
          <ul className="text-gray-700 font-semibold space-y-3">
            {renderLabels()}{" "}
            {/* Sağdaki veri listesini dinamik olarak render ediyoruz */}
          </ul>
        </div>
      </div>
    </div>
  );
}
