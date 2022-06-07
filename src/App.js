
import Navbar from "./screens/Navbar/Navbar";
import Routess from "./Routess";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import DocumentViewer from "./screens/Viewer/DocumentViewer";
import React from "react";

function App() {
  return (

    <div>
        <BrowserRouter>
            <Navbar />
            <div className="xl:ml-80">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path='/document' element={<DocumentViewer />} />
                    </Routes>
            </div>

        </BrowserRouter>

  </div>
  );
}

export default App;
