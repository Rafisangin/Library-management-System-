import React from 'react';
import './About.css'; // Ensure to include your CSS file.

const Services = () => {
    return (
        <section className="services overflow-hidden mt-5 mb-5">
            <div className="container mt-3">
                <div className="row" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="fw-bold text-center">خدمات </h2>
                    
                </div>
                <div className="row gy-4" data-aos="fade-right" data-aos-delay="400">
                    <div className="col-md-6 col-lg-4" data-aos="flip-right" data-aos-delay="300">
                        <div className="service-box blue">
                            <img
                                className="icon blue"
                                src="image/En.svg"
                                alt=""
                            />
                            <h3 className="fw-bold mt-3">محیط آرام  </h3>
                            <p >
                                .این کتابخانه‌مجهز با مکان آرام برای مطالعه میباشد
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="flip-right" data-aos-delay="400">
                        <div className="service-box orange">
                            <img
                                className="icon blue"
                                src="image/wi.svg"
                                alt=""
                            />
                            <h3 className="fw-bold mt-3">انترنت رایگان  </h3>
                            <p>
                                با  داشتن انترنت رایگان برای مشتریان برای جستجو اطلاعات بیشتر از انترنت
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" data-aos="flip-right" data-aos-delay="500">
                        <div className="service-box green">
                            <img
                                className="icon blue"
                                src="image/book.svg"
                                alt=""
                            />
                            <h3 className="fw-bold mt-3">گرفتن  کتاب بشکل امانت  </h3>
                            <p>
                                 با پرداخت 25 فیصد از قیمت کتاب بشکل امانت یک هفته کتاب را در خانه مطالعه کنید .
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
