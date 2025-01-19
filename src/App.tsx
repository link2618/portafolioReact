import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useTranslation } from "react-i18next";

import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/ResumeNew";
import Footer from "./components/Footer";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [load, upadateLoad] = useState(true);

    const { i18n } = useTranslation();

    useEffect(() => {
        const updateHtmlLang = () => {
            document.documentElement.lang = i18n.language;
        };

        updateHtmlLang();

        i18n.on("languageChanged", updateHtmlLang);

        return () => {
            i18n.off("languageChanged", updateHtmlLang);
        };
    }, [i18n]);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
