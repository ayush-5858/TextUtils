import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // State to control the navbar toggle
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle toggle button click
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to collapse the navbar
  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevents page reload
    const searchQuery = event.target.search.value; // Gets the search input value
    if (searchQuery.trim().length === 0) {
      props.showAlert("Enter something to search.", "warning");
    } else {
      props.showAlert(
        `No such content related to "${searchQuery}" is found!!`,
        "warning"
      );
      event.target.search.value = "";
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode}
      id="alert-message"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleCollapse}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                aria-current="page"
                onClick={handleCollapse}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleCollapse}>
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode();
                handleCollapse();
              }}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {`Enable ${props.modeText} Mode`}
            </label>
          </div>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
