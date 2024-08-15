import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Villas from './components/Villa/Villas';
import SingleVilla from './components/Villa/SingleVilla';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import BookingForm from './components/Bookingform/Bookingform';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUp/SignUpForm';



const App = () => {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookingform' element={<BookingForm />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm/>} />
          <Route path='/villas' element={<Villas />} />
          <Route path='/villa/:id' element={<SingleVilla />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
