"use client";
import { useState, useRef, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartType } from "chart.js";
import { FiPieChart } from "react-icons/fi";

ChartJS.register(ArcElement, Tooltip, Legend);

// Farklı sekmelere ait veriler (Age Data)
const data1 = 124;
const data2 = 200;
const data3 = 273;
const data4 = 368;
const data5 = 546;
const data6 = 453;
const data7 = 122;
const data8 = 89;

// Devices Data
const mobileData = 640;
const desktopData = 560;
const tabletData = 280;

// Browser Data
const chromeData = 720;
const firefoxData = 310;
const safariData = 220;
const edgeData = 170;

// Dinamik renk hesaplama fonksiyonu
const getColorByValue = (value: number, minValue: number, maxValue: number) => {
  const lightness = 90 - ((value - minValue) / (maxValue - minValue)) * 60; // Açık tonlardan koyuya
  return `hsl(220, 90%, ${lightness}%)`; // Mavi tonları (hue 220) için HSL formatında
};

// Age Data için min-max ve renk hesaplama
const ageValues = [data1, data2, data3, data4, data5, data6, data7, data8];
const ageMinValue = Math.min(...ageValues);
const ageMaxValue = Math.max(...ageValues);

const ageData = {
  labels: [], // Etiketleri boş bir dizi olarak ayarlıyoruz
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
  labels: [],
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
  labels: [],
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
const getOptions = (activeTab: string) => ({
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "#3b82f6",
      titleColor: "#ffffff",
      titleFont: {
        size: 14,
        weight: "bold" as const,
      },
      bodyColor: "#ffffff",
      bodyFont: {
        size: 12,
      },
      padding: 10,
      cornerRadius: 8,
      displayColors: false,
      borderColor: "#1e40af",
      borderWidth: 1,
      callbacks: {
        label: function (tooltipItem: { dataIndex: number; raw: number }) {
          let labels: any[];
          switch (activeTab) {
            case "age":
              labels = [
                "0-12 yaş", "13-17 yaş", "18-24 yaş", "25-34 yaş",
                "35-44 yaş", "45-54 yaş", "55-64 yaş", "64+ yaş"
              ];
              break;
            case "devices":
              labels = ["Mobil", "Masaüstü", "Tablet"];
              break;
            case "browser":
              labels = ["Chrome", "Firefox", "Safari", "Edge"];
              break;
            default:
              labels = [];
          }
          const dataIndex = tooltipItem.dataIndex;
          const label = labels[dataIndex];
          const value = tooltipItem.raw;
          return `${label}: ${value}`;
        },
      },
    },
  },
});

interface HiddenStates {
  age: boolean[];
  devices: boolean[];
  browser: boolean[];
}

type TabType = keyof HiddenStates;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("age");
  const chartRef = useRef<ChartJS<"doughnut", number[], string>>(null);
  const [hiddenStates, setHiddenStates] = useState<HiddenStates>({
    age: Array(ageValues.length).fill(false),
    devices: Array(devicesValues.length).fill(false),
    browser: Array(browserValues.length).fill(false),
  });

  const toggleDatasetVisibility = (index: number) => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const meta = chart.getDatasetMeta(0);
      
      // Görünürlük durumunu state'den kontrol edelim
      const isCurrentlyHidden = hiddenStates[activeTab][index];
      
      // Veriyi gizle/göster
      if (meta.data[index]) {
        meta.data[index].hidden = !isCurrentlyHidden;
        chart.update();
      }
      
      // State'i güncelle
      setHiddenStates(prev => ({
        ...prev,
        [activeTab]: prev[activeTab].map((hidden, i) => 
          i === index ? !hidden : hidden
        )
      }));
    }
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
    let labels: (string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined)[];
    switch (activeTab) {
      case "age":
        labels = [
          "0-12 yaş", "13-17 yaş", "18-24 yaş", "25-34 yaş",
          "35-44 yaş", "45-54 yaş", "55-64 yaş", "64+ yaş"
        ];
        break;
      case "devices":
        labels = ["Mobil", "Masaüstü", "Tablet"];
        break;
      case "browser":
        labels = ["Chrome", "Firefox", "Safari", "Edge"];
        break;
      default:
        labels = [];
    }

    return currentData.datasets[0].data.map((value, index) => (
      <li
        key={index}
        className={`flex items-center justify-between text-lg cursor-pointer ${
          hiddenStates[activeTab][index] ? "line-through text-gray-200" : ""
        }`}
        onClick={() => toggleDatasetVisibility(index)}
      >
        <span className="flex items-center">
          <span
            className="w-3 h-3 rounded-full mr-2"
            style={{
              backgroundColor: currentData.datasets[0].backgroundColor[index],
            }}
          ></span>
          {labels[index]}
        </span>
        <span>{value}</span>
      </li>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-md">
      {/* Üst kısımda logo, başlık ve ayar butonu */}
      <div className="flex justify-between w-full items-center mb-4">
        <div className="flex items-center">
          <FiPieChart className="w-6 h-6 mr-2 text-gray-500" />
          <h1 className="text-gray-600 text-l font-bold">User Information Chart</h1>
        </div>
        <div>
          <button className="text-gray-700">
            <svg
              className="w-6 h-6"
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
          </button>
        </div>
      </div>

      {/* Sekme bölümü */}
      <div className="w-full mb-6">
        <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "age"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("age")}
          >
            Age Statistic
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "devices"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("devices")}
          >
            Devices Statistic
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "browser"
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab("browser")}
          >
            Web Browser Statistic
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl justify-between">
        {/* Grafik alanı sol tarafta */}
        <div className="w-full lg:w-2/3">
          <div style={{ width: "400px", height: "400px", margin: "auto" }}>
            <Doughnut
              data={renderChartData()}
              options={getOptions(activeTab)}
              ref={chartRef}
            />
          </div>
        </div>

        {/* Veri listesi sağda */}
        <div className="w-full lg:w-1/3 pl-8 flex flex-col justify-center space-y-2 mt-4 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">{renderChartTitle()}</h2>
          <ul className="text-gray-700 font-semibold space-y-2">
            {renderLabels()}
          </ul>
        </div>
      </div>
    </div>
  );
}
