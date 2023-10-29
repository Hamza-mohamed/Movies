import React,{useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useSelector} from "react-redux";
import { languageContext } from "../../contexts/language";

const Header = (props) => {
  const {language,setlanguage}= useContext(languageContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/todo`;
    navigate(path);
  };

  const myFavList1 = useSelector((state) => state.myFavs.fav);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <NavLink to="/todo" className="nav-link  active">
            todo app
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link  active"
                  aria-disabled="true"
                >
                  Home
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item  ">
                <NavLink
                  to="/movies"
                  className="nav-link  active"
                  aria-disabled="true"
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item  ">
                <Link to="/fav" className="nav-link">
                  fav
                </Link>
              </li>
              <li className="nav-item  ">
                <h1 className="fs-3">{myFavList1.length}</h1>
              </li>
              <li className="nav-item mx-5  bg-dark border rounded">
                <Link to="/login" className="nav-link">
                  log In
                </Link>
              </li>
              <li className="nav-item bg-dark border rounded me-5">
                <Link to="/signup" className="nav-link bg-success text-white">
                  signUp
                </Link>
              </li>
              <li className="nav-item  border rounded me-5">
        <h1> {language}</h1> 
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
