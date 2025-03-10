import './App.css';
import Layout from "./components/Layout";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Works from "./components/Works";
import WorkItems from "./components/WorkItems";
import Home from "./components/Home";
import Studio from "./components/Studio";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/works" element={<Works/>}/>
                        <Route path="/workItems" element={<WorkItems/>}/>
                        <Route path="/studio" element={<Studio/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
