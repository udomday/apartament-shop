import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createPassport, getPassport, updatePassport } from "../../../http/userApi";
import { useParams } from "react-router-dom";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const CreatePasport = observer(({show, onHide}) => {
    const {id} = useParams()
    const {user} = useContext(Context)

    
    const [pasCode, setPasCode] = useState('')
    const [pasNumber, setPasNumber] = useState('')
    const [pasDate, setPasDate] = useState('')
    const [userDate, setUserDate] = useState('')
    const [pasGet, setPasGet] = useState('')

    const addPassport = () => {
      createPassport(pasNumber, pasCode, pasDate, userDate, pasGet, id).then(data=>{
        if(data){
          user.setPassport(data)
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
        <Button variant='outline-success' onClick={addPassport}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreatePasport