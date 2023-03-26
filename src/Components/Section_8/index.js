import "./Section_8.css";
function Section_8() {
  return (
    <>
      <div className="section-8" id="sec-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-title">
                <h1>Talk To Us</h1>
              </div>
              <div className="inner-desc">
                <p>
                  Maecenas pellentesque ante faucibus lectus vulputate
                  sollicitudin.
                  <br />
                  Cras feugiat hendrerit semper.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-top">
                <h5>Keep in touch</h5>
              </div>
              <div className="inner-bottom">
                <p>
                  110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                  <br />
                  auctor non lorem
                </p>
                <p>
                  You are NOT allowed to re-distribute Softy Pinko template on
                  any template collection websites. Thank you.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <form action="#">
                <div className="inner-wrap">
                  <div className="inner-name">
                    <input type="text" placeholder="Full name" />
                  </div>
                  <div className="inner-email">
                    <input type="text" placeholder="E-mail Address" />
                  </div>
                </div>
                <div className="inner-message">
                  <textarea rows="8" placeholder="Your message"></textarea>
                </div>
                <div className="my-btn">
                  <button className="button button-2">send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section_8;
