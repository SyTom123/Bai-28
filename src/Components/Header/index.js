import "./Header.css";
import "../assets/css/base.css";
import logo from "../assets/image/logo.png";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="nav">
                <div className="header-image">
                  <a href="/">
                    {/* <img src={require("../assets/image/logo.png")} alt="Logo" /> */}
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#sec-1">About</a>
                    </li>
                    <li>
                      <a href="#sec-3">Work Process</a>
                    </li>
                    <li>
                      <a href="#sec-4">Testimonials</a>
                    </li>
                    <li></li>
                    <li>
                      <a href="#sec-7">Blog Entries</a>
                    </li>
                    <li>
                      <a href="#sec-8">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="inner-bar">
                  <FaBars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
