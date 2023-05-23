import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createPassport, getPassport, updatePassport } from "../../../http/userApi";
import { useParams } from "react-router-dom";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const CreatePasport = observer(({show, onHide}) => {
    const {id} = useParams()
    const {user} = useContext(Context)
    let isPas = Object.keys(user.passport).length !== 0

    
    const [pasNumber, setPasNumber] = useState(isPas ? user.passport.pasNumber : '')
    const [pasCode, setPasCode] = useState(isPas ? user.passport.pasCode : '')
    const [pasDate, setPasDate] = useState(isPas ? user.passport.pasDate : '')
    const [userDate, setUserDate] = useState(isPas ? user.passport.userDate : '')
    const [pasGet, setPasGet] = useState(isPas ? user.passport.pasGet : '')

    const addOrUpdatePassport = () => {
      if(isPas){

        updatePassport(pasNumber, pasCode, pasDate, userDate, pasGet, id).then(data=>user.setPassport(data))
      } else {
        //createPassport(pasNumber, pasCode, pasDate, userDate, pasGet, id).then(data=>setPassport(data))
      }
      onHide()
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
        <Button variant='outline-success' onClick={addOrUpdatePassport}>
          {
            !isPas ?
            `Добавить`
            :
            `Сохранить`
          }
        </Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreatePasport