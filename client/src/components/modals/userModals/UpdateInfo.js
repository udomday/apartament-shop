import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../../..";
import { getPassport } from "../../../http/userApi";

const UpdateInfo = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [phoneNumber, setPhoneNumber] = useState(`${user.user.phone}`)
    const [FIO, setFIO] = useState(`${user.user.FIO}`)


    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Личные данные
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                placeholder={'Введите ФИО'}
                value = {FIO}
                onChange = {e=>setFIO(e.target.value)}
            />
            <Form.Control
                className='mt-3'
                placeholder={'Введите номер телефона'}
                value = {phoneNumber}
                onChange = {e=>setPhoneNumber(e.target.value)}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success'>Сохранить</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default UpdateInfo