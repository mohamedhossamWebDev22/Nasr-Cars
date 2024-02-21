import Header from '../components/header';
import Product from '../components/product';
import Footr from '../components/footer';
import Animator from "../components/animator";
import TopBtn from '../components/topBtn';


import car131 from "../assets/cars/(1).jpg";
import car125 from "../assets/cars/ (2).jpg"
import img3 from "../assets/cars/ (3).jpg"
import bolones from "../assets/cars/ (4).jpg"
import ramsesCar from "../assets/cars/ (5).jpg"
import shahinImg from "../assets/cars/ (6).jpg"
import car128 from "../assets/cars/ (7).jpg"

const Products = () => {
  return (
    <>
      <Header/>

      <Animator>
        <TopBtn/>

        <div className="products">
          <h1>منتجاتنــا</h1>
          
          <div className="row">
            <Product img={ramsesCar} title="رمسيس"/>
            <Product img={shahinImg} title="النصر شاهين"/>
            <Product img={car125} title="نصر 125"/>
            <Product img={car128} title="نصر 128"/>
            <Product img={car131} title="نصر 131"/>
            <Product img={bolones} title="نصر بولونيز"/>
          </div>
        </div>
      </Animator>

      <Footr/>
    </>
  );
}

export default Products;
