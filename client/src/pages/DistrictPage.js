import React from 'react'
import { Container } from 'react-bootstrap'
import SortBar from '../components/SortBar'
import ApartamentList from '../components/districtComponent/ApartamentList'
import ApartamentPages from '../components/apartamentComponent/ApartamentPages'


const DistrictPage = () => {
    return(
        <Container>
            <SortBar/>
            <ApartamentList/>
            <ApartamentPages/>
        </Container>
    )
}

export default DistrictPage