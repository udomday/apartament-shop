import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { deletePurchaseOrder, updatePurchaseOrder } from "../../../http/userApi";
import { useNavigate, useParams } from "react-router-dom";
import { ORDERS_ROUTE } from "../../../utils/consts";
import { Context } from "../../..";

const CheckOrder = ({show, onHide, order, setCheck}) => {
    const {user} = useContext(Context)

    
    const deleteOrder = () =>{
        deletePurchaseOrder(order.id).then(data => {
            onHide()
            setCheck(true)
        })
    }
    
    const [status, setStatus] = useState(order.status)

    const updateOrder = () => {
        if(user.user.role === "ADMIN"){
            updatePurchaseOrder(order.id, status).then(data => {
                console.log(data)
                onHide()
                setCheck(true)
            })
        } else{
            alert('Как вы сюда попали?')
        }
    }
    
    
    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Заявка №{order.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-row ">
            <div style={{width: '49%'}}>
                <h4>{order.apartament.title}</h4>
                <hr/>
                {order.apartament.info.map((info => 
                        <div key={info.id} style={{textAlign: 'left'}}>
                            {info.title} <span style={{float: 'right'}}>{info.description}</span>
                            <hr/>
                        </div>
                ))}
            </div>
            <div style={{width: '51%', marginLeft: '2%'}}>
                <h4>Данные</h4>
                <hr/>
                <div>
                    ФИО <span style={{float: 'right'}}>{order.user.FIO}</span> 
                </div>
                <hr/>
                <div>
                    Серия и номер паспорта <span style={{float: 'right'}}>{`${order.user.passport.pasNumber.slice(0,4)} ${order.user.passport.pasNumber.slice(4)}`}</span>
                </div>
                <hr/>
                <div>
                    Когда выдан <span style={{float: 'right'}}>{order.user.passport.pasDate}</span>
                </div>
                <hr/>
                <div>
                    Дата рождения <span style={{float: 'right'}}>{order.user.passport.userDate}</span>
                </div>
                <hr/>
                <div>
                    Кем выдан <span style={{float: 'right'}}>{order.user.passport.pasGet}</span>
                </div>
                <hr/>
                <div>
                    Код подразделения <span style={{float: 'right'}}>{`${order.user.passport.pasCode.slice(0,3)}-${order.user.passport.pasCode.slice(3)}`}</span>
                </div>
                <hr/>
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex flex-row justify-content-between">
        <Button variant='outline-danger' onClick={deleteOrder}>Удалить заявку</Button>
        {  user.user.role === "ADMIN" ?
            <div className="d-flex flex-row">
                <Dropdown className="me-2">
                    <Dropdown.Toggle>{status}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={()=>setStatus('В ОБРАБОТКЕ')}
                        >
                        В ОБРАБОТКЕ
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={()=>setStatus('ОДОБРЕНО')}
                        >
                        ОДОБРЕНО
                        </Dropdown.Item> 
                        <Dropdown.Item
                            onClick={()=>setStatus('ОТКАЗАНО')}
                        >
                        ОТКАЗАНО
                        </Dropdown.Item>   
                    </Dropdown.Menu>
                </Dropdown>
                <Button onClick={updateOrder}>Сохранить</Button>
            </div>
            :
                <h5>Статус: {status}</h5>
        }
      </Modal.Footer>
    </Modal>
    )
}

export default CheckOrder