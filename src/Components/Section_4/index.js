import testimonial_icon from "../assets/image/testimonial-icon.png";
import anh60x60 from "../assets/image/60x60.png";
import "./Section_4.css";
function section_4() {
  return (
    <>
      <div className="section-4">
        <div className="container">
          <div className="row">
            <div className="col-12" id="sec-4">
              <div className="inner-head">
                <div className="inner-title">
                  <h2>What do they say?</h2>
                </div>
                <div className="inner-desc">
                  <p>
                    Donec tempus, sem non rutrum imperdiet, lectus orci
                    fringilla nulla,
                    <br /> at accumsan elit eros a turpis. Ut sagittis lectus
                    libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-wrap">
                <div className="inner-box">
                  <div className="inner-icon">
                    <img src={testimonial_icon} alt="Test" />
                  </div>
                  <div className="inner-desc">
                    <p>
                      Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla
                      quis, egestas scelerisque orci. Maecenas a finibus odio.
                    </p>
                  </div>
                  <div className="inner-bottom">
                    <div className="inner-left">
                      <img src={anh60x60} alt="Test" />
                    </div>
                    <div className="inner-right">
                      <div className="inner-name">Catherine Soft</div>
                      <div className="inner-possition">Managing Director</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-wrap">
                <div className="inner-box">
                  <div className="inner-icon">
                    <img src={testimonial_icon} alt="Test" />
                  </div>
                  <div className="inner-desc">
                    <p>
                      Integer molestie aliquam gravida. Nullam nec arcu finibus,
                      imperdiet nulla vitae, placerat nibh. Cras maximus
                      venenatis molestie.
                    </p>
                  </div>
                  <div className="inner-bottom">
                    <div className="inner-left">
                      <img src={anh60x60} alt="Test" />
                    </div>
                    <div className="inner-right">
                      <div className="inner-name">Kelvin Wood</div>
                      <div className="inner-possition">Digital Marketer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-wrap">
                <div className="inner-box">
                  <div className="inner-icon">
                    <img src={testimonial_icon} alt="Test" />
                  </div>
                  <div className="inner-desc">
                    <p>
                      Quisque diam odio, maximus ac consectetur eu, auctor non
                      lorem. Cras quis est non ante ultrices molestie. Ut
                      vehicula et diam at aliquam
                    </p>
                  </div>
                  <div className="inner-bottom">
                    <div className="inner-left">
                      <img src={anh60x60} alt="Test" />
                    </div>
                    <div className="inner-right">
                      <div className="inner-name">David Martin</div>
                      <div className="inner-possition">Website Manager</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default section_4;
