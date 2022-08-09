import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/dashboard/:id" />
          <Route path="/signup/" />
          <Route path="/" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
