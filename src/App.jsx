import React from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import './index.css'
import Carousel from './Carousel'


function App() {
  const slides = [img3, img4, img2, img1]
  return (
    <div className="App max-w-3xl mx-auto mt-6">
      <Carousel autoSlide={true} >
        {slides.map((s)=>(
          <img src={s} alt="slide" />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
