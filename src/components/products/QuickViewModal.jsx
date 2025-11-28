import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img src={product.image} alt={product.name} className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <h3 className="mb-3">{product.name}</h3>
                <p className="price fs-4 fw-bold text-primary">
                  ${product.price.toLocaleString()}
                  {product.originalPrice && <s className="text-muted ms-2 fs-6">${product.originalPrice.toLocaleString()}</s>}
                </p>
                <p>{product.description || "Descripción no disponible."}</p>
                
                <div className="d-flex align-items-center gap-3 mb-4">
                  <label htmlFor="product-qty" className="fw-bold">Cantidad:</label>
                  <div className="input-group" style={{ width: '120px' }}>
                    <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <input type="number" className="form-control text-center" id="product-qty" value={quantity} readOnly />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <button className="btn btn-primary w-100" onClick={handleAddToCart}>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
