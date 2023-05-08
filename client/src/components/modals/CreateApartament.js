import React, { useContext } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../..";

const CreateApartament = ({show, onHide}) => {
    const {apartaments} = useContext(Context)

    return(
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
                {apartaments.types.map(type => 
                  <Dropdown.Item key={type.id}>{type.title}</Dropdown.Item>  
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control 
            className='mt-3'
            placeholder='Введите этаж квартиры'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите корпус квартиры'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите дату заселения квартиры'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите площадь квартиры'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите высоту потолков квартиры'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите прописку'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите цену квартиры'
            type='number'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите цену квартиры'
            type='file'
          />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      <Button variant='outline-success' onClick={onHide}>Добавить</Button>
    </Modal.Footer>
  </Modal>
    )
}

export default CreateApartament