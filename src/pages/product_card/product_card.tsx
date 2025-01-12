import "./product_card.css";
import img from "./../../assets/img/img.jpg";
import img2 from "./../../assets/img/img2.jpg";
import img3 from "./../../assets/img/img3.jpg";
import img4 from "./../../assets/img/img4.jpg";
const data_products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    image: img,
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    image: img2,
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    image: img3,
  },
  {
    id: 4,
    name: "Sản phẩm 4",
    image: img4,
  },
];

const Product_Card = () => {
  return (
    <div className="product-list">
      {data_products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-name">{product.name}</h3>
          <button className="add-to-cart-btn">Thêm vào giỏ hàng</button>
        </div>
      ))}
    </div>
  );
};

export default Product_Card;
