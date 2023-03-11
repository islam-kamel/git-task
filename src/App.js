import Movies from "./components/Movies";
import {Route, Routes} from "react-router-dom";
import RenderDown from "./components/RenderDown/RenderDown";
import React from "react";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<RenderDown/>}></Route>
                <Route path={"/movies"} element={<Movies/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
