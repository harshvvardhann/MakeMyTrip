import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const data = [
  {
    title: 'Card Title 1',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Card Title 2',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: '',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: 'https://via.placeholder.com/150',
  },
];

const CardComponent = () => {
  return (
    <Row>
      {data.map((item, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardComponent;
