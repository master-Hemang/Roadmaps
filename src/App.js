import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import OptionPage from './components/OptionPage';
import SearchBar from './components/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const sidebarOptions = ['Explore', 'Projects', 'Jobs', 'Roadmaps', 'Testimonials', 'DSA', 'Courses', '1:1 Mentorship'];
  const mainOptions = [
    { name: 'Mern FullStack', image: 'mern.jpg', flowchart: 'mern.png' },
    { name: 'Blockchain Development', image: 'blockchain.png', flowchart: 'blockchain.png' },
    { name: 'DSA', image: 'dsa.png', flowchart: 'dsa.png' },
    { name: 'Next JS', image: 'next.png', flowchart: 'next.png' },
    { name: 'Prompt Engineer', image: 'prompt.png', flowchart: 'prompt.png' },
    { name: 'FullStack Development', image: 'full.png', flowchart: 'full.png' },
    { name: 'Java', image: 'java.jpg', flowchart: 'java.png' },
    { name: 'Python', image: 'python.jpg', flowchart: 'python.png' },
    { name: 'JavaScript', image: 'js.png', flowchart: 'js.png' },
  ];
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container fluid className="app-container">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Row className="justify-content-end mb-4">
                <Col xs={12} md={8} lg={12}>
                  <SearchBar onSearch={setSearchQuery} />
                </Col>
              </Row>
              <Row className="main-page">
                <Col xs={12} md={8} lg={12}>
                  <Main options={mainOptions} searchQuery={searchQuery} />
                </Col>
              </Row>
            </>
          } 
        />
        <Route 
          path="/option/:optionId" 
          element={
            <Row className="option-page">
              <Col xs={12} md={4} lg={3}>
                <Sidebar options={mainOptions.map(option => option.name)} isMainOptions={true} />
              </Col>
              <Col xs={12} md={4} lg={9}>
                <OptionPage options={mainOptions} />
              </Col>
            </Row>
          } 
        />
      </Routes>
    </Container>
  );
};

export default App;
