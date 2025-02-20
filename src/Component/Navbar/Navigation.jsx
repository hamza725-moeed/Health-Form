import React from 'react'
import '../Navbar/Navigation.css';


export default function Navigation() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid first" style={{
    maxWidth:'1164px',
  }}>
    <a className="navbar-brand" href="/">
    <img src="/Assests/Logo.png" alt="" className='logoimg' />
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{maxWidth:'709px', margin:'auto',gap:'10px',}}>
        <li className="nav-item">
          <a className="nav-link active poppins-regular" aria-current="page" href="#" >About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active poppins-regular" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active poppins-regular" aria-current="page" href="#">BMS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active poppins-regular" aria-current="page" href="#">Assurance</a>
        </li>
        <li className="nav-item dropdown text-black">
          <a className="nav-link dropdown-toggle poppins-regular" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
            color:'#090F4E'
          }}>
            Industries
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item poppins-regular" href="#">Employers</a></li>
            <li><a className="dropdown-item poppins-regular" href="#">Insurance Companies</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            <li><a className="dropdown-item poppins-regular" href="#">Government Healthcare</a></li>
            <li><a className="dropdown-item poppins-regular" href="#">Providors (Hospitals,Labs,Pharmacies)</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active poppins-regular" aria-current="page" href="#">POS System</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active poppins-regular" aria-current="page" href="#">Blogs</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-primary poppins-regular" type="submit" style={{
            minWidth:'155px', height:'51px', fontSize:'18px', fontWeight:'500px'
        }}>Get Started</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
