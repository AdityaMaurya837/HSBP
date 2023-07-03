import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import Appointment from './components/Appointment/Appointment';
import { BeautyPackage } from './components/BeautyPackages';
import Location from './components/Location/Location';
import { ProductShop } from './components/ProductShop/ProductShop';
import Franchise from './components/Franchise/Franchise';
import Testimonials  from './components/Testimonials/Testimonials';
import DownloadApp from './components/DownloadApp/DownloadApp';
import { Copyright } from './components/Copyright/Copyright';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Category/>
      <Services/>
      <Appointment/>
      <BeautyPackage/>
      <Location/>
      <ProductShop/>
      <Franchise/>
      <DownloadApp/>
      <Testimonials/>
      <Copyright/>
    </div>
  );
}

export default App;