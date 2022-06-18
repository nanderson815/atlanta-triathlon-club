import * as React from "react";
import { Link } from "gatsby";

import banner from "../img/banner.png";
import el from "../img/elLogo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/youtube.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4 social">
                <div className="content has-text-centered">
                  <img
                    src={banner}
                    alt="Kaldi"
                    style={{ width: "14em", height: "auto" }}
                  />
                </div>
                <h3
                  className="has-text-weight-bold is-size-6-mobile is-size-5-tablet"
                  style={{ color: "white" }}
                >
                  Contact Us
                </h3>
                <p className="mb-0">470-588-5282</p>
                <p className="mb-0">info@atlantatriclub.com</p>
                <div className="social">
                  <a
                    title="facebook"
                    href="http://facebook.com/atlantatriathlonclub"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="http://twitter.com/atlantatriclub">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a
                    title="instagram"
                    href="http://instagram.com/atlantatriclub"
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a
                    title="youtube"
                    href="https://www.youtube.com/channel/UCF_JddCHIvnbcOfiCCx65Pg"
                  >
                    <img
                      src={youtube}
                      alt="youtube"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
              <div className="column is-2">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/testimonials">
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/features">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/start-here">
                        Start Here
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="content has-text-centered">
                  <img
                    src={el}
                    alt="Kaldi"
                    style={{ width: "14em", height: "auto" }}
                  />
                </div>
                <h3
                  className="has-text-weight-bold is-size-6-mobile is-size-5-tablet"
                  style={{ color: "white" }}
                >
                  Our Studio
                </h3>
                <p className="mb-0">1167A Zonolite Place NE Atlanta, GA 3036</p>
                <h3
                  className="has-text-weight-bold is-size-6-mobile is-size-5-tablet"
                  style={{ color: "white" }}
                >
                  Contact Us
                </h3>
                <p className="mb-0">678-883-3522</p>
                <p className="mb-0">info@energylabatl.com</p>
                <div className="social">
                  <a
                    title="facebook"
                    href="https://www.facebook.com/energylabatl"
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com/energylabatl">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a
                    title="instagram"
                    href="https://www.instagram.com/energylabatl/"
                  >
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
