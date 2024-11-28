import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector, useDispatch } from "react-redux";
import "./styles/Navbar.css";

const Navbar =  ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const clearUser = () => {
    dispatch({ type: "CLEAR_USER" });
    navigate("/login");
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   localStorage.removeItem("currentUser");
  //   navigate("/login");
  // };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query to the parent
  };

  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <h1 className="organizationName">Your Recipe</h1>
      </div>
      <div className="midnav">
      <input
              type="text"
              className="search-bar"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={handleSearch}
            />
      </div>
      <div className="navbarRight">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/recipe" className="nav-link">
          RecipeList
        </Link>
        {currentUser && (
          <div className="userSection">
            <span className="userProfile">
              <div className="showName">{currentUser.name}</div>
              <div className="showEmail">{currentUser.email}</div>
            </span>
            <Fab size="small" color="primary" aria-label="user">
              <PersonIcon />
            </Fab>
            <button className="hideLogout" onClick={clearUser}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
