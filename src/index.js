import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RenderDown from "./components/RenderDown/RenderDown";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/markdown"} element={<RenderDown/>}></Route>
                <Route path={"/"} element={<App/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);