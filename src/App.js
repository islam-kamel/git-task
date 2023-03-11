import Movies from "./components/Movies";
import {Route, Routes} from "react-router-dom";
import RenderDown from "./components/RenderDown/RenderDown";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<RenderDown/>}></Route>
                <Route path={"/movies"} element={<Movies/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
