// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Analytics from "./components/Analytics/Analytics";
import Preloader from "./components/Preloader";
import { AppProvider } from "./Context/AppContext";
import "./styles/styling.css";

function App() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000); // Duration of fade-out transition
        }, 3000); // Duration of preloader display

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <AppProvider>
                {loading ? (
                    <div className={`transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
                        <Preloader />
                    </div>
                ) : (
                    <div className="app flex h-screen transition-opacity duration-1000 opacity-100">
                        <Sidebar />
                        <div className="flex-1 flex place-content-center py-3 overflow-hidden">
                            <div className="content shadow-lg bg-white rounded-2xl p-4">
                                <Routes>
                                    <Route path="/" exact element={<Home />} />
                                    <Route path="/analytics" element={<Analytics />} />
                                    <Route path="*" element={<Home />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                )}
            </AppProvider>
        </Router>
    );
}

export default App;
