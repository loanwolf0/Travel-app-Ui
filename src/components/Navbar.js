import { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItemes">
        <h1 className="navbar-logo"> Tripy </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icons}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <button> Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
