import React from 'react'
import './ex.css';
import {NavLink} from "react-router-dom";
import Details from './Details'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
function Mainnav({scrollToBottom}) {
    return (
        // <div className="navItemex">
        <Navbar sticky="top" collapseOnSelect expand="lg" className="navbar" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav fill className="justify-content-center" activeKey="/home">
    <Nav.Item style={{padding:"0px 60px 0px 40px"}}>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{padding:"0px 60px 0px 40px"}}>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{padding:"0px 60px 0px 40px"}}>
      <Nav.Link href="/team">Team</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{padding:"0px 60px 0px 40px"}}>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{padding:"0px 60px 0px 40px"}}>
      <Nav.Link onClick={scrollToBottom}>
        Contact Us
      </Nav.Link>
    </Nav.Item>
    </Nav>
    </Navbar.Collapse>
</Navbar>
    //  </div>
    )
}

export default Mainnav








{/* <ul>
     <li className="li1">
     <NavLink style={{color:"White",textDecoration:"none"}} activeClassName="activeLink" exact={true} to="/">Home</NavLink>
     </li>
     <li className="li2">
     <NavLink style={{color:"White",textDecoration:"none"}} activeClassName="activeLink" to="/aboutus">About Us</NavLink>
     </li>
     <li className="li3">
     <NavLink style={{color:"White",textDecoration:"none"}} activeClassName="activeLink" to="/team">Team</NavLink>
     </li>
     <li className="li4">
     <NavLink style={{color:"White",textDecoration:"none"}} activeClassName="activeLink" to="/gallery">Gallery</NavLink>
     </li>
     <li className="li5">
     <a onClick={scrollToBottom}>Contact Us</a>
     </li>
     </ul> */}