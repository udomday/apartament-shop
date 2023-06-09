import React, { useContext, useEffect, useState } from 'react'
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, NavDropdown} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, FAVLIST_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, USER_ROUTE } from '../utils/consts';
import { check } from '../http/userApi';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    
    useEffect(()=>{
      check().then(data => {
        user.setUser(data)
      })
    }, [])

    const logOut = () => {
        localStorage.setItem('token', "")
        user.setUser({})
        user.setIsAuth(false)
        history(LOGIN_ROUTE)
    }
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ПАК</Navbar.Brand>
          {user.isAuth ?
            <Nav className="ms-auto">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={user.user.FIO}
                    menuVariant="dark"
                  > 
                  {user.user.role === "ADMIN" ?
                    <NavDropdown.Item onClick={()=>history(ADMIN_ROUTE)}>Админ панель</NavDropdown.Item>
                    :
                    <span></span>
                  }
                  <NavDropdown.Item onClick={()=>history(USER_ROUTE + `/` + user.user.id)}>Личный кабинет</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>history(ORDERS_ROUTE + `/` + user.user.id)}>Заявки</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>history(FAVLIST_ROUTE + `/` + user.user.id)}>Избранное</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={()=>logOut()}>Выйти</NavDropdown.Item>
                  </NavDropdown>
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