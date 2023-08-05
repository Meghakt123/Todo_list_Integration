import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Mynavbar.css';
import {FaRegListAlt} from "react-icons/fa";


function Mynavbar() {
  return (
    <div>
        <Navbar className='one' id=''>
        <Container>
        <h5 className='hello'><b><FaRegListAlt/>TO DO-LIST APP</b> </h5>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          
          {/* <Nav className="text" id='two'>
            <Nav.Link><a href="#1"><b>HOME</b></a></Nav.Link>
            <Nav.Link><a href="#2"><b>ABOUT</b></a></Nav.Link>
            <Nav.Link><a href="#3"><b>CONTACT</b></a></Nav.Link>
            <Nav.Link><a href="#4"><b>SERVICES</b></a></Nav.Link>
           
            
          </Nav> */}
        </Container>
      </Navbar>

     
      {/* <img className='imgs' src="https://thumbs.dreamstime.com/b/planning-schedule-calendar-planner-concept-teamwork-effective-time-management-team-business-people-filling-177793637.jpg"/> */}

    
    </div>
  )
}

export default Mynavbar