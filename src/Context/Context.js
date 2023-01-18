import React, { useState } from "react";
import { createContext } from "react";
import Product from "./../Components/Product/Product";

export const dbContext = createContext();

const Context = ({ children }) => {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [userName, setUsername] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [userPhone, setUserphone] = useState("");
  const [brand, setBrand] = useState("");
 
  

  const [userCart, setUserCart] = useState([])
  const [isShowCart, setIsShowCart] = useState(false)
  // const [totalCurt,setTotalCurt]=useState(0)
  const [price,setPrice]=useState(0)

  const [db, setDb] = useState({
    products: [
      {
        id: 1,
        name: "اموزش جااواسکریپت",
        price: 12000,
        image: "/images/js_project.png",
        // image
        albume:["/images/546456.jpeg","/images/python.png"],

        category: "فرانت اند",
        detailsTemplate: `
        <div class="container">
        <p class="product-info-header">
          آموزش رایگان جاوا اسکریپت مقدماتی تا پیشرفته + پروژه های جذاب
        </p>
  
        <div class="product-info">
          <div class="product-info-right">
         
            <video
              src="/video/video.mp4"
              class="product-info-video"
              poster="/images/js_project.png"
              controls
            />
          </div>
          <div class="product-info-left">
            <p class="category">
              دسته:
              <span class="first-child">اموزش برنامه نویسی فرانت اند</span>
              <span class="mahbob">محبوب ترین دوره ها</span>
            </p>
            <p class="kharid">
              پس از خرید، بلافاصله به محتوای دوره دسترسی خواهید داشت و میتوانید
              دوره را مشاهده و یا دانلود کنید.
            </p>
            <p class="suoprt"> پــروژه مــحور بودن دوره هــــا</p>
            <p class="suoprt"> پشتیبـــانی دائــــمی محصولات</p>
            <p class="suoprt"> تضمین کیــفیت کلیـه محصولات</p>
  
            <div class="phrosh-info">
              <span class="phrosh">تعداد فروش</span>
              <span class="count">:1200</span>
              <a class="sale">خرید دوره</a>
            </div>
          </div>
        </div>
  
        <div class="description">
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
        <div class="title-description">
          <h1>توضیحات دوره آموزش مقدماتی تا پیشرفته جاوا اسکریپت</h1>
        </div>
        <div class="image-one">
          <img src="/images/546456.jpeg" alt="" />
        </div>
        <div class="description-two">
          <p class="title">آموزش جاوا اسکریپت</p>
          <p class="sub-title">
            امروزه زبان جاوا اسکریپت لایبرری ها و فریمورک های بسیار زیادی دارد و
            بسیاری از آن ها به قدری گسترده بوده و مطالب زیادی دارند که نمی توان
            حتی یکی از آن ها را در دوره جاوا اسکریپت جای داد.
          </p>
          <p class="sub-title">
            به همین خاطر در آموزش جاوا اسکریپت سبزلرن فقط سرفصل های مربوط به زبان
            برنامه نویسی جاوا اسکریپت تدریس شده اند و از هیچ کدام از لایبری ها و
            فریمورک های آن استفاده نشده است.
          </p>
        </div>
        <div  class="downloas-btns">
          <a href="" class="all">دانلود همگانی ویدیو</a>
          <a href="" class="pyvast">دانلود همگانی پیوست</a>
  
        </div>
        <div class="total-course">
          <p>مباحث این دوره</p>
          <span>400درس</span>
  
        </div>
        <div class="list-course">
  
          <div class="list-course-right">
          <span>1</span>
          <a href="">معرفی دوره</a>
  
          </div>
          <div class="list-course-left">
            12:00
          </div>
      
          
  
  
  
        </div>
         <div class="list-course">
  
          <div class="list-course-right">
          <span>2</span>
         <a href="">کامنت گذار</a>
  
          </div>
          <div class="list-course-left">
            12:00
          </div>
      
          
  
  
  
        </div>
        <div class="list-course">
  
          <div class="list-course-right">
          <span>3</span>
          <a href="">دیتا تایپ ها در جاوااسکریپت</a>
  
          </div>
          <div class="list-course-left">
            12:00
          </div>
  
  
  
  
  
  </div>
  
  
  
      </div>
        
        `,
        nameCourse: "react",
      },
      {
        id: 2,
        name: "اموزش پایتون",
        price: 90000,
        image: "/images/python.png",
        category: "بک اند",
        detailsTemplate: `<h1  style="text-align:center;color:red">جزییات  محصول</h1>`,
        nameCourse: "payton",
        albume:["/images/546456.jpeg","/images/python.png"],
      },
      {
        id: 3,
        name: "اموزش نود جی اس",
        price: 60000,
        image: "/images/nodejs.png",
        category: "بک اند",
        detailsTemplate: `<h1 style="text-align:center;color:red">جزییات  محصول</h1>`,
        nameCourse: "nodejs",
        albume:["/images/546456.jpeg","/images/python.png"],
      },
      {
        id: 4,
        name: "اموزش جنگو",
        price: 1000000,
        image: "/images/jango.png",
        category: "بک اند",
        detailsTemplate: `<h1 style="text-align:center;color:red">جزییات  محصول</h1>`,
        nameCourse: "jango",
        albume:["/images/546456.jpeg","/images/python.png"],
      },
      {
        id: 5,
        name: "اموزش یوتیوب",
        price: 30000,
        image: "/images/youtuber.png",
        category: "فرانت اند",
        detailsTemplate: `<h1 style="text-align:center;color:red">جزییات  محصول</h1>`,
        nameCourse: "youtube",
        albume:["/images/546456.jpeg","/images/python.png"],
      },
      {
        id: 6,
        name: "پرو ژه های فریلنسری",
        price: 40000,
        image: "/images/fareelancer.png",
        category: "فرانت اند",
        detailsTemplate: `<h1 style="text-align:center;color:red">جزییات  محصول</h1>`,
        nameCourse: "react",
        albume:["/images/546456.jpeg","/images/python.png"],
      },
    ],
    currentUser: { id: null, name: "", role: "" },
    users: [
      {
        id: 1,
        name: "مریم",
        username: "Maryam",
        email: "maryam@yahoo.com",
        phone: "1234567890",
        password: 123456,
        role: "admin",
      },
      {
        id: 2,
        name: "علی",
        username: "Ali",
        email: "ali@yahoo.com",
        phone: "1234567890",
        password: 111111,
        role: "user",
      },
      {
        id: 3,
        name: "سارا",
        username: "Brett",
        email: "sara@yahoo.com",
        phone: "1234567890",
        password: 345678,
        role: "user",
      },
      {
        id: 4,
        name: "میلاد",
        username: "Brett",
        email: "milad@yahoo.com",
        phone: "1234567890",
        password: 998888,
        role: "user",
      },
    ],
  });

 

  const deleteProduct = (id) => {
    console.log(db.products);
    const clone = JSON.parse(JSON.stringify(db));
    // ar.products.filter((product)=>console.log(product))
    const newPro = clone.products.filter((product) => product.id !== id);
    console.log(newPro);
    clone.products = newPro;
    setDb(clone);
  };

  const AddProduct = (e) => {
    e.preventDefault();
    if (inputName == "" && inputPrice == "") {
      return alert("لطفا تمام قسمتها  را پر کنید");
    }

    const newData = {
      id: db.products.length + 1,
      name: inputName,
      price: inputPrice,
      image: inputImage,
    };

    console.log(newData);
    const newDb = { ...db };
    // console.log(newProducts)

    newDb.products.push(newData);

    setDb(newDb);
    setInputName("");
    setInputPrice("");
  };

  const editProduct = (id, data) => {
    // console.log(data)

    /*
            name
            price
            img
        */
    // const clone = JSON.parse(JSON.stringify(db))
    // const index = clone.products.findIndex(item => item.id == id)

    // clone.products[index].name = data.name
    // clone.products[index].name = data.price
    // clone.products[index].name = data.img

    const clone = JSON.parse(JSON.stringify(db));
    console.log(clone);
    const index = clone.products.findIndex((item) => item.id == id);

    clone.products[index].name = data.name;
    clone.products[index].price = data.price;
    clone.products[index].image = data.image;

    setDb(clone);
  };

  const deleteUser = (id) => {
    const clone = JSON.parse(JSON.stringify(db));
    console.log(clone);
    const newUser = clone.users.filter((user) => user.id !== id);
    // console.log(newUser)
    clone.users = newUser;
    setDb(clone);
  };

  const addUser = (e) => {
    e.preventDefault();
    console.log("ok");
    const clone = JSON.parse(JSON.stringify(db));
    const newUser = {
      id: db.users.length + 1,
      name: userName,
      email: userEmail,
      phone: userPhone,
    };

    clone.users.push(newUser);

    setDb(clone);
  };

  const EditUser = (data, id) => {
    const clone = JSON.parse(JSON.stringify(db));
    const editUserIndex = clone.users.findIndex((user) => user.id == id);
    clone.users[editUserIndex].name = data.name;
    clone.users[editUserIndex].phone = data.phone;
    clone.users[editUserIndex].email = data.email;
    setDb(clone);
  };

  const filterSelect = (event) => {
    // console.log(event.target.value)
    const clone = JSON.parse(JSON.stringify(db));
    const filterProduct = clone.products.filter(
      (item) => item.category == "فرانت اند"
    );

    if (event.target.value === "") {
      setBrand(event.target.value);

      setDb([...clone, filterProduct]);
    } else if (event.target.value === "امتیاز") {
      setBrand(event.target.value);
    } else if (event.target.value === "ارزان ترین") {
      setBrand(event.target.value);
      const sortProduct = filterProduct.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      clone.products = sortProduct;

      setDb(clone);
    } else if (event.target.value === "گران ترین") {
      setBrand(event.target.value);
      const sortProduct = filterProduct.sort((a, b) =>
        a.price < b.price ? 1 : -1
      );
      clone.products = sortProduct;

      setDb(clone);
    }
  };

  const searchCourse = (value) => {
    console.log(value);

    const clone = JSON.parse(JSON.stringify(db));

    const newProduct = clone.products.find(
      (product) => product.nameCourse == value
    );
    console.log(newProduct);
    clone.products = newProduct;
    setDb(clone);
  };






  const validate = (data, type) => {

    console.log(data,"data")
  
   
    const errorsvalidate = {}
  

    if (data.email !== "") {
      if (/\S+@\S+\.\S+/.test(data.email)) {
     
        
       delete  errorsvalidate.email
      } else {
   
        errorsvalidate.email="email not valid"
      }
    } else {
   
      errorsvalidate.email="email requer"
    }

  
    if (data.password !== "" ) {
      if (data.password.length < 6) {
      
        errorsvalidate.password="password bishtar az 6"
      } else {
   
       delete errorsvalidate.password
      
      }
    } else {
    
      errorsvalidate.password="password requer"

    }



    if (type === "signup") {
      if (data.name.trim() !== "") {
     
       delete errorsvalidate.name
      } else {
    
        errorsvalidate.name="name requer"
      }

      if (data.confrimpassword !== "") {
        if (data.password !== data.confrimpassword) {
          
          errorsvalidate.confrimpassword="Password do not match"
        } else {
         
           delete errorsvalidate.confrimpassword
        }
      } else {
    
        errorsvalidate.confrimpassword="Confirm the password"
      }
      if (data.isAccepted) {
  
      delete  errorsvalidate.isAccepted

      } else {
     
        errorsvalidate.isAccepted="Accept our regulations"
      }
    }
    // setErrors(errorsvalidate)
    // console.log(errors,"errors")
    return errorsvalidate
   
  
    
  };

  const incrementCart=(course,x)=>{
    console.log(course)
    const findProductId=userCart.indexOf((course))
     
   
     const clone = JSON.parse(JSON.stringify(userCart));
    
    if(x==="+"){
      clone[findProductId].count+=1

  
      setUserCart(clone);

    



    }else{
      
      clone[findProductId].count-=1
      if(clone[findProductId].count<0){
        clone[findProductId].count=0

      }

  
      setUserCart(clone);

    }
    
   

  }


  return (
    <dbContext.Provider
      value={{
        db,
        setDb,
        deleteProduct,
        inputName,
        setInputName,
        inputPrice,
        setInputPrice,
        inputImage,
        setInputImage,
        AddProduct,
        editProduct,
        deleteUser,
        userName,
        setUsername,
        userEmail,
        setUseremail,
        userPhone,
        setUserphone,
        addUser,
        EditUser,
        brand,
        filterSelect,
        searchCourse,
        validate,
     
        userCart, 
        setUserCart,
        isShowCart,
         setIsShowCart,
         incrementCart,
         price,
         setPrice,
     
      }}
    >
      {children}
    </dbContext.Provider>
  );
};

export default Context;
