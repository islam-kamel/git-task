import Movies from "./components/Movies";
import {Route, Routes} from "react-router-dom";
import RenderDown from "./components/RenderDown/RenderDown";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LogIN from './components/HomePage/LogIN';

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<RenderDown/>}></Route>
                <Route path={"/movies"} element={<Movies/>}></Route>
                <Route path={"/login"} element={<LogIN/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
