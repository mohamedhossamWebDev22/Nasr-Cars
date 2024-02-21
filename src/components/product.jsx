const Product = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="product" />
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default Product;
