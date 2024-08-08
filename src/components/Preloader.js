// src/components/Preloader/Preloader.js
import React from "react";
import "./Preloader.css";

const Preloader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex items-center space-x-2 animate-bounce">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-700">
                Loading your expenses... 💸💰
            </p>
            <p className="mt-2 text-gray-500">Counting all the coins...</p>
        </div>
    );
};

export default Preloader;
