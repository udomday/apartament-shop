import React, { useContext, useState } from 'react'
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { check } from '../http/userApi';

const NavBar = observer(() => {
    const history = useNavigate()
    const [role, setRole] = useState('')
    check().then(data => setRole(data.role))
    
    const {user} = useContext(Context)

    const logOut = () => {
        localStorage.setItem('token', "")
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ПАК</Navbar.Brand>
          {user.isAuth ?
            <Nav className="ms-auto">
                {role === "ADMIN" ?
                  <Button onClick={()=>history(ADMIN_ROUTE)} variant={'outline-light'}>Админ-панель</Button>
                  :
                  <Button>Личный кабинет</Button>
                }
                <Button onClick={()=>logOut()} variant={'outline-light'} className="ms-3">Выйти</Button>
            </Nav>
            :
            <Nav className="ms-auto">
                <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    )
})

export default NavBar;