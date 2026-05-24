import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css';


import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import News from './pages/News';
import Events from './pages/Events';
import ContactsPage from './pages/ContactsPage';
import NewsDetail from './components/NewsDetail/NewsDetail';
import EventDetail from './components/EventsDetail/EventsDetail';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <BrowserRouter>
                                  
      <ScrollToTop/>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/events/:id" element={<EventDetail/>} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
    
  );
}

export default App;
