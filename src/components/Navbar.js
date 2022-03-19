import React from "react";
import ReactDOM from "react-dom";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
    this.servicesMenu = React.createRef();
    this.trainingMenu = React.createRef();
    this.memberMenu = React.createRef();
    this.coachesMenu = React.createRef();
  }

  toggleMobileDropdown(ref) {
    const node = ReactDOM.findDOMNode(ref.current);
    node.classList.toggle("is-hidden-touch");
    node.classList.toggle("mobile-border");
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            className="navbar-brand"
            style={
              this.state.active
                ? { background: "black", display: "flex", alignItems: "center" }
                : { display: "flex", alignItems: "center" }
            }
          >
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="ATC" className="logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
            style={this.state.active ? { background: "black", padding: 0 } : {}}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/start-here">
                Start Here
              </Link>
              <a
                className="navbar-item"
                href="https://clients.mindbodyonline.com/classic/ws?studioid=30262&stype=-2&subTab=account"
              >
                Join
              </a>

              <Link className="navbar-item" to="/features">
                Features
              </Link>

              <div className="navbar-item has-dropdown is-hoverable dropDownItem">
                <div
                  className="navbar-link"
                  onClick={() => this.toggleMobileDropdown(this.servicesMenu)}
                  onKeyPress={() =>
                    this.toggleMobileDropdown(this.servicesMenu)
                  }
                  role="menuitem"
                  tabIndex={0}
                >
                  Services
                </div>
                <div
                  className="navbar-dropdown is-hidden-touch"
                  ref={this.servicesMenu}
                  onClick={() => this.toggleHamburger()}
                  onKeyPress={() => this.toggleHamburger()}
                >
                  <a
                    href="http://energylabatl.com/swim-coaching-2/"
                    className="navbar-item"
                  >
                    Swim Coaching
                  </a>
                  <a
                    href="https://energylabatl.com/triathlon-coaching/"
                    className="navbar-item"
                  >
                    Triathlon Coaching
                  </a>
                  <Link to="/membership-options" className="navbar-item">
                    Group Training
                  </Link>
                  <a href="https://atltristars.com/" className="navbar-item">
                    Kids
                  </a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable dropDownItem">
                <div
                  className="navbar-link"
                  onClick={() => this.toggleMobileDropdown(this.trainingMenu)}
                  onKeyPress={() =>
                    this.toggleMobileDropdown(this.trainingMenu)
                  }
                  role="menuitem"
                  tabIndex={0}
                >
                  Training
                </div>
                <div
                  className="navbar-dropdown is-hidden-touch"
                  ref={this.trainingMenu}
                  onClick={() => this.toggleHamburger()}
                  onKeyPress={() => this.toggleHamburger()}
                >
                  <Link to="/#" className="navbar-item">
                    Training Locations
                  </Link>
                  <a
                    href="https://clients.mindbodyonline.com/classic/ws?studioid=30262&stype=-2&subTab=account"
                    className="navbar-item"
                  >
                    Class Registration
                  </a>
                  <Link to="/features" className="navbar-item">
                    Training Tips
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable dropDownItem">
                <div
                  className="navbar-link"
                  onClick={() => this.toggleMobileDropdown(this.memberMenu)}
                  onKeyPress={() => this.toggleMobileDropdown(this.memberMenu)}
                  role="menuitem"
                  tabIndex={0}
                >
                  Member Links
                </div>
                <div
                  className="navbar-dropdown is-hidden-touch"
                  ref={this.memberMenu}
                  onKeyPress={() => this.toggleHamburger()}
                  onClick={() => this.toggleHamburger()}
                >
                  <a
                    href="https://triclubchallenge.com/"
                    className="navbar-item"
                  >
                    ATC Challenge
                  </a>
                  <a
                    href="https://clients.mindbodyonline.com/classic/ws?studioid=30262&stype=-2&subTab=account"
                    className="navbar-item"
                  >
                    MindBody
                  </a>
                  <a
                    href="https://www.facebook.com/groups/824144270962214/"
                    className="navbar-item"
                  >
                    Facebook Group
                  </a>
                  <a
                    href="https://www.tapatalk.com/groups/atlantatriclubforum/index.php"
                    className="navbar-item"
                  >
                    Club Forum
                  </a>
                  <a
                    href="https://www.strava.com/clubs/10438"
                    className="navbar-item"
                  >
                    Strava Club
                  </a>
                  <Link to="/sponsors" className="navbar-item">
                    Sponsors
                  </Link>
                  <a
                    href="http://www.ironman.com/triathlon/forms/single-sign-up.aspx"
                    className="navbar-item"
                  >
                    Ironman Triclub
                  </a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable dropDownItem">
                <div
                  className="navbar-link"
                  onClick={() => this.toggleMobileDropdown(this.coachesMenu)}
                  onKeyPress={() => this.toggleMobileDropdown(this.coachesMenu)}
                  role="menuitem"
                  tabIndex={0}
                >
                  Coaches
                </div>
                <div
                  className="navbar-dropdown is-hidden-touch"
                  ref={this.coachesMenu}
                  onKeyPress={() => this.toggleHamburger()}
                  onClick={() => this.toggleHamburger()}
                >
                  <Link to="/atc-coaches" className="navbar-item">
                    ATC Coaches
                  </Link>
                  <Link to="/triathlon-coaches" className="navbar-item">
                    Energy Lab 1:1 Triathlon Coaches
                  </Link>
                  <Link to="/swim-coaches" className="navbar-item">
                    Energy Lab 1:1 Swim Coaches
                  </Link>
                </div>
              </div>

              {/* <Link className="navbar-item" to="/about">
                About
              </Link> */}
              {/* <Link className="navbar-item" to="/results">
                Results
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
