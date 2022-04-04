import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { createContext } from "react";
import Reviews from "./components/Reviews.jsx";
import QandA from "./components/QandA";

export const ReviewsContext = createContext();

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <ReviewsContext.Provider value={[reviews, setReviews]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/q&a" element={<QandA />} />
        </Routes>
      </ReviewsContext.Provider>
    </div>
  );
}

export default App;
