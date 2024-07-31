import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = ({ options, searchQuery }) => {
  const filteredOptions = options.filter(option => option.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Row>
      {filteredOptions.map((option, index) => (
        <Col key={index} xs={12} md={6} lg={4} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={`/images/${option.image}`} className="card-image"  />
            <Card.Body>
              <Card.Title>
                <Link to={`/option/${option.name.toLowerCase().replace(/\s+/g, '-')}`} className="card-link">
                  {option.name}
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Main;
