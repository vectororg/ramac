import React, { useState, useEffect } from 'react';
import { Card, Button, Image, Modal, Row, Col } from 'react-bootstrap';
import kivakuva from '../img/kivakuva.webp';

const ProductCard = ({ onAddToCart }) => {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://nr.vector.fi:1891/ramac/rest/v1/products');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = () => {
    // Toteuta haluttu toiminnallisuus, esim. tuotteen lisääminen ostoskoriin
  };

  const imageUrl = kivakuva;

  const renderProductCards = () => {
    return productData.map((product) => (
      <Col key={product.product_id} sm={12} md={4} onClick={() => openModal(product)}>
        <Card className="shadow-sm mb-4" style={{ cursor: 'pointer' }}>
          <Card.Body>
            <Image src={imageUrl} alt={product.product_name} fluid />
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            {/* Muut tuotetiedot */}
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const chunkProductCards = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedProductCards = chunkProductCards(renderProductCards(), 3);

  return (
    <div>
      {chunkedProductCards.map((chunk, index) => (
        <Row key={index}>{chunk}</Row>
      ))}

      <Modal show={selectedProduct !== null} onHide={closeModal} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.product_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={imageUrl} alt={selectedProduct.product_name} fluid />
              <p>{selectedProduct.description}</p>
              {/* Modaalin sisältö */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={addToCart}>
                Add to Cart
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProductCard;
