import { FaUsers, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function Content() {
  const stats = [
    {
      title: "Users",
      value: "1,245",
      icon: <FaUsers size={24} className="text-blue-500" />,
    },
    {
      title: "Revenue",
      value: "$12,340",
      icon: <FaDollarSign size={24} className="text-green-500" />,
    },
    {
      title: "Growth",
      value: "+23%",
      icon: <FaChartLine size={24} className="text-purple-500" />,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition"
          >
            <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
            <div>
              <h2 className="text-gray-500 text-sm">{stat.title}</h2>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-md p-6 h-64 flex items-center justify-center text-gray-400">
        📊 Chart will go here
      </div>
    </div>
  );
}
