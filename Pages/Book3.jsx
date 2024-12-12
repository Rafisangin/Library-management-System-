import React from 'react';
import './Book1.css';

const Pricing = () => {
  return (
    <section className="pricing py-5 overflow-hidden mt-5">
      <div className="container">
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="200">
          <h2 className="fw-bold text-center">کتاب های داستانی</h2>
          <p className="text-center">کتاب‌های جذاب و تخیلی برای لذت بردن از داستان‌های خیالی.</p>
        </div>

        <div className="row text-center gy-3">
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="300">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#07d5c0' }}>The Hobbit</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/fiction/1.jpg" alt="hi" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-5">نویسنده: J.R.R. Tolkien</li>
                  <li className="my-2 fs-4">داستان سفر بیلبو بگینز و شکست دادن اژدها.</li>
                  <li className="text-muted my-2">سال چاپ: 1937</li>
                  <li className="text-muted my-2">تعداد صفحات: 310 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="400">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#65c600' }}>Harry Potter and the Sorcerer's Stone</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/fiction/2.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: J.K. Rowling</li>
                  <li className="my-2 fs-5">ماجراهای هری پاتر در مدرسه هاگوارتز.</li>
                  <li className="text-muted my-2 fs-5">سال چاپ: 1997</li>
                  <li className="text-muted my-2">تعداد صفحات: 309 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="500">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#ff901c' }}>The Great Gatsby</h4>
                <div className='fs-3'>قیمت: 250 افغانی</div>
                <img src="images/fiction/3.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-6">نویسنده: F. Scott Fitzgerald</li>
                  <li className="my-2 fs-5">داستان درباره جیمز گتزبی و جستجوی او برای عشق.</li>
                  <li className="text-muted my-2 fs-5 ">سال چاپ: 1925</li>
                  <li className="text-muted my-2 fs-5">تعداد صفحات: 180 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="600">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#ff0071' }}>1984</h4>
                <div className='fs-4'>قیمت: 250 افغانی</div>
                <img src="images/fiction/4.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2 fs-5">نویسنده: George Orwell</li>
                  <li className="my-2 fs-5">داستانی دلهره‌آور در دنیای سرکوب و نظارت دایم.</li>
                  <li className="text-muted my-2 fs-5">سال چاپ: 1949</li>
                  <li className="text-muted my-2">تعداد صفحات: 328 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center gy-3 mt-5">
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="300">
            <div className="card shadow">
              <div className="card-body">
                <h6 className="fw-bold" style={{ color: '#07d5c0' }}>The Catcher in the Rye</h6>
                <div>قیمت: 250 افغانی</div>
                <img src="images/fiction/5.jpg" alt="hi" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: J.D. Salinger</li>
                  <li className="my-2">ماجراهای هولدن کالفیلد در دوران نوجوانی.</li>
                  <li className="text-muted my-2">سال چاپ: 1951</li>
                  <li className="text-muted my-2">تعداد صفحات: 277 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="400">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#65c600' }}>Brave New World</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/fiction/6.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Aldous Huxley</li>
                  <li className="my-2">توصیف دنیای آینده و جامعه‌ای که در آن فردیت از بین رفته است.</li>
                  <li className="text-muted my-2">سال چاپ: 1932</li>
                  <li className="text-muted my-2">تعداد صفحات: 311 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="500">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="fw-bold" style={{ color: '#ff901c' }}>Moby-Dick</h3>
                <div>قیمت: 250 افغانی</div>
                <img src="images/fiction/7.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Herman Melville</li>
                  <li className="my-2">ماجرای سفر شکارچیان نهنگ به دنبال شکار نهنگ سفید.</li>
                  <li className="text-muted my-2">سال چاپ: 1851</li>
                  <li className="text-muted my-2">تعداد صفحات: 635 صفحه</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="flip-right" data-aos-delay="600">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="fw-bold" style={{ color: '#ff0071' }}>Fahrenheit 451</h4>
                <div>قیمت: 250 افغانی</div>
                <img src="images/fiction/8.jpg" alt="" className="img-fluid p-4" />
                <ul className="list-unstyled">
                  <li className="my-2">نویسنده: Ray Bradbury</li>
                  <li className="my-2">داستان در مورد دنیای دیکتاتوری که در آن کتاب‌ها سوزانده می‌شوند.</li>
                  <li className="text-muted my-2">سال چاپ: 1953</li>
                  <li className="text-muted my-2">تعداد صفحات: 249 صفحه</li>
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
