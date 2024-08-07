import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { LiaSatelliteDishSolid } from "react-icons/lia";
import ReactStars from "react-rating-stars-component";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { TbCalendarEvent } from "react-icons/tb";
import "./Responsivetable.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// Sample data
const data = [
  { x: 5, y: 5000 },
  { x: 7, y: 10000 },
  { x: 9, y: 15000 },
  { x: 11, y: 20000 },
  { x: 13, y: 25000 },
  { x: 15, y: 30000 },
  { x: 17, y: 35000 },
];
// recent orders
const recentOrders = [
  {
    image: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
    name: "Wade waren",
    orderNumber: "67e68e3987",
    Amount: "#124.00",
    status: "Delivered",
  },
  {
    image: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
    name: "Wade Hina",
    orderNumber: "67e3987",
    Amount: "#134.00",
    status: "Delivered",
  },
  {
    image: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
    name: "Dida Hina",
    orderNumber: "67e3687g987",
    Amount: "#144.00",
    status: "Cancelled",
  },
  {
    image: "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
    name: "jinga ullas",
    orderNumber: "67ejha87g987",
    Amount: "#154.00",
    status: "Pending",
  },
];
// order data
const orderData = [
  {
    color: "blue",
    icon: <MdDoNotDisturbOnTotalSilence />,
    text: "Total Orders",
    count: "75",
    icon2: <MdOutlineArrowDropDown />,
    percent: "3%",
  },
  {
    color: "orange",
    icon: <AiOutlineDeliveredProcedure />,
    text: "Total Delivered",
    count: "70",
    icon2: <MdOutlineArrowDropUp />,
    percent: "3%",
  },
  {
    color: "red",
    icon: <MdOutlineFreeCancellation />,
    text: "Total Cancelled",
    count: "05",
    icon2: <MdOutlineArrowDropDown />,
    percent: "3%",
  },
  {
    color: "blue",
    icon: <TbCalendarEvent />,
    text: "Total Revenue",
    count: "$12K",
    icon2: <MdOutlineArrowDropUp />,
    percent: "3%",
  },
];
// card data
const cardData = [
  { color: "red", icon: <GoGoal />, text: "Goals" },
  { color: "blue", icon: <LuMenuSquare />, text: "Menus" },
  {
    color: "orange",
    icon: <LiaSatelliteDishSolid />,
    text: "Dishes",
  },
];

const Dashboard = () => {
  const [rating, setRating] = useState(3);
  const percentage = 66;

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-gray-900 p-4 flex flex-col gap-4 h-[93vh] overflow-auto">
      <div className="text-white text-xl">Dashboard</div>
      <div className="flex gap-5 flex-col md:flex-row">
        {/* right side design */}
        <div className="flex flex-col gap-8">
          {/* Net Profit */}
          <div className="bg-[#2A2E34] rounded flex justify-between items-center w-[25rem] gap-4 p-2">
            <div className="flex flex-col gap-4">
              <div className="text-[1rem] text-white">Net Profit</div>
              <div className="text-lg text-[2rem] text-white">$6759.25</div>
              <span className="text-green-700 flex gap-2 justify-start items-center text-[1rem]">
                <MdOutlineArrowDropUp />
                <span>3%</span>
              </span>
            </div>
            <div className="flex flex-col gap-2 h-[7rem] w-[9rem]">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
              <span className="text-white text-[0.6rem]">
                The Value has been rounded off
              </span>
            </div>
          </div>
          {/* Goals, Dishes, Menus */}
          <div className="bg-[#2A2E34] rounded flex flex-col justify-between items-center w-[25rem] gap-4 p-2">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between w-[100%] items-center"
              >
                <div className="flex gap-2 items-center">
                  <div
                    className={`h-10 w-10 flex items-center justify-center rounded-full bg-${item.color}-400 opacity-60`}
                  >
                    <span className={`text-[1rem] text-${item.color}-500`}>
                      {item.icon}
                    </span>
                  </div>
                  <div className="text-white">{item.text}</div>
                </div>
                <div className="text-white flex justify-center items-center bg-gray-500 rounded-full h-6 w-6">
                  <span className="p-2">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Customer's Feedback */}
          <div className="bg-[#2A2E34] w-[25rem] rounded flex flex-col gap-3 p-2">
            <div className="text-white text-lg">Customer's Feedback</div>
            {[
              {
                image:
                  "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
                name: "Jenny Wilson",
                message:
                  "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. ",
              },
              {
                image:
                  "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
                name: "Jenny Wilson",
                message:
                  "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. ",
              },
            ].map((item, index) => {
              return (
                <div className="border-b border-gray-400 py-2" key={index}>
                  <div className="flex gap-2">
                    <img
                      className="rounded-full"
                      height={20}
                      width={22}
                      src={item.image}
                      alt="image"
                    />
                    <div className="text-white">{item.name}</div>
                  </div>
                  <div className="flex">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      value={rating}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="text-gray-400 text-[0.756rem]">
                    {item.message}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* left side design */}
        <div className="flex gap-8 flex-col">
          <div className="flex w-[100%] gap-5">
            {orderData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#2A2E34] rounded p-4 flex gap-4 h-32"
                >
                  <div className="flex flex-col justify-between">
                    <div
                      className={`bg-${item.color}-400 p-2 w-6 h-6 rounded flex justify-center items-center`}
                    >
                      <span className={`text-${item.color}-600`}>
                        {item.icon}
                      </span>
                    </div>
                    <div className="text-white text-[0.8rem]">{item.text}</div>
                    <div className="text-white font-extrabold">
                      {item.count}
                    </div>
                  </div>
                  <div className={`flex items-end justify-center`}>
                    <span className={`text-red-600`}>{item.icon2}</span>
                    <span className={`text-red-600`}>{item.percent}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="bg-[#2A2E34] rounded p-2"
            style={{ width: "100%", height: 400 }}
          >
            <ResponsiveContainer>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="x"
                  tickFormatter={(value) => value}
                  label={{
                    value: "X Axis",
                    position: "insideBottomRight",
                    offset: 0,
                  }}
                />
                <YAxis
                  tickFormatter={(value) => `${value / 1000}k`}
                  label={{
                    value: "Y Axis",
                    angle: -90,
                    position: "insideLeft",
                    offset: 0,
                  }}
                />
                {/* <Tooltip /> */}
                <Legend />
                <Bar dataKey="y" fill="#8884d8" barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-[#2A2E34] rounded flex flex-col gap-2 p-2">
            <div className="text-white font-semibold text-lg">
              Recent Orders
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Order Number</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={order.image}
                          alt={order.name}
                          className="order-image"
                        />
                      </td>
                      <td>{order.name}</td>
                      <td>{order.orderNumber}</td>
                      <td>{order.Amount}</td>
                      <td>
                        <div className={`status ${order.status.toLowerCase()}`}>
                          {order.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
