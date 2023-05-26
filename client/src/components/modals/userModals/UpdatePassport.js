import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../../..";
import { getPassport, updatePassport } from "../../../http/userApi";

const UpdatePassport = ({show, onHide}) => {
    const {id} = useParams()
    const {user} = useContext(Context)
    
    const [pasCode, setPasCode] = useState(user.passport.pasCode)
    const [pasNumber, setPasNumber] = useState(user.passport.pasNumber)
    const [pasDate, setPasDate] = useState(user.passport.pasDate)
    const [userDate, setUserDate] = useState(user.passport.userDate)
    const [pasGet, setPasGet] = useState(user.passport.pasGet)

    const newUpdatePassport = () => {
        updatePassport(pasNumber, pasCode, pasDate, userDate, pasGet, id).then(data=>{
            if(data){
                getPassport(id).then(data => user.setPassport(data))
                onHide()
            }
        })
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
            Паспорт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                placeholder={'Серия и номер паспорта'}
                value = {pasNumber}
                onChange = {e=>setPasNumber(e.target.value)}
            />
            <div className="d-flex flex-row mt-3">
              <Form.Control
                  placeholder={'Когда выдан'}
                  disabled
              />
              <Form.Control
                type='date'
                value = {pasDate}
                onChange = {e=>setPasDate(e.target.value)}
            />
            </div>
            <div className="d-flex flex-row mt-3">
              <Form.Control
                  placeholder={'Дата Рождения'}
                  disabled
              />
              <Form.Control
                type='date'
                value = {userDate}
                onChange = {e=>setUserDate(e.target.value)}
            />
            </div>
            <Form.Control
                className='mt-3'
                placeholder={'Кем выдан'}
                value = {pasGet}
                onChange = {e=>setPasGet(e.target.value)}
            />
            <Form.Control
                className='mt-3'
                placeholder={'Номер подразделения'}
                value = {pasCode}
                onChange = {e=>setPasCode(e.target.value)}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={newUpdatePassport}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default UpdatePassport