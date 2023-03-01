import React from 'react';
import BodyContent from '../../components/BodyContent/bodyContent';
import Header from '../../components/Header/header';
import './Home.css';
import Footer from '../../components/Footer/footer';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <BodyContent />
      <Footer />
    </div>
  );
}