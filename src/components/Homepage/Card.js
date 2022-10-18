import React from 'react'
import profile from "../../images/profile.jpg";
import "./Card.scss"


const Card = () => {
  return (
    <>
     <div class="container" id="Card">
    <div class="img-area">
      <div class="inner-area">
        <img src={profile} alt="person profile image" />
      </div>
    </div>
    
    <div class="name">Tunde Philps</div>
    <div class="about">FrontEnd Developer</div>
    <div class="social-icons">
      <a href="#" class="fb"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" class="insta"><i class="fab fa-instagram"></i></a>
      <a href="#" class="yt"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="buttons">
      <button>Contact</button>
      <button>Register</button>
    </div>
    <div class="social-share">
      <div class="row">
        <i class="far fa-heart"></i>
        <span>1.2k</span>
      </div>
      
      <div class="row">
        <i class="far fa-comment"></i>
        <span>2.4k</span>
      </div>
     
      <div class="row">
        <i class="fas fa-share"></i>
        <span>1.2k</span>
      </div>
    </div>
  </div>

    </>
  )
}

export default Card