import React from 'react';
import './Footer.css'
import logo from '../../../img/BEAUTIFUL.png';

const Footer = () => (
    <footer>
              <div className="footer-container">
                  <div className="left-col">
                      <img src={logo} alt="Beautiful You Logo" className="logo"/>
                      <div className="social-media">
                          <a href="https://www.instagram.com" target="_blank" rel="noopener"><i title="Instagram" class="fab fa-instagram"></i></a>
                          <a href="https://www.facebook.com" target="_blank" rel="noopener"><i title="Facebook" class="fab fa-facebook"></i></a>
                          <a href="https://www.youtube.com" target="_blank" rel="noopener"><i title="Youtube" class="fab fa-youtube"></i></a>
                      </div>
                      <p className="copyrights">&#169; 2020 Beautiful You</p>
                  </div>
                  <div className="right-col">
                      <h1>WANT 15% OFF?</h1>
                      <div className="border"></div>
                      <p>Sign up for our email list and recieve 15% off your first order.</p>
                      <form className="foot-discount">
                          <label>
                              Email
                          <input name="email" type="email" className="foot-email"
                          required placeholder="Enter Your Email"/>
                          </label><br/>
                          <input type="submit" className="btn" value="submit"/>
                      </form>
                  </div>
              </div>
          </footer>
)

export default Footer