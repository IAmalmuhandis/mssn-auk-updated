import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Reciept from "./components/reciept/Reciept";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*voters dashboard  */}
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Main />} />
          <Route path="/abc" element={<Reciept />} />
        </Routes>
        {/* )
        } */}
      </BrowserRouter>
    </div>
  );
};

export default App;
