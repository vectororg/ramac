import React, { useState, useEffect } from 'react';
import { Card, Button, Image, Form, Modal } from 'react-bootstrap';
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

  if (!productData.length) {
    return <div>Loading...</div>;
  }
  const imageUrl = kivakuva;
  const addToCart = () => {
    // Toteuta haluttu toiminnallisuus, esim. tuotteen lisääminen ostoskoriin
  };

  const product = productData.find((item) => item.product_name === 'lippu');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div key={product.product_id} onClick={() => openModal(product)}>
        <Card>
          <Card.Body>
          <Image src={imageUrl} alt={product.name} fluid />
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            {/* Muut tuotetiedot */}
          </Card.Body>
        </Card>
      </div>

      <Modal show={selectedProduct !== null} onHide={closeModal} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.product_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <Image src={imageUrl} alt={product.name} fluid />
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
