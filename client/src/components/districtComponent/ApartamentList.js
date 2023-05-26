import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ApartamentItem from './ApartamentItem';
import { Context } from '../..';
import { fetchApartaments, fetchOneDistrict } from '../../http/apartamentApi';
import { useParams } from 'react-router-dom';

const ApartamentList = observer(() => {
    const {apartaments} = useContext(Context)

    const {id} = useParams()

    useEffect(() => {  
        fetchApartaments(id, 1, apartaments.apartamentLimit, apartaments.selectedType).then(data =>{
            apartaments.setApartaments(data.rows)
            apartaments.setApartamentTotalCount(data.count)
        })
    }, [])

    useEffect(() => {  
        fetchApartaments(id, apartaments.apartamentPage, apartaments.apartamentLimit, apartaments.selectedType).then(data =>{
            apartaments.setApartaments(data.rows)
            apartaments.setApartamentTotalCount(data.count)
        })
    }, [apartaments.apartamentPage, apartaments.selectedType])

    if(apartaments.apartaments){
        return(
            <Row xs={{ cols: 1 }}>
                {apartaments.apartaments.map((apartament => 
                    <ApartamentItem key={apartament.id} apartament = {apartament}/>
                ))}
            </Row>
        )
    }
})

export default ApartamentList;