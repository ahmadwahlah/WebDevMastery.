import React from "react";
import Laptop from "../assets/laptop.jpg";

function Dashboard() {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2"></div>
      <img src={Laptop} alt="/" />
      <div>
        <p>WEB DEVELOPMENT DASHBOARD</p>
        <h1>Streamline Your Web Projects</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta beatae
          omnis obcaecati aliquam, quisquam et eligendi officia atque, quam
          corrupti consequatur commodi mollitia non, assumenda aliquid hic at
          possimus nihil?
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
