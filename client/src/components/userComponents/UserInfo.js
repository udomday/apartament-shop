import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Context } from '../..'
import phoneImage from '../../userStatic/phone.svg'
import mailImage from '../../userStatic/mail.svg'
import { observer } from 'mobx-react-lite'
import { check, updateUserInfo } from '../../http/userApi'
import { useParams } from 'react-router-dom'

const UserInfo = observer(() => {
    const {user} = useContext(Context)
    const {id} = useParams()
    const [flag, setFlag] = useState(true)
    const [infoVisible, setInfoVisible] = useState(false)
    const [FIO, setFIO] = useState(`${user.user.FIO}`)
    const [phone, setPhone] = useState(`${user.user.phone}`)
    const [mail, setMail] = useState('mail@.ru')

    useEffect(()=>{
            setFIO(`${user.user.FIO}`)
            setPhone(`${user.user.phone}`)

    }, [user.user.FIO, user.user.phone])
    
    const changeUserInfo = () => {
        if(infoVisible){
            updateUserInfo(FIO, phone, id).then(data => {
                if(data){
                    user.setUser(data)
                }
            })
            setInfoVisible(false)
        }else{
            setInfoVisible(true)
        }
    }

    return(
        <div style={{backgroundColor:'#f3f7f8'}}>
                <Container className='pt-5'>
                    <Form>
                        {   infoVisible ?
                            <Form.Control 
                            style={{boxSizing:'border-box', marginLeft: '21px', width:'40%'}}
                            placeholder="ФИО"
                            value={FIO}
                            onChange={(e)=>setFIO(e.target.value)}
                            />
                            :
                            <h2>{user.user.FIO}</h2>
                        }
                        <div className='d-flex flex-row align-items-center mt-3' style={{lineHeight:1.5, fontSize: '20px', margin: 'auto'}}>
                            <span style={{width: '16px', height: '16px', backgroundImage:`url(${phoneImage})`, display:'inline-block', backgroundPosition:'50% 50%'}}></span>
                            { infoVisible ?
                                <Form.Control 
                                    style={{boxSizing:'border-box', marginLeft: '5px', width:'40%'}}
                                    placeholder="Номер телефона"
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}
                                />
                                :
                                <span style={{boxSizing:'border-box', paddingLeft: '5px'}}>{user.user.phone}</span>
                            }
                        </div>
                        <div className='d-flex flex-row align-items-center mt-3' style={{lineHeight:1.5, fontSize: '20px', margin: 'auto'}}>
                            <span style={{width: '16px', height: '16px', backgroundImage:`url(${mailImage})`, display:'inline-block', backgroundPosition:'50% 50%'}}></span>
                            { infoVisible ?
                                <Form.Control 
                                    style={{boxSizing:'border-box', marginLeft: '5px', width:'40%'}}
                                    placeholder="Электронная почта"
                                    value={mail}
                                    onChange={(e)=>setMail(e.target.value)}   
                                />
                                :
                                <span style={{boxSizing:'border-box', paddingLeft: '5px'}}>Mail@mail.ru</span>
                            }
                        </div>
                        <Button className='mt-3 mb-5' onClick={changeUserInfo}>
                            { infoVisible ?
                                `Сохранить`
                                :
                                `Редактировать`
                            }
                        </Button>
                    </Form>
                </Container>
        </div>
    )
})

export default UserInfo