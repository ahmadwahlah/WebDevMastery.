import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Dashboard />
      </div>
    </div>
  );
}
