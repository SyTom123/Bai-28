import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaDribbble,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer" id="sec-9">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="inner-social">
                <li>
                  <a href="/">
                    <FaFacebookF className="icon" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaRss />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaDribbble />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div className="inner-desc">
                COPYRIGHT &copy 2020 SOFTY PINKO COMPANY - COPPYDESIGN: GIAKHANH
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
