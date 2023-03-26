import right_image from "../assets/image/right-image.png";
import "./Section_2.css";
function section_2() {
  return (
    <>
      <div className="section-2">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-12">
              <div className="inner-main">
                <div className="inner-right">
                  <div className="inner-title">
                    We can help you to grow your business
                  </div>
                  <div className="inner-desc">
                    <p>
                      Aenean pretium, ipsum et porttitor auctor, metus ipsum
                      iaculis nisi, a bibendum lectus libero vitae urna. Sed id
                      leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus
                      libero. Etiam quis dolor elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 ">
              <div className="inner-main">
                <div className="inner-left">
                  <img src={right_image} alt="Test" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default section_2;
