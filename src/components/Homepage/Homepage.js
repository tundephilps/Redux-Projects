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
      <li class="" id="todo"><a href="">Coming Soon</a></li>
      <li class="menu-item"><a href="#0">Coming Soon</a></li>
      <li class="menu-item">
        <a href="#0">Coming Soon</a>
        <ol class="sub-menu">
          <li class="menu-item" id="counter"><a href="https://counter-app-tau-two.vercel.app/">Counter App</a></li>
          <li class="menu-item" id="Todo" ><a href="https://todo-list-green-ten.vercel.app/">Todo List</a></li>
          <li class="menu-item" id="Login"><a href="https://login-system-ruby.vercel.app/">Redux Login System</a></li>
        </ol>
      </li>
      <li class="menu-item">
        <a href="#0">Coming Soon</a>
        <ol class="sub-menu">
          <li class="menu-item" id='Diary'><a href="https://diary-app-tundephilps.vercel.app/">Diary App</a></li>
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