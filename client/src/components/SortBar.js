import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';

const SortBar = observer(() =>{
    const {apartaments} = useContext(Context)
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {apartaments.apartaments.map((apartament) => 
                <Button 
                  variant="outline-dark" 
                  className='ms-2' 
                  key ={apartament.id}
                  active = {apartament.type === apartaments.selectedType}
                  onClick={() => apartaments.setSelectedType(apartament.type)}
                >
                  {apartament.type}
                </Button>
              )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
})

export default SortBar;