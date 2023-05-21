import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createDistrict } from "../../http/apartamentApi";

const CreateDistrict = ({show, onHide}) => {
    const [title, setTitle] = useState()
    const [metro, setMetro] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState([])
    
    const selectFile = e => {
      setFile(e.target.files[0])
    } 

    const addDistrict = () => {
      if(title && metro && description){
        const formData = new FormData()
        formData.append('title', title)
        formData.append('metro', metro)
        formData.append('description', description)
        formData.append('photos', file)
        createDistrict(formData).then(data => onHide())
      } else {
        alert('Необходимо заполнить все поля')
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
          Добавить новый район
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
          <Form.Control
              className="mt-3"
              placeholder={'Название района'}
              value={title}
              onChange={e=>setTitle(e.target.value)}
          />
          <Form.Control
            className="mt-3"
              placeholder={'Метро'}
              value={metro}
              onChange={e=>setMetro(e.target.value)}
          />
          <Form.Control
              className="mt-3"
              placeholder={'Описание'}
              value={description}
              onChange={e=>setDescription(e.target.value)}
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
      <Button variant='outline-success' onClick={addDistrict}>Добавить</Button>
    </Modal.Footer>
  </Modal>
    )
}

export default CreateDistrict