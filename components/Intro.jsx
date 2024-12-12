import React, { useState } from "react";
import './Intro.css'
const Intro = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull((prev) => !prev);
  };

  const shortText =
    "کتابخانه‌ها از دیرباز به‌عنوان گنجینه‌های دانش و فرهنگ نقش مهمی در رشد و توسعه جوامع داشته‌اند. آن‌ها مکان‌هایی هستند که افراد می‌توانند به منابع مختلفی از جمله کتاب‌ها، مقالات، نشریات و حتی رسانه‌های دیجیتال دسترسی پیدا کنند...";
  const fullText =
    "کتابخانه‌ها از دیرباز به‌عنوان گنجینه‌های دانش و فرهنگ نقش مهمی در رشد و توسعه جوامع داشته‌اند. آن‌ها مکان‌هایی هستند که افراد می‌توانند به منابع مختلفی از جمله کتاب‌ها، مقالات، نشریات و حتی رسانه‌های دیجیتال دسترسی پیدا کنند. کتابخانه‌ها نه‌تنها فضایی برای مطالعه و تحقیق فراهم می‌کنند، بلکه محیطی مناسب برای تبادل اندیشه‌ها و برگزاری رویدادهای فرهنگی نیز هستند. به‌طور کلی، کتابخانه‌ها نه‌تنها مکانی برای نگهداری و دسترسی به منابع علمی هستند، بلکه نقشی حیاتی در ارتقای فرهنگ مطالعه، افزایش دانش عمومی و تقویت هویت فرهنگی ایفا می‌کنند. بنابراین، حفظ و گسترش این مراکز از اهمیت ویژه‌ای برخوردار است.";

  return (
<>
<section className="intro d-flex align-items-center overflow-hidden mb-5">
      <div className="container mt-5">
        <div className="row align-items-center mt-5 mt-lg-0">
          <div className="col-lg-6 mt-5 mt-lg-0 img_intro">
            <img src="../image/book_intro.png" alt="Book Intro" />
          </div>
          <div className="col-lg-6 mt-4">
            <h5
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-light mt-3"
            >
              {showFull ? fullText : shortText}
            </h5>
            <button
              className="btn btn-lg btn mt-2 hover-grow text-light btn-outline-light"
              onClick={toggleShowFull}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {showFull ? "کمتر بخوانید" : "بیشتر بخوانید"}
            </button>
            
          </div>
        </div>
      
      </div>
      
    </section>
    
</>
  );
  
};

export default Intro;
