import img0 from "../images/image-product-1.jpg";
import img1 from "../images/image-product-2.jpg";
import img2 from "../images/image-product-3.jpg";
import img3 from "../images/image-product-4.jpg";
import imgP1 from "../images/image-product-1-thumbnail.jpg";
import imgP2 from "../images/image-product-2-thumbnail.jpg";
import imgP3 from "../images/image-product-3-thumbnail.jpg";
import imgP4 from "../images/image-product-4-thumbnail.jpg";
import Header from "./Header";
import { useState } from "react";
function Cart({ count, setCount }) {
  const [imageClass, setImageClass] = useState("active");
  const [mainImage, setMainImage] = useState(img0);
  const [countCart, setCountCart] = useState(0);
  const [countImg, setCountImg] = useState(0);
  const [ArticleBuy, setArticleBuy] = useState([]);
  const total = countCart * 125.0;
  // Función para seleccionar una imagen
  const SelectImg = (img) => {
    setMainImage(img);

    // Actualizamos la clase según la imagen seleccionada
    if (img === imgP1) {
      setImageClass("active");
    } else {
      setImageClass("");
    }
  };
  //Numero de items de producto para agregar al carrito
  const SumCount = (operador) => {
    if (count === 0 && operador === "-") return;
    setCount(operador === "+" ? count + 1 : count - 1);
  };
  // agregar al carrito

  const AddCart = () => {
    setCountCart(countCart + count);
    setArticleBuy(articleCart[0]);
  };

  // array del articulo

  const articleCart = [
    {
      id: 1,
      tittle: 'SNEAKER COMPANY',
      name: "Fall Limited Edition Sneakers",
      description: 'These low-profile sneakers are you perfect casual wear companion Featuring a durable rubber outer sole, they ll withstand everything the weather can offer.',
      price: 125.0,
      discount: 50,
      prevPrice: 250.0,
      img: img0,
      count: countCart,
    },
  ];

  //step photo the product
  const photos = [img0, img1, img2, img3];
  const handlePhotoClick = (value) => {
    setCountImg((prevCountImg) => {
      const newCountImg = value === "+" ? prevCountImg + 1 : prevCountImg - 1;
      // Asegurarse de que newCountImg esté dentro de los límites del arreglo photos
      if (newCountImg >= 0 && newCountImg < photos.length) {
        setMainImage(photos[newCountImg]);
        return newCountImg; // Devuelve el nuevo valor para actualizar el estado
      }
      // Si newCountImg está fuera de los límites, no lo actualices y devuelve prevCountImg
      return prevCountImg;
    });
  };
  return (
    <>
      <Header
        countCart={countCart}
        ArticleBuy={ArticleBuy}
        mainImage={mainImage}
        total={total}
        setCountCart={setCountCart}
      />
      <main className="Cart">
        <article className="Cart-img" onClick={() => modalImg}>
          <img src={mainImage} alt="1" className="img-principal" />
          <img
            src={img1}
            alt="2"
            className={imageClass}
            onClick={() => SelectImg(img0)}
          />
          <span className="boton-header">
            <button
              className="botones-header button-cart-movil-1"
              onClick={() => handlePhotoClick("-")}
            ></button>
            <button
              className="botones-header button-cart-movil-2"
              onClick={() => handlePhotoClick("+")}
            ></button>
          </span>
          <img
            src={imgP2}
            alt="3"
            className={mainImage === img1 ? "active" : ""}
            onClick={() => SelectImg(img1)}
          />
          <img
            src={imgP3}
            alt="4"
            className={mainImage === img2 ? "active" : ""}
            onClick={() => SelectImg(img2)}
          />
          <img
            src={imgP4}
            alt="5"
            className={mainImage === img3 ? "active" : ""}
            onClick={() => SelectImg(img3)}
          />
        </article>
        <article className="Cart-description">
          <b className="tittle">{articleCart[0].tittle}</b>
          <h1 className="h1">{articleCart[0].name}</h1>
          <p className="description">
            {articleCart[0].description}
          </p>
          <span className="contenedor-precios">
            <p className="price">${articleCart[0].price}</p>
            <ins className="discount">{articleCart[0].discount}%</ins>
            <del className="price-prev">${articleCart[0].prevPrice}</del>
          </span>
          <span className="shopping-cart">
            <button onClick={() => SumCount("-")} className="boton">
              -
            </button>
            <p>{count}</p>
            <button onClick={() => SumCount("+")} className="boton">
              +
            </button>
            <button onClick={AddCart} className="addcart">
              Add to Cart
            </button>
          </span>
        </article>
      </main>
    </>
  );
}

export default Cart;
