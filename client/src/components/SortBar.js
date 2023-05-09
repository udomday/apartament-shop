import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Context } from '..';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { fetchTypes } from '../http/apartamentApi';

const SortBar = observer(() =>{
    const {apartaments} = useContext(Context)

    useEffect(() => {
      fetchTypes().then(data => apartaments.setTypes(data))
    }, [])


    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {apartaments.types.map((type) => 
                <Button 
                  variant="outline-dark" 
                  className='ms-2' 
                  key ={type.id}
                  active = {type.title === apartaments.selectedType}
                  onClick={() => apartaments.setSelectedType(type.title)}
                >
                  {type.title}
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