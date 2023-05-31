import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { createApartament, fetchDistricts, fetchOneDistrict, fetchOneTypes, fetchTypes, updateApartament } from "../../http/apartamentApi";

const CreateApartament = ({show, onHide, update, apartament}) => {
    const {apartaments, user} = useContext(Context)
    const [stateType, setStateType] = useState({})
    const [stateDistrict, setStateDistrict] = useState({})
    const [name, setName] = useState(apartament.title || '')
    const [floor, setFloor] = useState(apartament.info[0].description || '')
    const [corpus, setCorpus] = useState(apartament.info[1].description || '')
    const [date, setDate] = useState(apartament.info[2].description || '')
    const [ploshad, setPloshad] = useState(apartament.info[3].description || '')
    const [potolok, setPotolok] = useState(apartament.info[4].description || '')
    const [propiska, setPropiska] = useState(apartament.info[5].description || '')
    const [price, setPrice] = useState(apartament.price || '')
    const [file, setFile] = useState([])
    const [isUpdate, setIsUpdate] = useState(update)

    useEffect(() => {
      if(update){
        fetchOneTypes(apartament.apartamentTypeId).then(data=>setStateType(data))
        fetchOneDistrict(apartament.districtId).then(data=>setStateDistrict(data))
      }
      fetchTypes().then(data => apartaments.setTypes(data))
      fetchDistricts().then(data => apartaments.setDistrict(data.rows))
    }, [])

    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addApartament = () => {
      if(stateType && stateDistrict && name && floor && corpus && date && ploshad && potolok && propiska && price && file){
        let info = [];
        let getDate = new Date(date)
        let getMonth = getDate.toLocaleString('default', {month: 'long'})
        if(getMonth == 'март' || getMonth == 'август'){
          getMonth = getMonth + 'a'
        } else {
          getMonth = getMonth.slice(0, -1) + 'я'
        }
        info.push(
          {title: 'Этаж', description: floor}, 
          {title: 'Корпус', description: corpus}, 
          {title: 'Дата', description: `до ${getDate.getDay()} ${getMonth} ${getDate.getFullYear()}`}, 
          {title: 'Площадь', description: ploshad}, 
          {title: 'Потолок', description: potolok}, 
          {title: 'Прописка', description: propiska}, 
          )
        const formData = new FormData()
        formData.append('title', name)
        formData.append('price', `${price}`)
        formData.append('apartamentTypeId',`${ stateType.id}`)
        formData.append('districtId', `${stateDistrict.id}`)
        formData.append('info', JSON.stringify(info))
        formData.append('photos', file)
        createApartament(formData).then(data => onHide())
        setStateType('')
        setStateDistrict('')
        setFloor('')
        setName('')
        setDate('')
        setCorpus('')
        setPotolok('')
        setPloshad('')
        setPropiska('')
        setPrice('')
        setFile([])
      } else {
        alert("Необходимо заполнить все поля")
      }
      }

      const updateApartament = () => {
        if(stateType && stateDistrict && name && floor && corpus && date && ploshad && potolok && propiska && price && file){
          let info = [];
          let getDate = new Date(date)
          let getMonth = getDate.toLocaleString('default', {month: 'long'})
          if(getMonth == 'март' || getMonth == 'август'){
            getMonth = getMonth + 'a'
          } else {
            getMonth = getMonth.slice(0, -1) + 'я'
          }
          info.push(
            {title: 'Этаж', description: floor}, 
            {title: 'Корпус', description: corpus}, 
            {title: 'Дата', description: `до ${getDate.getDay()} ${getMonth} ${getDate.getFullYear()}`}, 
            {title: 'Площадь', description: ploshad}, 
            {title: 'Потолок', description: potolok}, 
            {title: 'Прописка', description: propiska}, 
            )
          const formData = new FormData()
          formData.append('id', `${apartament.id}`)
          formData.append('title', name)
          formData.append('price', `${price}`)
          formData.append('apartamentTypeId',`${ stateType.id}`)
          formData.append('districtId', `${stateDistrict.id}`)
          formData.append('info', JSON.stringify(info))
          updateApartament(formData).then(data => onHide())
          setStateType('')
          setStateDistrict('')
          setFloor('')
          setName('')
          setDate('')
          setCorpus('')
          setPotolok('')
          setPloshad('')
          setPropiska('')
          setPrice('')
          setFile([])
        } else {
          alert("Необходимо заполнить все поля")
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
          Добавить новую квартиру
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <div className="d-flex flex-row">
          <Dropdown>
            <Dropdown.Toggle>{stateType.title ||'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {apartaments.types.map(type => 
                  <Dropdown.Item 
                    key={type.id}
                    onClick={()=>setStateType(type)}
                  >
                    {type.title}
                  </Dropdown.Item>  
                )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='ms-3'>
            <Dropdown.Toggle>{stateDistrict.title ||'Выберите район'}</Dropdown.Toggle>
            <Dropdown.Menu>
                {apartaments.districts.map(district => 
                  <Dropdown.Item 
                    key={district.id}
                    onClick={()=>setStateDistrict(district)}
                  >
                    {district.title}
                  </Dropdown.Item>  
                )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
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
          { user.isAuth ?
                user.user.role === "ADMIN" ?
                  <span></span>
                  :
                  <Form.Control 
                    className='mt-3'
                    type='file'
                    onChange={selectFile}
                  />
              :
              <span></span>

          }
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      { isUpdate ?
        <Button variant='outline-success' onClick={updateApartament}>Сохранить</Button>
        :
        <Button variant='outline-success' onClick={addApartament}>Добавить</Button>
      }
    </Modal.Footer>
  </Modal>
    )
}

export default CreateApartament