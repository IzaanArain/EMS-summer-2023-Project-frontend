import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import NotFoundPage from "./Pages/NotFoundPage";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";
import AllEventList from "./Components/AllEventsComponents/AllEventList";
function App() {
  const { user, isLoading, isError } = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);
  console.log("App.js Auth State: ", auth);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="Pages">
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
               <Route
                path="/allevents"
                element={user ? <AllEventList /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
