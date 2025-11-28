import React from 'react';
import { useCart } from '../../context/CartContext';

const CartOffcanvas = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartOffcanvasLabel">Tu Carrito</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <i className="fa-solid fa-basket-shopping fa-3x mb-3 text-muted"></i>
            <p className="text-muted">Tu carrito está vacío compre algo necesito Churu</p>
            <button className="btn btn-primary" data-bs-dismiss="offcanvas">
              Seguir Comprando
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="card mb-3 border-0 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-3 p-2">
                    <img src={item.image} className="img-fluid rounded" alt={item.name} />
                  </div>
                  <div className="col-9">
                    <div className="card-body p-2">
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="card-title mb-1">{item.name}</h6>
                        <button 
                          className="btn btn-link text-danger p-0" 
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Eliminar producto"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                      <p className="card-text text-primary fw-bold mb-2">
                        ${item.price.toLocaleString()}
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >-</button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="offcanvas-footer">
        <div className="d-flex justify-content-between mb-3">
          <span className="fw-bold fs-5">Total:</span>
          <span className="fw-bold fs-5 text-primary">${getTotalPrice().toLocaleString()}</span>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary">Proceder al Pago</button>
          <button className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Seguir Comprando</button>
        </div>
      </div>
    </div>
  );
};

export default CartOffcanvas;
