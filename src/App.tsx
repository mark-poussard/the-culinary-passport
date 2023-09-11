import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Paris } from "./components/Paris/Paris";
import { Montreal } from "./components/Montreal/Montreal";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
    const [scrollableClassName, setScrollableClassName] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setScrollableClassName("scrollable");
        }, 3600);
    }, []);
    return (
        <div className={`app-container ${scrollableClassName}`}>
            <div className="app app-container-child">
                <HashRouter>
                    <Header />
                    <Routes>
                        <Route path={"/paris"} element={<Paris />}></Route>

                        <Route
                            path={"/montreal"}
                            element={<Montreal />}
                        ></Route>

                        <Route path={"/"} element={<Paris />}></Route>
                    </Routes>
                    <Footer />
                </HashRouter>
            </div>
        </div>
    );
}

export default App;
