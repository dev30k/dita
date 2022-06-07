import Navbar from "./screens/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home/Home";
import DocumentViewer from "./screens/Viewer/DocumentViewer";
import React from "react";
import Research from "./screens/ReasearchPapers/Research";
import Forum from "./screens/Forums/Forum";

function App() {
  return (

    <div>
        <BrowserRouter>
            <Navbar />
            <div className="xl:ml-80">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path='/document' element={<DocumentViewer />} />
                        <Route path='/researchpapers' element={<Research />} />
                        <Route path='/forum' element={<Forum />} />

                    </Routes>
            </div>

        </BrowserRouter>

  </div>
  );
}

export default App;
