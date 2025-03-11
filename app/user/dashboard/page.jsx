"use client";
import { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiSearch } from "react-icons/fi";
import { FaUser, FaChartPie } from "react-icons/fa";


export const page = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const projectData = [
      { name: "Jan", user: 200, views: 120, contact: 250 },
      { name: "Feb", user: 300, views: 150, contact: 290 },
      { name: "Mar", user: 250, views: 180, contact: 300 },
      { name: "Apr", user: 400, views: 200, contact: 350 },
      { name: "May", user: 350, views: 220, contact: 370 },
    ];
  
    const revenueData = [
      { name: "Mobile Apps", value: 40 },
      { name: "Web Development", value: 25 },
      { name: "SEO", value: 20 },
      { name: "Software", value: 15 },
    ];
    const COLORS = ["#FF5733", "#33FF57", "#3380FF", "#FF33A1"];


  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 mt-10 mb-4">
      {/* Sidebar */}
      <aside className={`w-64 bg-gray-800 p-4 ${sidebarOpen ? "block" : "hidden"}`}>
        <h2 className="text-xl font-bold mb-6">FlexPay</h2>
        <ul>
          <li className="mb-4 flex items-center gap-2"><FaUser /> Overview</li>
          <li className="mb-4 flex items-center gap-2"><FaChartPie /> Revenue</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <FiSearch className="absolute left-2 top-3 text-gray-500" />
            <input type="text" placeholder="Search anything" className="pl-8 p-2 rounded bg-gray-700 text-white" />
          </div>
          <div className="flex items-center gap-4">
            <span>Steve Smith</span>
            <img src="/profile.jpg" className="w-10 h-10 rounded-full" alt="Admin" />
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectData}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="user" stroke="#FF5733" strokeWidth={2} />
              <Line type="monotone" dataKey="views" stroke="#33FF57" strokeWidth={2} />
              <Line type="monotone" dataKey="contact" stroke="#3380FF" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Overview */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="flex items-center">
            <PieChart width={200} height={200}>
              <Pie data={revenueData} cx={100} cy={100} outerRadius={80} fill="#8884d8" dataKey="value">
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="ml-4">
              {revenueData.map((item, index) => (
                <p key={index} className="text-sm mb-1" style={{ color: COLORS[index] }}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page