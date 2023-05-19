import React from 'react'
import { Button } from '@mui/material';
import "./Home.scss"
const Home = () => {
  return (
    <div>
      <div className="section1">
          <div className="section1__text">
            <h2>Best IT Solution <br /> in your city</h2>
            <p>Prevent data loss with encrypted storage and virtualized <br />
            recovert, then enjoy increased productivity.
            </p>
            <Button variant="outlined">Find Out More</Button>          
          </div>
      </div>
    
      <div className="section2">
        <span>INDUSTRY WE OFFER</span>
        <h2>Managed IT services customized for your industry</h2>
        <p>We understand the complexities of modern markets and translate them into real business solutions for <br />
        automotive, financial, insurance, pharma & life sciences,
        </p>
        <div className="cards">
          <div className="card card1">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services1.svg" alt="" />
            <p>Industries & <br /> Manufacturing</p>
          </div>
          <div className="card card2">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services2.svg" alt="" />
            <p>Industries & <br /> Manufacturing</p>
          </div>
          <div className="card card3">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services3.svg" alt="" />
            <p>Industries & <br /> Manufacturing</p>
          </div>
          <div className="card card4">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services5.svg" alt="" />
            <p>Industries & <br /> Manufacturing</p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3__left">
          <div className="section3__left__text">
            <h2>Insights to help you do <br /> what you do better, faster <br /> and more profitably.</h2>
            <p>We understand the complexities of modern <br /> markets and translate them into real business <br /> solutions for automotive, financial, insuranc.</p>
            <Button variant="outlined">Learn More</Button>          
          </div>
        </div>
        <div className="sectio3__right">
          <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg.webp" alt="" />
        </div>
      </div>

      <div className="section4">
        <p>OUR CASE STUDY</p>
        <h2>We work with global brands</h2>

        <div className="cards">
          <div className="card card1">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog4.jpg.webp" alt="" />
            <div className="text">
            <h3>Complexities of modern markets</h3>
            <p>UniCode</p>
            </div>
           
          </div>
          <div className="card card2">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog5.jpg.webp" alt="" />
            <div className="text">
            <h3>Backup and recovery</h3>
            <p>UniCode</p>
            </div>
          </div>
          <div className="card card3">
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/blog6.jpg.webp" alt="" />
            <div className="text">
            <h3>Cyber security</h3>
            <p>UniCode</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="text">
        <h3>Let's work together.</h3>
        <p>We understand the complexities of modern markets and translate them into real business <br />
         solutions for automotive, financial, insuranc.</p>
         <button>Start Discussion</button>
        </div>
        
      </div>
    </div>
  )
}

export default Home