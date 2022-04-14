import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import App from "./App";
import UserList from "./components/User/UserList";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Navbar />
        <div className="container my-3">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>
);
