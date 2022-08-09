import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <ToastContainer autoClose={3000} />
        <Routes>
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
