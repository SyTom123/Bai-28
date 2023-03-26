import blog_item_01 from "../assets/image/blog-item-01.png";
import blog_item_02 from "../assets/image/blog-item-02.png";
import blog_item_03 from "../assets/image/blog-item-03.png";
import "./Section_7.css";
function Section_7() {
  return (
    <>
      <div className="section-7" id="sec-7">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-title">
                <h2>Blog Entries</h2>
              </div>
              <div className="inner-desc">
                <p>
                  Integer molestie aliquam gravida. Nullam nec arcu <br />{" "}
                  finibus, imperdiet nulla vitae, placerat nibh. <br />
                  Cras maximus venenatis molestie.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-image">
                <img src={blog_item_01} alt="Test" />
              </div>
              <div className="inner-content">
                <div className="inner-top">
                  <h4>Vivamus ac vehicula dui</h4>
                </div>
                <div className="inner-bottom">
                  <p>
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </p>
                </div>
                <div className="my-btn">
                  <button className="button button-2">read more</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-image">
                <img src={blog_item_02} alt="Test" />
              </div>
              <div className="inner-content">
                <div className="inner-top">
                  <h4>Vivamus ac vehicula dui</h4>
                </div>
                <div className="inner-bottom">
                  <p>
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </p>
                </div>
                <div className="my-btn">
                  <button className="button button-2">read more</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-image">
                <img src={blog_item_03} alt="Test" />
              </div>
              <div className="inner-content">
                <div className="inner-top">
                  <h4>Vivamus ac vehicula dui</h4>
                </div>
                <div className="inner-bottom">
                  <p>
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </p>
                </div>
                <div className="my-btn">
                  <button className="button button-2">read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section_7;
