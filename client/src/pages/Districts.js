import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SortBar from '../components/SortBar';
import DistrictsList from '../components/districtComponent/DistrictsList';


const Districts = () => {
    return (
        <Container>
            {/* Панель поиска */}
            <SortBar>Container</SortBar>
            <DistrictsList />
        </Container>
    );
}

export default Districts;