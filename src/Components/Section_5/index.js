import "./Section_5.css";
function section_5() {
  return (
    <>
      <div className="section-5" id="sec-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-head">
                <div className="inner-title">
                  <h2>Pricing Plans</h2>
                </div>
                <div className="inner-desc">
                  <p>
                    Donec vulputate urna sed rutrum venenatis. Cras consequat
                    magna <br />
                    quis arcu elementum, quis congue risus volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="inner-top">Starter</div>
                <div className="inner-middle inner-blue">
                  <span className="dolar">$</span>
                  <span className="inner-price">14.50</span>
                  <span className="period">monthly</span>
                </div>
                <ul className="inner-list">
                  <li className="active">60 GB space</li>
                  <li className="active">600 GB transfer</li>
                  <li className="active">Pro Design Panel</li>
                  <li className="no-active">15-minute support</li>
                  <li className="no-active">Unlimited Emails</li>
                  <li className="no-active">24/7 Security</li>
                </ul>
                <div className="my-btn">
                  <button className="button button-2">purchase now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="inner-top">Premium</div>
                <div className="inner-middle inner-red">
                  <span className="dolar">$</span>
                  <span className="inner-price">21.50</span>
                  <span className="period">monthly</span>
                </div>
                <ul className="inner-list">
                  <li className="active">60 GB space</li>
                  <li className="active">600 GB transfer</li>
                  <li className="active">Pro Design Panel</li>
                  <li className="active">15-minute support</li>
                  <li className="no-active">Unlimited Emails</li>
                  <li className="no-active">24/7 Security</li>
                </ul>
                <div className="my-btn">
                  <button className="button button-2">purchase now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="inner-top">Advanced</div>
                <div className="inner-middle inner-blue">
                  <span className="dolar">$</span>
                  <span className="inner-price">42.00</span>
                  <span className="period">monthly</span>
                </div>
                <ul className="inner-list">
                  <li className="active">60 GB space</li>
                  <li className="active">600 GB transfer</li>
                  <li className="active">Pro Design Panel</li>
                  <li className="active">15-minute support</li>
                  <li className="active">Unlimited Emails</li>
                  <li className="active">24/7 Security</li>
                </ul>
                <div className="my-btn">
                  <button className="button button-2">purchase now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default section_5;
