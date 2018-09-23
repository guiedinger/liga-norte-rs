import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css'

export default props => (
  <Menu {...props}>
    <a id="home" className="menu-item" href="/">Noticias</a>
    <a id="about" className="menu-item" href="/about">Eventos</a>
    <a id="contact" className="menu-item" href="/contact">Ranking</a>
    <a className="menu-item--small" href="">Contato</a>
  </Menu>
) 
