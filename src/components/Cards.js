import React from "react";
import { FaFileCode, FaUserCheck } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

function Card() {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <FaFileCode className="w-20 mx-auto mt-[-2rem] bg-white" size={50} />
          <h2 className="text-center font-bold py-8 text-2xl">
            WebStart Essentials
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 border-t ">
              Learn HTML, CSS, JavaScript.
            </p>
            <p className="py-2 border-b mx-8 ">
              Interactive courses & exercises.
            </p>
            <p className="py-2 border-b mx-8 ">Get a certificate.</p>
          </div>
          <button className="hover:bg-[#00df9a] bg-[#00df98d6] w-[200p×] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>

        <div className="w-full bg-gray-100 shadow-xl flex flex-col py-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300">
          <FaUserCheck
            className="w-20 mx-auto mt-[-2rem] bg-transparent"
            size={50}
          />
          <h2 className="text-center font-bold py-8 text-2xl">
            DevPro Mastery
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 border-t ">
              Master React, Node.js, SQL.
            </p>
            <p className="py-2 border-b mx-8 ">
              Build projects & attend webinars.
            </p>
            <p className="py-2 border-b mx-8 ">Get certified.</p>
          </div>
          <button className="hover:bg-[#222222]  text-[#00df9a] bg-black  w-[200p×] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <MdAnalytics className="w-20 mx-auto mt-[-2rem] bg-white" size={65} />
          <h2 className="text-center font-bold py-8 text-2xl">
            OptiBoost Consult
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 border-t ">
              Boost revenue with consulting.
            </p>
            <p className="py-2 border-b mx-8 ">Analysis & A/B testing.</p>
            <p className="py-2 border-b mx-8 ">Dedicated consultant.</p>
          </div>
          <button className="hover:bg-[#00df9a] bg-[#00df98d6] w-[200p×] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
