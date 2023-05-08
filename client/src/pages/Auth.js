import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { DISTRICTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite'
import { Context } from '..';

const Auth = observer(() => {
    const history = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [FIO, setFIO] = useState('')

    const click = async () => {
        try{
            let data;
            if(isLogin){
                data = await login(phoneNumber, password)
            } else {
                data = await registration(phoneNumber, password, 'Rosf Fos')
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(DISTRICTS_ROUTE)
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    {isLogin ?
                        <b></b>:
                        <Form.Control 
                        className='mt-3'
                        placeholder='Введите ФИО'
                        value={FIO}
                        onChange={e => setFIO(e.target.value)}
                        /> 
                    }
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите Ваш номер телефона'
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите Ваш пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <div className='d-flex flex-row justify-content-between mt-3 '>
                        {isLogin ? 
                            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></div>
                            :
                            <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                        }
                        <Button onClick={()=>click()} className='align-self-end' variant='outline-success'>{isLogin ? 'Войти' : 'Создать аккаунт'}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
})

export default Auth;