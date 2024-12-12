import React from "react";
import './contact.css'
const Contact = () => {
  return (
    <section className="contact py-5 overflow-hidden mt-3">
      <div className="container">
        <div className="row mb-5 text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="fw-bold">ارتباط با ما</h2>
        </div>
        <div className="row gy-3" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-6">
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="600">
              <div className="col-md-6">
                <div className="info-box">
                  <img src="images/location-pin-svgrepo-com (1).svg" alt="" />
                  <h5 className="fw-bold">آدرس</h5>
                  <p>
                    افغانستان ،کابل ،سرک دارلا مان <br /> روی به روی کفایت سنتر
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <img src="images/phone-call-01-svgrepo-com (1).svg" alt="" />
                  <h5 className="fw-bold">شماره تماس</h5>
                  <p>
                    93748102046+<br />93792725601+
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="info-box">
                  <img src="images/message-svgrepo-com (1).svg" alt="" />
                  <h5 className="fw-bold">ایمیل</h5>
                  <p>
                    rafiullahsangin001@gmail.com<br />rafiullahsangin@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="info-box">
                  <img src="images/clock-circle-svgrepo-com.svg" alt="" />
                  <h5 className="fw-bold">پشتیبانی</h5>
                  <p>
                    شنبه -پنج شنبه <br />05:00-09:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="#" className="contact-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label className="form-label">نام</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">ایمیل</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-md-12">
                  <label className="form-label">موضوع</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-12">
                  <label className="form-label">متن پیام</label>
                  <textarea className="form-control" rows="2"></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button className="btn bg-primary text-light">ارسال پیام</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
