import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Button, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Context } from '../..'
import { getPassport } from '../../http/userApi'
import CreatePasport from '../modals/userModals/CreatePasport'
import UpdatePassport from '../modals/userModals/UpdatePassport'
import { observer } from 'mobx-react-lite'

const UserPassport = observer(() => {
    const {id} = useParams()
    const [pasportVisible, setPasportVisible] = useState(false)
    const {user} = useContext(Context)

    useEffect(()=>{
        getPassport(id).then(data => user.setPassport(data))
    }, [])


    return(
        <div className='mt-5 mb-5'>
                <Container> 
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item style={{border:'none', fontSize:'18px', lineHeight:1.5}} eventKey="0">
                            <Accordion.Header>
                                <h2>Паспортные данные</h2>
                                <Button onClick={()=>setPasportVisible(true)} className='ms-3'>
                                    {
                                        !user.passport ?
                                        `Добавить`
                                        :
                                        `Редактировать`
                                    }
                                </Button>
                            </Accordion.Header>
                            {
                                !user.passport ?
                                <Accordion.Body className='d-flex d-row justify-content-center'>
                                    <div>Вы еще не добавили паспортные данные</div>
                                </Accordion.Body>
                                :
                                <Accordion.Body className='d-flex d-row'>
                                    <div style={{width:'50%'}}>
                                        <div className='mt-3'>
                                            <div style={{fontSize:'20px', fontWeight:'bold'}}>Серия и номер паспорта</div>
                                            <div>{user.passport.pasNumber.slice(0,4)} {user.passport.pasNumber.slice(4)}</div>
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
                                            <div>{user.passport.pasCode.slice(0,3)}-{user.passport.pasCode.slice(3)}</div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                </Container>
                { 
                    user.passport ?
                        <UpdatePassport show={pasportVisible} onHide={()=>{setPasportVisible(false)}}/>
                    :
                        <CreatePasport show={pasportVisible} onHide={()=>{setPasportVisible(false)}}/>
                }
            </div>
    )
})

export default UserPassport