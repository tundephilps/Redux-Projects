import React from 'react'
import { Link } from 'react-router-dom'
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
          <li class="menu-item" id="counter"><a href="/CounterApp">Counter App</a></li>
          <li class="menu-item"><Link to="/TodoApp">Todo List</Link></li>
          <li class="menu-item"><a href="/Login">Redux Login System</a></li>
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