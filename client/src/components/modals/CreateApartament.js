import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../..";

const CreateApartament = ({show, onHide}) => {
    const {apartaments} = useContext(Context)
    const [name, setName] = useState('')
    const [floor, setFloor] = useState('')
    const [corpus, setCorpus] = useState('')
    const [date, setDate] = useState('')
    const [ploshad, setPloshad] = useState('')
    const [potolok, setPotolok] = useState('')
    const [propiska, setPropiska] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState([])
    const selectFile = e => {
      setFile(e.target.files[0])
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
          Добавить новую квартиру
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
            placeholder='Введите название квартиры'
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите этаж квартиры'
            value={floor}
            onChange={e=>setFloor(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите корпус квартиры'
            value={corpus}
            onChange={e=>setCorpus(e.target.value)}
          />
          <div className="d-flex flex-row">
          <Form.Control 
          className='mt-3'
          placeholder='Введите дату заселения квартиры'
          style={{pointerEvents:'none'}}
          disabled
          />
          <Form.Control 
          className='mt-3'
          placeholder='Введите дату заселения квартиры'
          value={date}
          onChange={e=>setDate(e.target.value)}
          type='date'
          />
          </div>
          
          <Form.Control 
            className='mt-3'
            placeholder='Введите площадь квартиры'
            value={ploshad}
            onChange={e=>setPloshad(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите высоту потолков квартиры'
            value={potolok}
            onChange={e=>setPotolok(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите прописку'
            value={propiska}
            onChange={e=>setPropiska(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите цену квартиры'
            type='number'
            value={price}
            onChange={e=>setPrice(e.target.value)}
          />
          <Form.Control 
            className='mt-3'
            type='file'
            onChange={selectFile}
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