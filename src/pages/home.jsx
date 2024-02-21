import Header from "../components/header";
import Footr from "../components/footer";
import Animator from "../components/animator";
import TopBtn from "../components/topBtn";


import { BsArrowDown } from "react-icons/bs";

import { Link } from "react-router-dom";

import logo from "../assets/info/ (4).png";
import logo2 from "../assets/info/ (5).png";

import img1 from "../assets/cars/ (9).jpg";
import img2 from "../assets/loryAndAutoMoblie/ (2).jpg";
import img3 from "../assets/cars/ (10).jpg";
import img4 from "../assets/factory/ (1).jpg";


function Home() {
  return (
    <>
      <Animator>
        <TopBtn/>

        <div className="first landingPage">
          <div className="landingPage">
            <div className="txt">
              <img src={logo} alt="Company Logo" />
              <h1>الـنـصـر للسيــارات</h1>
              <p>
                <a href="#links">
                  <BsArrowDown className="arrow" />
                </a>
              </p>
            </div>
            <div className="img">
              <img src={img1} alt="Img Landing Page" />
            </div>
          </div>

          <Header />

          <div id="links">
            <img src={logo2} alt="Company Logo" />
            <h1>النـصـر للسيــارات</h1>
            <p>
              تأسست شركة <a>النصر لصناعة السيارات</a> كجزء من مشروع حكومي مصري طموح يهدف
              إلى تحقيق الاكتفاء الذاتي في صناعة السيارات. بدأت الشركة بتجميع
              السيارات في المرحلة الأولى وتطورت تدريجياً لتصنيع سياراتها بشكل
              كامل.
            </p>

            <hr />

            <div className="row">
              <Link to={'/story'}>
                <div className="card">
                  <img src={img2} alt="story" />
                  <h1>قصتنا</h1>
                </div>
              </Link>
              <Link to={'/products'}>
                <div className="card">
                  <img src={img3} alt="story" />
                  <h1>منتاجتنا</h1>
                </div>
              </Link>
              <Link to={'/gallery'}>
                <div className="card">
                  <img src={img4} alt="story" />
                  <h1>معرض الصور</h1>
                </div>
              </Link>
            </div>
          </div>

          <Footr />
        </div>
      </Animator>
    </>
  );
}

export default Home;
