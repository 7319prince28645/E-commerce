import avatar from "../images/image-avatar.png";
import Cart from "../images/icon-cart.svg";
import Delete from "../images/icon-delete.svg";
import { useState } from "react";
function Header({ countCart, ArticleBuy, mainImage, total,setCountCart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = (e) => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  const [menuAbierto, setMenuAbierto] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const isCartNotEmpty = countCart > 0;
  return (
    <header className="header">
      <span className="header-logo">
        <a href="/" className="logo">
          sneakers
        </a>
        <a href="/Collections">Collections</a>
        <a href="/Men">Men</a>
        <a href="/Women">Women</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </span>
      <span className="header-movil">
        <div className="menu-movil" onClick={toggleMenu}>
          <i className="fas"></i>
          <i className="fas"></i>
          <i className="fas"></i>
        </div>
        {menuAbierto && (
          <div
            className={`fondo-modal ${menuAbierto ? "activo" : ""}`}
            onClick={toggleMenu}
          >
            <div className={`modal-movil ${menuAbierto ? "activo" : ""}`}>
              <p className="cerrar" onClick={toggleMenu}>
                x
              </p>
              <a href="/Collections">Collections</a>
              <a href="/Men">Men</a>
              <a href="/Women">Women</a>
              <a href="/About">About</a>
              <a href="/Contact">Contact</a>
            </div>
          </div>
        )}

        <a href="" className="logo-movil">
          sneakers
        </a>
      </span>
      <span className="header-cart">
        <a href="/Register" className="Cart-header" onClick={toggleCart}>
          {" "}
          <img src={Cart} alt="" />
          <p
            className={`${isCartNotEmpty ? "cart-image " : "cart-not-empty "}`}
          >
            {countCart}{" "}
          </p>
        </a>
        {showCart && (
          <div className="dialog">
            <p>Cart</p>
            <hr />
            {isCartNotEmpty ? (
              <div className="contenedor-modal-cart">
                <img src={mainImage} alt="" className="modal-cart-img" />
                <div className="contenedor-p">
                  <p className="descripcion-modal"> {ArticleBuy.name} </p>
                  <p className="precio-modal">
                    {" "}
                    ${ArticleBuy.price} x {countCart}
                  </p>
                  <p className="total-modal"> ${total}</p>
                </div>
                <img
                  src={Delete}
                  alt=""
                  className="delete"
                  onClick={() => setCountCart(0)}
                />
              </div>
            ) : (
              <p className="cart-empty">Tu cart esta vacio</p>
            )}
            {isCartNotEmpty && (
              <button className="boton-modal">CheckOut</button>
            )}
          </div>
        )}
        <a href="/Cart" className="content-avatar">
          <img src={avatar} alt="" className="avatar" />{" "}
        </a>
      </span>
    </header>
  );
}

export default Header;
