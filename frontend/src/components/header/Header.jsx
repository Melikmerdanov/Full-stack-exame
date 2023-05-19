import React from 'react'
import "./Header.scss"
const Header = () => {
  return (
    <div>
      <div className="header">
         <div className="navbar">

            <div className="navbar1">
            <div className="navbar1__left">
                <p><span>Now Hiring: </span>Are you a driven and motivaded 1st Line IT Support Engineer?</p>
            </div>
            <div className="navbar1__right">
                <ul>
                  <li><i class="fa-brands fa-facebook" ></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                </ul>
            </div>
            </div>

            <div className="navbar2">
            <div className="navbar2__left">
              <ul>
                <li><img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp" alt="" /></li>
                <li><a href="./">Home</a></li>
                <li><a href="./add">Add</a></li>
              </ul>
            </div>
            <div className="navbar2__right">
              <button>Free Quote</button>
              <div className="call">
                <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/headphones.svg" alt="" />
                <p><span>Have any Question?</span> <br />
                  Call: 10 (78) 837 3647</p>
              </div>
          
            </div>
            </div>
        </div>
      </div>
       

    </div>
  )
}

export default Header