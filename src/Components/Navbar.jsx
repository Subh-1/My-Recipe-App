import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector, useDispatch } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./styles/Navbar.css";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const clearUser = () => {
    dispatch({ type: "CLEAR_USER" });
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  const getMenuClass = () => {
    return `menusHidden ${menuVisible ? "active" : ""}`;
  };
  
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <p className="organization-name">Your Recipe</p>
      </div>
      <div className="searchComponent">
        <input
          type="text"
          className="search-bar"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="navbarRight">
        <div className="menus">
          <Link to="/createRecipe" className="nav-link">
            Create Recipe
          </Link>
          <Link to="/yourRecipe" className="nav-link">
            My Recipes
          </Link>
        </div>
        {currentUser && (
          <div className="userSection">
            <span className="userProfile">
              <div>{currentUser.name}</div>
              <div>{currentUser.email}</div>
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
      <i
        style={{ fontSize: "20px" }}
        className="fa fa-bars"
        onClick={toggleMenu}
      ></i>
    <div>
      <div className={getMenuClass()}>
        <div className="mobileView">
        <Fab size="small" color="primary" aria-label="user" className="personIcon">
          <PersonIcon />
        </Fab>
        {currentUser && (
          <div className="userSection">
            <span className="SmallUserProfile">
              <div>{currentUser.name}</div>
              <div>{currentUser.email}</div>
            </span>
          </div>)}
          </div>
          <button className="mobileLogout" onClick={clearUser}>
              Logout
            </button>
        <div className="menuContainer">
          <Link to="/createRecipe" className="nav-link">
            Create Recipe
          </Link>
          <Link to="/yourRecipe" className="nav-link">
            My Recipes
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
