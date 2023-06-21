import React, { useState } from 'react';
import { Card, Button, Image, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addToCart = () => {
    onAddToCart(product.name, quantity);
    setQuantity(0);
  };

  const cardStyle = {
    margin: '10px',
    cursor: 'pointer',
    width: '300px',
    height: 'auto',
    textOverflow: 'ellipsis',
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div>
      <Card style={cardStyle} onClick={openModal}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title style={{ fontSize: '16px' }}>{truncateText(product.name, 20)}</Card.Title>
          <Card.Text style={{ fontSize: '14px' }}>{truncateText(product.description, 300)}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={modalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={product.image} alt={product.name} fluid />
          <p>{product.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button className="decrement" variant="outline-dark" onClick={handleDecrement}>
              -
            </Button>
            <span style={{ marginLeft: '8px', marginRight: '8px', fontSize: '14px' }}>{quantity}</span>
            <Button className="increment" variant="outline-dark" onClick={handleIncrement}>
              +
            </Button>
            <Button className="add-to-cart" variant="dark" onClick={addToCart}>
              {t('productCard.addToCartButton')}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCard;
