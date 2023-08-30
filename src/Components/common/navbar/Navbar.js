import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../../data/navbar-links";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect } from "react";
import { apiConnector } from "../../../services/apiConnector";
import { categories } from "../../../services/api";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const [subLinks, setSubLinks] = useState([]);

  async function getCategories() {
    try {
      const result = await apiConnector("GET", categories.GET_CATEGORIES);
      setSubLinks(result.data.Category);
    } catch (error) {
      console.log(error);
      console.log("could fund the categories");
    }
  }

  // console.log(subLinks)

  useEffect(() => {
    getCategories();
  }, []);

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
          <img src={logo} width={"150px"} height={"35px"} loading="lazy" />
        </Link>
      </div>
      <div className="navbar-main">
        {NavbarLinks.map((element, index) => {
          {
            return (
              <li key={index}>
                {element.title === "Catalog" ? (
                  <div
                    className={`container ${
                      isDropdownHovered ? "hovered" : ""
                    }`}
                    onMouseEnter={() => setIsDropdownHovered(true)}
                    onMouseLeave={() => setIsDropdownHovered(false)}
                  >
                    <p>
                      {element.title} <BiChevronDown />
                    </p>
                    {isDropdownHovered && (
                      <div className="dropdown-content">
                        {subLinks.length > 0 &&
                          subLinks.map((element, index) => {
                            return (
                              <Link to={`/catalog/${element.name}`} key={index}>
                                <p>{element.name}</p>
                              </Link>
                            );
                          })}
                      </div>
                    )}
                  </div>
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
      {/* <nav></nav> */}
      {/* {"login signup dashboard"} */}

      {user && user?.accountType !== "Instructor" && (
        <div className="dashboardnavs">
          <Link to={"/dashboard/cart"} style={{ position: "relative" }}>
            <AiOutlineShoppingCart />
            {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        </div>
      )}

      <div className="loginsignupbtnmain">
        {token === null && (
          <Link to="/login">
            <button className="Button">Login</button>
          </Link>
        )}

        {token === null && (
          <Link to="/signup">
            <button className="Button">Signup</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
