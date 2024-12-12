import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevents the default anchor behavior
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header-scrolled fixed-top mb-5" id="navbar">
        <div className="container">
          {/* Navbar Brand */}
          <a className="navbar-brand" href="#">Sangin</a>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar */}
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/Home" aria-current="page">صحفه اصلی</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/About">خدمات</a>
              </li>

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="booksDropdown"
                  role="button"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  کتاب ها
                </a>
                <ul
                  className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                  aria-labelledby="booksDropdown"
                >
                  <li><a className="dropdown-item" href="/Book1"> اقتصاد و تجارت</a></li>
                  <li><a className="dropdown-item" href="/Book2">تاریخی</a></li>
                  <li><a className="dropdown-item" href="/Book3">داستانی</a></li>
                  <li><a className="dropdown-item" href="/Book4">برنامه‌نویسی</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/Contact">تماس با ما</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
