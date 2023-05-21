import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SortBar from '../components/SortBar';
import DistrictsList from '../components/districtComponent/DistrictsList';
import Pages from '../components/Pages';


const Districts = () => {
    return (
        <Container className='d-flex flex-column '>
            {/* Панель поиска */}
            <SortBar/>
            <DistrictsList />
            <Pages/>
        </Container>
    );
}

export default Districts;