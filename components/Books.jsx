import React from 'react';
import './books.css';

const Books = () => {
    const booksData = [
        { id: 1, image: "1.jpg", title: "مثنوی معنوی  ",auther:"مولانو جلال الدین بخلی", description: "این کتاب بزرگترین اثر مولا میباشد." },
        { id: 2, image: "2.jpg", title: "جنگ و صلح ",auther:" لئو تولستوی" ,description: "شاهکاری درباره تاریخ، عشق، و معنای زندگی در دوران جنگ‌های ناپلئونی." },
        { id: 3, image: "3.jpg", title: "1984", auther:"جورج اورول" ,description: "داستانی تکان‌دهنده از جامعه‌ای که تحت کنترل کامل یک رژیم تمامیت‌خواه است." },
        { id: 4, image: "4.jpg", title: "صد سال تنهایی",auther:"گابریل گارسیا مارکز" , description: "حماسه‌ای از چند نسل در روستای خیالی ماکوندو که ترکیبی از واقعیت و جادوست." },
        { id: 5, image: "5.jpg", title: "بیگانه", auther:"آلبر کامو" ,description: "داستانی درباره پوچی و بیگانگی انسان در جهان مدرن." },
        { id: 6, image: "6.jpg", title: "هری پاتر و سنگ جادو ",auther:"جی. کی. رولینگ" ,  description: "داستان جادویی پسر یتیمی که سرنوشتش به مبارزه با تاریکی گره خورده است." },
        { id: 7, image: "7.jpg", title: "جنایت و مکافات",auther:"فیودور داستایوفسکی" , description: "داستانی عمیق درباره اخلاق، گناه و رستگاری." },
        { id: 8, image: "8.jpg", title: " شازده کوچولو",auther:"آنتوان دو سنت‌اگزوپری" , description: "داستانی فلسفی و شاعرانه درباره کودکی، عشق، و معنای زندگی." },
        { id: 9, image: "9.jpg", title: " هابیت",auther:"جی. آر. آر. تالکین" , description: " ماجراجویی شگفت‌انگیز هابیتی کوچک که دنیای جادو و افسانه را تغییر می‌دهد." },
        { id: 10, image: "10.jpg", title: "بوف کور",auther:"صادق هدایت" , description: "داستانی سورئال درباره تنهایی و جنون انسان." }
    ];

    return (
        <section className="books mb-5 mt-5">
            <div style={{ height: "150px", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path d="M0.00,50.10 C150.00,150.33 271.29,-50.10 500.00,50.10 L500.00,-0.00 L0.00,-0.00 Z" style={{ stroke: "none", fill: "#fff" }} />
                </svg>
            </div>
            <div className="container">
                <div className="row text-center text-white">
                    <h1 className="fw-bold fs-3">ده مشهور ترین کتاب جهان</h1>
                    <hr className="mx-auto" style={{ width: "100px", height: "3px" }} />
                </div>
                <div className="row cir border  rounded p-3 ">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {booksData.map((book, index) => (
                                <div key={book.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <div className="carousel-card rounded text-center p-4">
                                        <img
                                            src={`/image/${book.image}`}
                                            alt={book.title}
                                            className="img-fluid "
                                            width="100px"
                                        />
                                        <div>
                                            <h4 className="fw-bold mt-3 ">{book.title}</h4>
                                            <p className="fw-bold mt-3 ">{book.auther} <br /> {book.description}</p>   
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <button
                                className="btn btn-outline-light  me-2 m-2"
                                type="button"
                                data-bs-target="#carouselExampleInterval"
                                data-bs-slide="prev"
                            >
                                قبلی 
                            </button>
                            <button
                                className="btn btn-outline-light me-2 m-2"
                                type="button"
                                data-bs-target="#carouselExampleInterval"
                                data-bs-slide="next"
                            >
                                بعدی 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "150px", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
                    <path d="M0.00,50.10 C150.00,150.33 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z" style={{ stroke: "none", fill: "#fff" }} />
                </svg>
            </div>
        </section>
    );
};

export default Books;
