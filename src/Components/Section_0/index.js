import featured_item_01 from "../assets/image/featured-item-01.png";
import "./Section-0.css";
import "../assets/css/base.css";
function Section_0() {
  return (
    <>
      <div className="section-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content">
                <div className="inner-title">
                  <h1>
                    {" "}
                    We provide the best <strong>strategy</strong>
                    <br />
                    to grow up your <strong>business</strong>
                  </h1>
                </div>
                <div className="inner-desc">
                  <p>
                    Softy Pinko is a professional Bootstrap 4.0 theme designed
                    by Template Mo <br />
                    for your company at absolutely free of charge
                  </p>
                </div>
                <div className="my-button">
                  <button className="button button-1">Discover more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-image">
                  <img src={featured_item_01} alt="test" />
                </div>
                <div className="inner-title">
                  <h5>Modern Strategy</h5>
                </div>
                <div className="inner-desc">
                  Customize anything in this template to fit your website needs
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-image">
                  <img src={featured_item_01} alt="test" />
                </div>
                <div className="inner-title">
                  <h5>Best Relationship</h5>
                </div>
                <div className="inner-desc">
                  Contact us immediately if you have a question in mind
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-image">
                  <img src={featured_item_01} alt="test" />
                </div>
                <div className="inner-title">
                  <h5>Ultimate Marketing</h5>
                </div>
                <div className="inner-desc">
                  You just need to tell your friends about our free templates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section_0;
