import React, { useContext } from "react";
import "./DetailCourse.css";

import { dbContext } from "./../../Context/Context";
import { useParams } from "react-router-dom";

const DetailCourse = () => {
  const contextData = useContext(dbContext);
  // console.log(contextData);
  let params = useParams();
  let index = params.id;

  const filterCourse = contextData.db.products.find(
    (product) => product.id == index
  );
  //  console.log(filterCourse)

  return (
    <div className="container">
      <p className="product-info-header">
        آموزش رایگان جاوا اسکریپت مقدماتی تا پیشرفته + پروژه های جذاب
      </p>

      <div className="product-info">
        <div className="product-info-right">
          {/* <img src="/images/js_project.png" alt="" /> */}
          <video
            src="/video/video.mp4"
            className="product-info-video"
            poster="/images/js_project.png"
            controls
          />
        </div>
        <div className="product-info-left">
          <p className="category">
            دسته:
            <span className="first-child">اموزش برنامه نویسی فرانت اند</span>
            <span className="mahbob">محبوب ترین دوره ها</span>
          </p>
          <p className="kharid">
            پس از خرید، بلافاصله به محتوای دوره دسترسی خواهید داشت و میتوانید
            دوره را مشاهده و یا دانلود کنید.
          </p>
          <p className="suoprt"> پــروژه مــحور بودن دوره هــــا</p>
          <p className="suoprt"> پشتیبـــانی دائــــمی محصولات</p>
          <p className="suoprt"> تضمین کیــفیت کلیـه محصولات</p>

          <div className="phrosh-info">
            <span classname="phrosh">تعداد فروش</span>
            <span className="count">:1200</span>
            <a
              className="sale"
              onClick={() => {
                contextData.setIsShowCart(true);

                let isInUserCart = contextData.userCart.some(
                  (bagProduct) => bagProduct.name === filterCourse.name
                );
                console.log(isInUserCart);
                if (!isInUserCart) {
                  let newUserCartProduct = {
                    id: contextData.userCart.length + 1,
                    name: filterCourse.name,
                    price: filterCourse.price,
                    image: filterCourse.image,
                    count: 1,
                  };

                  contextData.userCart.push(newUserCartProduct);

                  contextData.setUserCart([...contextData.userCart]);
                  console.log(contextData.userCart);
                } else {
                  console.log("okk");
                  let userCart = [...contextData.userCart];
                 

                  userCart.some((bagProduct) => {
                    if (bagProduct.name === filterCourse.name) {
                      bagProduct.count += 1;
                    }
                    contextData.setUserCart(userCart);
                  });
                }
              }}
            >
              خرید دوره
            </a>
          </div>
        </div>
      </div>

      <div className="description">
        آموزش جاوا اسکریپت برای تمامی افرادی ک قصد ورود به زبان برنامه نویسی
        دارند مناسب می باشد . خصوصا برای علاقه مندان به حوزه فرانت همان طور که
        می دانید جاوا اسکریپت یکی از زبان های برنامه نویسی محبوب و پر طرفدار است
        که بازار کار فوق العاده ای دارد. آموزش رایگان جاوا اسکریپت برای شما
        عزیزان آماده شده است. جاوا اسکریپت ابتدا با هدف استفاده در ظاهر وب سایت
        ایجاد شد اما با پیشرفت چشمگیری که داشته، امروزه برای توسعه اپلیکیشن های
        اندروید، IOS، سمت سرور و… استفاده می شود.اگر می خواهید جاوا اسکریپت را
        از صفر تا صد یاد بگیرید، آموزش جاوا اسکریپت سبزلرن را از دست ندهید.
        آموزش Html
      </div>
      <div className="title-description">
        <h1>توضیحات دوره آموزش مقدماتی تا پیشرفته جاوا اسکریپت</h1>
      </div>
      <div className="image-one">
        <img src={filterCourse.albume[0]} alt="" />
      </div>
      <div className="description-two">
        <p className="title">آموزش جاوا اسکریپت</p>
        <p className="sub-title">
          امروزه زبان جاوا اسکریپت لایبرری ها و فریمورک های بسیار زیادی دارد و
          بسیاری از آن ها به قدری گسترده بوده و مطالب زیادی دارند که نمی توان
          حتی یکی از آن ها را در دوره جاوا اسکریپت جای داد.
        </p>
        <p className="sub-title">
          به همین خاطر در آموزش جاوا اسکریپت سبزلرن فقط سرفصل های مربوط به زبان
          برنامه نویسی جاوا اسکریپت تدریس شده اند و از هیچ کدام از لایبری ها و
          فریمورک های آن استفاده نشده است.
        </p>
      </div>
      <div className="downloas-btns">
        <a href="" className="all">
          دانلود همگانی ویدیو
        </a>
        <a href="" className="pyvast">
          دانلود همگانی پیوست
        </a>
      </div>
      <div className="total-course">
        <p>مباحث این دوره</p>
        <span>400درس</span>
      </div>
      <div className="list-course">
        <div className="list-course-right">
          <span>1</span>
          <a href="">معرفی دوره</a>
        </div>
        <div className="list-course-left">12:00</div>
      </div>
      <div className="list-course">
        <div className="list-course-right">
          <span>2</span>
          <a href="">کامنت گذار</a>
        </div>
        <div className="list-course-left">12:00</div>
      </div>
      <div className="list-course">
        <div className="list-course-right">
          <span>3</span>
          <a href="">دیتا تایپ ها در جاوااسکریپت</a>
        </div>
        <div className="list-course-left">12:00</div>
      </div>
    </div>

    // <div dangerouslySetInnerHTML={{__html:filterCourse.detailsTemplate}}   ></div>
  );
};

export default DetailCourse;
