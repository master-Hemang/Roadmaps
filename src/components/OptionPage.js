import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const OptionPage = ({ options }) => {
  const { optionId } = useParams();
  const option = options.find(opt => opt.name.toLowerCase().replace(/\s+/g, '-') === optionId);
  const optionName = option ? option.name : '';

  return (
    <Container fluid className="option-page">
      <Row>
        <Col>
          <h2 className="text-center text-primary my-3">{optionName}</h2>
          {option && (
            <div className="d-flex justify-content-center">
              <Image src={`/flowcharts/${option.flowchart}`} alt={`${optionName} Flowchart`} fluid rounded />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OptionPage;
