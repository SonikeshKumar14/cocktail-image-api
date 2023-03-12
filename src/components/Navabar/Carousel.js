import React from 'react'
import First from '../../assets/First.jpg'
import Second from '../../assets/Second.jpg'
import Third from '../../assets/Third.jpg'

const Carousel = () => {
  return (
    <>
      <div id='carouselExampleAutoplaying' className="carousel slide" data-bs-ride='carousel'>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={First} className='d-block w-100' alt="" height='400'/>
            </div>
            <div className="carousel-item">
                <img src={Second} className='d-block w-100' alt="" height='400'/>
            </div>
            <div className="carousel-item">
                <img src={Third} className='d-block w-100' alt="" height='400'/>
            </div>
        </div>
        <button className="carousel-control-prev" type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
        </button>
        <button className="carousel-control-next" type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel