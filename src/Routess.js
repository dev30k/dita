import React from 'react';
import Home from "./screens/Home/Home";
import {BrowserRouter as  Router,Routes, Route, Link} from "react-router-dom";
import DocumentViewer from "./screens/Viewer/DocumentViewer";

function Routess(props) {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Home}/>
                <Route path='/document' component={DocumentViewer} />
            </Routes>
        </Router>
    );
}

export default Routess;