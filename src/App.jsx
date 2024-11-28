import React from "react";
import "./Components/LoginForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import SignupForm from "./Components/SignupForm";
import ListRecipe from "./Components/ListRecipe";
import RecipeDetails from "./Components/RecipeDetails"

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      <Routes>
     
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm />}
        />
         <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe" element={<ListRecipe />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/recipe-details/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

