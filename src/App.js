import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
  <MyNav />
  <Welcome/>
  <AllTheBooks />
  <MyFooter />

  </>
  );
}

export default App;
