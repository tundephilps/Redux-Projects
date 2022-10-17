import React from 'react'
//import Card from './Card'
import Font from './Font'
import "./Homepage.scss"

const Homepage = () => {
  return (
    <div>
        <header class="page-header">
  <input id="menu-toggle-input" type="checkbox" />
  <label class="menu-toggle" for="menu-toggle-input">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </label>

  <div class="page-tagline">
    <a href="" target="_blank">A Collection of Redux Projects</a>
  </div>

  <nav class="menu">
    <ol>
      <li class="" id="todo"><a href="#0">Coming Soon</a></li>
      <li class="menu-item"><a href="#0">Coming Soon</a></li>
      <li class="menu-item">
        <a href="#0">Coming Soon</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="#0">Coming Soon</a></li>
          <li class="menu-item"><a href="#0">Coming Soon</a></li>
          <li class="menu-item"><a href="#0">Coming Soon</a></li>
        </ol>
      </li>
      <li class="menu-item">
        <a href="#0">Coming Soon</a>
        <ol class="sub-menu">
          <li class="menu-item"><a href="#0">Coming Soon</a></li>
          <li class="menu-item"><a href="#0">Coming Soon</a></li>
          <li class="menu-item"><a href="#0">Coming Soon</a></li>
        </ol>
      </li>
      <li class="menu-item"><a href="#0">Coming Soon</a></li>
    </ol>
  </nav>
</header>

<section class="page-content">
  <Font />
  <p className='info'>Click the toggle in the top left corner to see Projects.</p>
  
</section>
   
    </div>
  )
}

export default Homepage