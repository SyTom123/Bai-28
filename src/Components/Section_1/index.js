import left_image from "../assets/image/left-image.png";
import "./Section_1.css";
function section_1() {
  return (
    <>
      <div className="section-1" id="sec-1">
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 col-md-12 ">
              <div className="inner-main">
                <div className="inner-left">
                  <img src={left_image} alt="Test" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="inner-main">
                <div className="inner-right">
                  <div className="inner-title">
                    Let’s discuss about you project
                  </div>
                  <div className="inner-desc">
                    <p>
                      Nullam sit amet purus libero. Etiam ullamcorper nisl ut
                      augue blandit, at finibus leo efficitur. Nam gravida purus
                      non sapien auctor, ut aliquam magna ullamcorper.
                    </p>
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
export default section_1;
