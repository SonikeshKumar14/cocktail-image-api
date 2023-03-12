import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-white pt-5 pb-4'>
        <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>
                        Company Name
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident dicta illo inventore placeat et ullam? Expedita natus adipisci nobis numquam id modi quis labore cupiditate, rerum iste sequi veritatis?</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Providers</a>
                    </p>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Creativity</a>
                    </p>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>SourceFiles</a>
                    </p>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Bootstrap 5</a>
                    </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful Links</h5>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Your Account</a>
                    </p>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Become an Affiliates</a>
                    </p>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Shipping Rates</a>
                    </p>
                    <p>
                        <a href="#" className='text-white' style={{textDecoration: 'none'}}>Help</a>
                    </p>
                </div> 
                 <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                     <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact</h5>
                     <p>
                        <i className='fas fa-home mr-3'></i> New York, NY 2333, US
                     </p>
                     <p>
                        <i className='fas fa-envelope mr-3'></i> providers98@gmail.com
                     </p>
                     <p>
                        <i className='fas fa-phone mr-3'></i> +92 3145689067
                     </p>
                     <p>
                        <i className='fas fa-print mr-3'></i> +01 355 633 77
                     </p>
                </div>
            </div>
            <hr className='mb-4'/>
            <div className="row align-items-center">
                 <div className="col-md-7 col-lg-8">
                    <p>Copyright ©2023 All rights reserved by:
                        <a href="#" style={{textDecoration: 'none'}}>
                            <strong className='text-warning'>Providers</strong>
                        </a>
                    </p>
                 </div>
                 <div className="col-md-5 col-lg-4">
                    <div className="text-center text-md-right">
                        <ul className='list-unstyled list-inline'>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize :'23px'}}><i className='fab fa-facebook'></i></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize :'23px'}}><i className='fab fa-twitter'></i></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize :'23px'}}><i className='fab fa-google-plus'></i></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize :'23px'}}><i className='fab fa-linkedin-in' ></i></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{fontSize :'23px'}}><i className='fab fa-youtube'></i></a>
                            </li>
                        </ul>
                    </div>
                 </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer