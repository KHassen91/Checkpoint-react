import React from 'react';
import logo from './logob.svg';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"> <img
            src={logo}
            width="30"
            height="30"
            className="llogo"
            alt="logo" />My First Application</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Presentation</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <NavDropdown title="All" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Manager</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Location</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </header>
      <main>
        <div className="from">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label id="txt">First Name</Form.Label>
              <Form.Control type="First Name" placeholder="Type Here" />
              <Form.Label id="txt">Last Name</Form.Label>
              <Form.Control type="Last Name" placeholder="Type Here" />
              <Form.Label id="txt">Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label id="txt">Select Your Country</Form.Label>
              <Form.Control as="select">
                <option>Tunisia</option>
                <option>Japan</option>
                <option>Fi edoura</option>
                <option>Win i Rond Point</option>
                <option>8adi</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label id="txt">Comments</Form.Label>
              <Form.Control as="textarea" placeholder="Type Here..." rows={3} />
            </Form.Group>
          </Form>
        </div>
      </main>

    </div>

  );
}

export default App;
