import React from 'react';
import './Book1.css';

const Pricing = () => {
  return (
    <section className="pricing py-5 overflow-hidden mt-5">
      <div className="container">
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="200">
          <h2 className="fw-bold text-center">کتاب های تاریخی</h2>
          <p className="text-center">کتاب‌های معتبر تاریخی برای یادگیری از تاریخ و تجارب بشری.</p>
        </div>

        <div className="row text-center gy-3">
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="300">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#07d5c0' }}>The History of the Peloponnesian War</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/1.jpg" alt="hi" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Thucydides</li>
                  <li className="my-2">تاریخ جنگ‌های پلوپونزیان بین آتن و اسپارتا.</li>
                  <li className="text-muted my-2">سال چاپ: 431 قبل از میلاد</li>
                  <li className="text-muted my-2">تعداد صفحات: 500 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="400">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#65c600' }}>The Rise and Fall of the Roman Empire</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/2.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: Edward Gibbon</li>
                  <li className="my-2 fs-5">تاریخ بالا و پایین رفتن امپراتوری روم.</li>
                  <li className="text-muted my-2b fs-5">سال چاپ: 1776</li>
                  <li className="text-muted my-2">تعداد صفحات: 1200 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="500">
            <div className="card shadow">
              <div className="card-body">
                <h6 className="fw-bold" style={{ color: '#ff901c' }}>The Decline and Fall of the Roman Empire</h6>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/3.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: Edward Gibbon</li>
                  <li className="my-2 fs-4">بررسی دلایل سقوط امپراتوری روم.</li>
                  <li className="text-muted my-2 fs-5">سال چاپ: 1776</li>
                  <li className="text-muted my-2 fs-5">تعداد صفحات: 1200 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="600">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#ff0071' }}>The Life of Alexander the Great</h5>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/4.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-5">نویسنده: Plutarch</li>
                  <li className="my-2 fs-5">زندگی‌نامه اسکندر مقدونی و دستاوردهایش.</li>
                  <li className="text-muted my-2 fs-5">سال چاپ: 75 میلادی</li>
                  <li className="text-muted my-2">تعداد صفحات: 400 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center gy-3 mt-5">
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="300">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#07d5c0' }}>The History of the French Revolution</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/5.jpg" alt="hi" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Alexis de Tocqueville</li>
                  <li className="my-2">بررسی انقلاب فرانسه و تأثیر آن بر جهان.</li>
                  <li className="text-muted my-2">سال چاپ: 1856</li>
                  <li className="text-muted my-2">تعداد صفحات: 600 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="400">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="fw-bold" style={{ color: '#65c600' }}>The Cold War: A New History</h2>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/6.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: John Lewis Gaddis</li>
                  <li className="my-2">تاریخ جنگ سرد و رقابت بین دو ابرقدرت.</li>
                  <li className="text-muted my-2">سال چاپ: 2005</li>
                  <li className="text-muted my-2">تعداد صفحات: 800 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="500">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="fw-bold" style={{ color: '#ff901c' }}>Genghis Khan and the Making of the Modern World</h3>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/7.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Jack Weatherford</li>
                  <li className="my-2">تاریخ چنگیز خان و تأثیر او بر جهان.</li>
                  <li className="text-muted my-2">سال چاپ: 2004</li>
                  <li className="text-muted my-2">تعداد صفحات: 400 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="600">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="fw-bold" style={{ color: '#ff0071' }}>The Second World War</h2>
                <div>قیمت: 250 افغانی</div>
                <img src="images/history/8.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Winston Churchill</li>
                  <li className="my-2">تاریخ جنگ جهانی دوم از دیدگاه چرچیل.</li>
                  <li className="text-muted my-2">سال چاپ: 1948</li>
                  <li className="text-muted my-2">تعداد صفحات: 1200 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
