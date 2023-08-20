import React from "react";
import "./Navbar.css";
import logo from "../../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../../data/navbar-links";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  function matchRoute(link) {
    return matchPath(link, location.pathname);
  }

  function matchPath(link, pathname) {
    if (link === pathname) {
      return true;
    }
    return false;
  }

  return (
    <div className="main">
      <div className="logo">
        <Link to="/">
          <img src={logo} width={"100px"} height={"25px"} loading="lazy" />
        </Link>
      </div>
      <div className="navbar-main">
        {NavbarLinks.map((element, index) => {
          {
            return (
              <li key={index}>
                {element.title === "Catalog" ? (
                  <p
                    style={{
                      color: "azure",
                      cursor: "pointer",
                    }}
                  >
                    Catalog
                  </p>
                ) : (
                  <Link to={element?.path} key={index}>
                    <p
                      className="title"
                      style={{
                        color: matchRoute(element?.path) ? "yellow" : "azure",
                      }}
                    >
                      {element.title}
                    </p>
                  </Link>
                )}
              </li>
            );
          }
        })}
      </div>
    {/* {" nav links"} */}
      <nav>

      </nav>
      {/* {"login signup dashboard"} */}
      <div className="loginsignupbtnmain">

      </div>
    </div>
  );
};

export default Navbar;
