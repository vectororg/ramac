import React, { useState } from 'react';
import { Card, Button, Image, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
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
    setQuantity(0);
    setSelectedType('');
    setSelectedColor('');
    setSelectedSize('');
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
      <Card style={cardStyle}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title style={{ fontSize: '16px' }}>{truncateText(product.name, 20)}</Card.Title>
          <Card.Text style={{ fontSize: '14px' }}>{truncateText(product.description, 300)}</Card.Text>
          <Form>
            <Form.Group controlId="typeSelect">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={selectedType} onChange={handleTypeChange}>
                <option value="">Choose type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="colorSelect">
              <Form.Label>Color</Form.Label>
              <Form.Control as="select" value={selectedColor} onChange={handleColorChange}>
                <option value="">Choose color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="sizeSelect">
              <Form.Label>Size</Form.Label>
              <Form.Control as="select" value={selectedSize} onChange={handleSizeChange}>
                <option value="">Choose size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Form.Control>
            </Form.Group>
          </Form>
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
    </div>
  );
};

export default ProductCard;
