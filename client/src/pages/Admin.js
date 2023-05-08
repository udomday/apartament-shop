import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import CreateDistrict from '../components/modals/CreateDistrict';
import CreateType from '../components/modals/CreateType';
import CreateApartament from '../components/modals/CreateApartament';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [apartamentVisible, setApartamentVisible] = useState(false)
    const [districtVisible, setDistrictVisible] = useState()
    return (
        <Container className="d-flex flex-column">
            <Button onClick={()=>setTypeVisible(true)} variant='outline-dark' className='mt-3'>Добавить тип</Button>
            <Button onClick={()=>setDistrictVisible(true)} variant='outline-dark' className='mt-3'>Добавить район</Button>
            <Button onClick={()=>setApartamentVisible(true)} variant='outline-dark' className='mt-3'>Добавить квартиру</Button>
            <CreateApartament show={apartamentVisible} onHide={()=>setApartamentVisible(false)}/>
            <CreateDistrict show={districtVisible} onHide={()=>setDistrictVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
        </Container>
    );
}

export default Admin;