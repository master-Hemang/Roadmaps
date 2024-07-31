import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ options, isMainOptions }) => {
  return (
    <ListGroup variant="flush" className="sidebar">
      {options.map((option, index) => (
        <ListGroup.Item key={index} className="sidebar-item">
          {isMainOptions ? (
            <Link to={`/option/${option.toLowerCase().replace(/\s+/g, '-')}`} className="sidebar-link">{option}</Link>
          ) : (
            <span>{option}</span>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
