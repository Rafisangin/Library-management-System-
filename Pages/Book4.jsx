import React from 'react';
import './Book1.css';

const Pricing = () => {
  return (
    <section className="pricing py-5 overflow-hidden mt-5">
      <div className="container">
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="200">
          <h2 className="fw-bold text-center">کتاب‌های برنامه‌نویسی</h2>
          <p className="text-center">کتاب‌های معتبر برنامه‌نویسی برای یادگیری و پیشرفت در دنیای فناوری برنامه‌نویسی.</p>
        </div>

        <div className="row text-center gy-3">
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="300">
            <div className="card shadow">
              <div className="card-body">
                <h6 className="fw-bold" style={{ color: '#07d5c0' }}>Introduction to Algorithms</h6>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/1.jpg" alt="hi" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest</li>
                  <li className="my-2">آشنایی با الگوریتم‌ها و ساختار داده‌ها.</li>
                  <li className="text-muted my-2">سال چاپ: 1990</li>
                  <li className="text-muted my-2">تعداد صفحات: 1312 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="400">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="fw-bold" style={{ color: '#65c600' }}>Clean Code: A Handbook of Agile Software Craftsmanship</h5>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/2.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: Robert C. Martin</li>
                  <li className="my-2 fs-5">راهنمای نوشتن کد تمیز و نگهداری‌پذیر.</li>
                  <li className="text-muted my-2b fs-5">سال چاپ: 2008</li>
                  <li className="text-muted my-2">تعداد صفحات: 464 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="500">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#ff901c' }}>The Pragmatic Programmer</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/3.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: Andrew Hunt, David Thomas</li>
                  <li className="my-2 fs-6">راهنمایی برای تبدیل شدن به یک برنامه‌نویس کارآمد و حرفه‌ای.</li>
                  <li className="text-muted my-2 fs-4">سال چاپ: 1999</li>
                  <li className="text-muted my-2 fs-5">تعداد صفحات: 352 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="600">
            <div className="card shadow">
              <div className="card-body">
                <h6 className="fw-bold" style={{ color: '#ff0071' }}>Design Patterns: Elements of Reusable Object-Oriented Software</h6>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/4.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 ">نویسنده: Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides</li>
                  <li className="my-2">بررسی الگوهای طراحی در نرم‌افزار شی‌گرا.</li>
                  <li className="text-muted my-2 ">سال چاپ: 1994</li>
                  <li className="text-muted my-2">تعداد صفحات: 395 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center gy-3 mt-5">
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="300">
            <div className="card shadow">
              <div className="card-body">
                <h6 className="fw-bold" style={{ color: '#07d5c0' }}>Artificial Intelligence: A Modern Approach</h6>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/5.jpg" alt="hi" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: Stuart Russell</li>
                  <li className="my-2">آشنایی با مفاهیم و تکنیک‌های هوش مصنوعی.</li>
                  <li className="text-muted my-2">سال چاپ: 1995</li>
                  <li className="text-muted my-2">تعداد صفحات: 1152 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="400">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="fw-bold" style={{ color: '#65c600' }}>The Mythical Man-Month</h3>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/6.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Frederick P. Brooks</li>
                  <li className="my-2">تحلیل چالش‌های مدیریت پروژه‌های نرم‌افزاری.</li>
                  <li className="text-muted my-2">سال چاپ: 1975</li>
                  <li className="text-muted my-2">تعداد صفحات: 324 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="500">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="fw-bold" style={{ color: '#ff901c' }}>You Don't Know JS (Book Series)</h3>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/7.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Kyle Simpson</li>
                  <li className="my-2">سری کتاب‌هایی برای یادگیری عمیق زبان JavaScript.</li>
                  <li className="text-muted my-2">سال چاپ: 2014</li>
                  <li className="text-muted my-2">تعداد صفحات: 700 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="600">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#ff0071' }}>The Art of Computer Programming</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/technology/8.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Donald E. Knuth</li>
                  <li className="my-2">بررسی جامع و عمیق الگوریتم‌ها و برنامه‌نویسی کامپیوتری.</li>
                  <li className="text-muted my-2">سال چاپ: 1968</li>
                  <li className="text-muted my-2">تعداد صفحات: 3200 صفحه</li>
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
