import React, { useState, useEffect } from 'react';
import { Card, Button, Image, Modal, Row, Col } from 'react-bootstrap';
import kivakuva from '../img/kivakuva.webp';

const ProductCard = () => {
  const [productData, setProductData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Lisätty tila määrälle

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
    setQuantity(1); // Alustetaan määrä yhdellä aina, kun avataan modal
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleUpdateQuantity = (change) => {
    // Vähennetään määrää yhdellä, mutta varmistetaan, ettei määrä mene negatiiviseksi
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  const addToCart = () => {
    // Tarkistetaan, onko tuote jo lisätty välimuistiin
    const existingProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingProduct = existingProducts.find((product) => product.product_id === selectedProduct.product_id);

    if (existingProduct) {
      // Jos tuote on jo lisätty, päivitetään sen määrää
      existingProduct.quantity += quantity;
    } else {
      // Jos tuotetta ei ole vielä lisätty, lisätään se välimuistiin
      const productWithQuantity = { ...selectedProduct, quantity };
      existingProducts.push(productWithQuantity);
    }

    localStorage.setItem('cartItems', JSON.stringify(existingProducts));
    closeModal();
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
            <Card.Text>{product.price}€</Card.Text>
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
              <p>{selectedProduct.price}€</p>
              <div>

              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
                {/* Lisätty määrän säätönapulat */}
                <Button variant="secondary" onClick={() => handleUpdateQuantity(-1)}>
                  -
                </Button>
                <span>{quantity}</span>
                <Button variant="secondary" onClick={() => handleUpdateQuantity(1)}>
                  +
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
