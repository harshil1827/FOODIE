import React from 'react'

function Carousel() {
  return (
    <>
   <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{maxHeight:'25rem',backgroundColor:'green',marginTop:'4%'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide" style={{maxHeight:'25rem'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=1800&t=st=1720118190~exp=1720118790~hmac=79d946c55e4af13b5c67e4ff6c18a56b15174e4029b5a2fa73ff498c474c7663" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg?t=st=1720116596~exp=1720120196~hmac=839fade0dc1a4f00010b57786efef5fa2b9d57f3fb4aed90098cbceeb01c2790&w=1800" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
   
  </a>
</div>
    </>
  )
}

export default Carousel
