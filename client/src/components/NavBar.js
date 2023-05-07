import React, { useContext } from 'react'
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ПАК</Navbar.Brand>
          {user.isAuth ?
            <Nav className="ms-auto">
                <Button variant={'outline-light'}>Админ-панель</Button>
                <Button variant={'outline-light'} className="ms-3">Выйти</Button>
            </Nav>
            :
            <Nav className="ms-auto">
                <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    )
})

export default NavBar;