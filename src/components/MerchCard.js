import React, { useState } from 'react';
import { Card, Button, Image, Modal, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MerchCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const { t } = useTranslation();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const addToCart = () => {
    const variant = {
      type: selectedType,
      color: selectedColor,
      size: selectedSize,
    };

    onAddToCart(product.name, quantity, variant);
    setShowPopup(false);
    setQuantity(0);
    setSelectedType('');
    setSelectedColor('');
    setSelectedSize('');
  };

  const cardStyle = {
    margin: '10px',
    cursor: 'pointer',
    width: '300px',
    height: 'auto', // Muuta korkeus automaattiseksi
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
      <Card style={cardStyle} onClick={handleCardClick}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title style={{ fontSize: '16px' }}>{truncateText(product.name, 20)}</Card.Title>
          <Card.Text style={{ fontSize: '14px' }}>{truncateText(product.description, 300)}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ flexWrap: 'wrap' }}>
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
        </Card.Footer>
      </Card>

      <Modal show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={product.image} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Form>
              <Form.Group controlId="typeSelect">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" value={selectedType} onChange={handleTypeChange}>
                  {/* Lisää tähän tietokannasta haetut tyypit */}
                  <option value="">Choose type</option>
                  <option value="Type 1">Type 1</option>
                  <option value="Type 2">Type 2</option>
                  <option value="Type 3">Type 3</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="colorSelect">
                <Form.Label>Color</Form.Label>
                <Form.Control as="select" value={selectedColor} onChange={handleColorChange}>
                  {/* Lisää tähän tietokannasta haetut värit */}
                  <option value="">Choose color</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="sizeSelect">
                <Form.Label>Size</Form.Label>
                <Form.Control as="select" value={selectedSize} onChange={handleSizeChange}>
                  {/* Lisää tähän tietokannasta haetut koot */}
                  <option value="">Choose size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Modal.Body>
        <Modal.Footer style={{ flexWrap: 'wrap' }}>
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

export default MerchCard;
