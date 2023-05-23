import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Container, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Context } from '..'
import phoneImage from '../userStatic/phone.svg'
import mailImage from '../userStatic/mail.svg'
import CreatePasport from '../components/modals/userModals/CreatePasport'
import UpdateInfo from '../components/modals/userModals/UpdateInfo'
import { getPassport } from '../http/userApi'

const UserPage = () => {
    const {id} = useParams()
    const [infoVisible, setInfoVisible] = useState(false)
    const [pasportVisible, setPasportVisible] = useState(false)
    const {user} = useContext(Context)

    useEffect(()=>{
        getPassport(id).then(data => user.setPassport(data))
    }, [user.passport])

    if(user.passport){
    return(
        <div>
            <div style={{backgroundColor:'#f3f7f8'}}>
                <Container className='pt-5'>
                    <h2>{user.user.FIO}</h2>
                    <div className='d-flex flex-row align-items-center mt-3' style={{lineHeight:1.5, fontSize: '20px', margin: 'auto'}}>
                        <span style={{width: '16px', height: '16px', backgroundImage:`url(${phoneImage})`, display:'inline-block', backgroundPosition:'50% 50%'}}></span>
                        <span style={{boxSizing:'border-box', paddingLeft: '5px'}}>+7 (999) 999-99-99</span>
                    </div>
                    <div className='d-flex flex-row align-items-center mt-3' style={{lineHeight:1.5, fontSize: '20px', margin: 'auto'}}>
                        <span style={{width: '16px', height: '16px', backgroundImage:`url(${mailImage})`, display:'inline-block', backgroundPosition:'50% 50%'}}></span>
                        <span style={{boxSizing:'border-box', paddingLeft: '5px'}}>Mail@mail.ru</span>
                    </div>
                    <Button className='mt-3 mb-5' onClick={()=>setInfoVisible(true)}>Редактировать</Button>
                </Container>
            </div>     
            <div className='mt-5 mb-5'>
                <Container> 
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item style={{border:'none', fontSize:'18px', lineHeight:1.5}} eventKey="0">
                            <Accordion.Header>
                                <h2>Паспортные данные</h2>
                                <Button onClick={()=>setPasportVisible(true)} className='ms-3'>
                                    {
                                        Object.keys(user.passport).length === 0 ?
                                        `Добавить`
                                        :
                                        `Редактировать`
                                    }
                                </Button>
                            </Accordion.Header>
                            {
                                Object.keys(user.passport).length === 0 ?
                                <Accordion.Body className='d-flex d-row justify-content-center'>
                                    <div>Вы еще не добавили паспортные данные</div>
                                </Accordion.Body>
                                :
                                <Accordion.Body className='d-flex d-row'>
                                    <div style={{width:'50%'}}>
                                        <div className='mt-3'>
                                            <div style={{fontSize:'20px', fontWeight:'bold'}}>Серия и номер паспорта</div>
                                            <div>{user.passport.pasNumber.slice(0,4)} {user.passport.pasNumber.slice(4,-1)}</div>
                                        </div>
                                        <div className='mt-3'>
                                            <div style={{fontSize:'20px', fontWeight:'bold'}}>Когда выдан</div>
                                            <div>{user.passport.pasDate}</div>
                                        </div>
                                        <div className='mt-3'>
                                            <div style={{fontSize:'20px', fontWeight:'bold'}}>Дата рождения</div>
                                            <div>{user.passport.userDate}</div>
                                        </div>
                                    </div>
                                    <div style={{width:'50%'}}>
                                        <div className='mt-3'>
                                            <div style={{fontSize:'20px', fontWeight:'bold'}}>Кем выдан</div>
                                            <div>{user.passport.pasGet}</div>
                                        </div>
                                        <div className='mt-3'>
                                            <div style={{fontSize:'20px', fontWeight:'bold'}}>Код подразделения</div>
                                            <div>{user.passport.pasCode.slice(0,3)}-{user.passport.pasCode.slice(2,-1)}</div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
            <CreatePasport passport={user.passport} show={pasportVisible} onHide={()=>{setPasportVisible(false)}}/>
            <UpdateInfo show={infoVisible} onHide={()=>{setInfoVisible(false)}}/>
        </div>
    )
    }
}

export default UserPage