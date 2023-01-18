import React from 'react'
import  './Footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="container">
            <h3> ضمانت سبز لرن برای کلیه محصولات آموزشی</h3>
            <p>
                وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند


            </p>

            <div className="footer-content-items">
                <div className="footer-content-item">
                    <ul>
                        <li><a href="">فروشگاه</a></li>
                        <li><a href="">ارتباط با ما</a></li>
                        <li  className="last-child"><a href="">تماس با ما</a></li>
                    </ul>
                </div>
                <div className="footer-content-item">
                    <ul>
                        <li><a href="">مقالات</a></li>
                        <li><a href="">قوانین ومقررات</a></li>
                        <li  className='last-child'><a href="">اموزش پایتون</a></li>
                    </ul>
                </div>
                <div className="footer-content-item">
                    <ul>
                        <li className='last-child'>ساعت کاری:</li>
                        <li className='last-child'>شنبه تا چهارشنبه 8 صبح تا 18 عصر پنج</li>
                        <li className='last-child'>شنبه‌ها ساعت 8 صبح تا 12 ظهر</li>
                    </ul>
                </div>
                <div className="footer-content-item">
                    <ul>
                        <li className='last-child'>ارتباط با ما</li>
                        <li className='last-child'>ایمیل : sabzlearn@gmail.com</li>
                        <li className='last-child'>شماره تماس : 09334008385</li>
                    </ul>
                </div>
               

            </div>
        </div>

    </div>

    </>
  )
}
