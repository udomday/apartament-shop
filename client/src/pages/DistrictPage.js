import React from 'react'
import { Container } from 'react-bootstrap'
import SortBar from '../components/SortBar'
import ApartamentList from '../components/districtComponent/ApartamentList'


const DistrictPage = () => {
    return(
        <Container>
            <SortBar/>
            <ApartamentList/>
        </Container>
    )
}

export default DistrictPage