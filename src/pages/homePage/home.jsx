import React from 'react';
import BodyContent from '../../components/BodyContent/bodyContent';
import Header from '../../components/Header/header';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <BodyContent />
    </div>
  );
}