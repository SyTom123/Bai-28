import work_process_item_01 from "../assets/image/work-process-item-01.png";
import "./Section_3.css";
function section_3() {
  return (
    <>
      <div className="section-3" id="sec-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-head">
                <div className="inner-title">
                  <h1>Work Process</h1>
                </div>
                <div className="inner-desc">
                  <p>
                    Aenean nec tempor metus. Maecenas ligula dolor, commodo
                    <br /> in imperdiet interdum, vehicula ut ex. Donec ante
                    diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src={work_process_item_01} alt="Test" />
                </div>
                <div className="inner-title">Get Ideas</div>
                <div className="inner-desc">Godard pabst prism fam cliche.</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src={work_process_item_01} alt="Test" />
                </div>
                <div className="inner-title">Sketch Up</div>
                <div className="inner-desc">Godard pabst prism fam cliche.</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src={work_process_item_01} alt="Test" />
                </div>
                <div className="inner-title">Discuss</div>
                <div className="inner-desc">Godard pabst prism fam cliche.</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src={work_process_item_01} alt="Test" />
                </div>
                <div className="inner-title">Revise</div>
                <div className="inner-desc">Godard pabst prism fam cliche.</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src={work_process_item_01} alt="Test" />
                </div>
                <div className="inner-title">Approve</div>
                <div className="inner-desc">Godard pabst prism fam cliche.</div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src={work_process_item_01} alt="Test" />
                </div>
                <div className="inner-title">Launch</div>
                <div className="inner-desc">Godard pabst prism fam cliche.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default section_3;
