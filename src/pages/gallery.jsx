import React from "react";
import Header from "../components/header";
import Footr from "../components/footer";
import Animator from "../components/animator";
import TopBtn from "../components/topBtn";

import img1 from "../assets/cars/(1).jpg";
import img2 from "../assets/cars/ (2).jpg";
import img3 from "../assets/cars/ (3).jpg";
import img4 from "../assets/cars/ (4).jpg";
import img5 from "../assets/cars/ (5).jpg";
import img6 from "../assets/cars/ (6).jpg";
import img7 from "../assets/cars/ (7).jpg";
import img8 from "../assets/cars/ (8).jpg";
import img9 from "../assets/cars/ (9).jpg";
import img10 from "../assets/cars/ (10).jpg";
import img11 from "../assets/factory/ (1).jpg";
import img12 from "../assets/factory/ (2).jpg";
import img13 from "../assets/1.png";
import img14 from "../assets/loryAndAutoMoblie/ (1).jpg";
import img15 from "../assets/loryAndAutoMoblie/ (2).jpg";
import img16 from "../assets/loryAndAutoMoblie/ (3).jpg";
import img17 from "../assets/loryAndAutoMoblie/ (4).jpg";
import img18 from "../assets/factory/ (1).jpg";
import img19 from "../assets/factory/ (2).jpg";

const Gallery = () => {
  return (
    <>
      <Header />

      <Animator>
        <TopBtn/>

        <div className="gallery">
          <h1>معرض الصور</h1>
          <div className="row">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img5} alt="img" />
            <img src={img6} alt="img" />
            <img src={img7} alt="img" />
            <img src={img8} alt="img" />
            <img src={img9} alt="img" />
            <img src={img10} alt="img" />
            <img src={img11} alt="img" />
            <img src={img12} alt="img" />
            <img src={img13} alt="img" />
            <img src={img14} alt="img" />
            <img src={img15} alt="img" />
            <img src={img16} alt="img" />
            <img src={img17} alt="img" />
            <img src={img18} alt="img" />
            <img src={img19} alt="img" />
          </div>
        </div>
      </Animator>

      <Footr />
    </>
  );
};

export default Gallery;
