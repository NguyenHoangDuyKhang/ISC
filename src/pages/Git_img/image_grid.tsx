import "./image_grid.css";
import img from "./../../assets/img/img.jpg";
import img2 from "./../../assets/img/img2.jpg";
import img3 from "./../../assets/img/img3.jpg";
import img4 from "./../../assets/img/img4.jpg";
import img5 from "./../../assets/img/img5.jpg";
import img6 from "./../../assets/img/img6.jpg";
import img7 from "./../../assets/img/img7.jpg";
import img8 from "./../../assets/img/img8.jpg";

const images = [img, img2, img3, img4, img5, img6, img7, img8];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div key={index} className="image-item">
          <img src={src} alt={`image-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
