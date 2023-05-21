import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ApartamentItem from './ApartamentItem';
import { Context } from '../..';
import { fetchApartaments, fetchOneDistrict } from '../../http/apartamentApi';
import { useParams } from 'react-router-dom';

const ApartamentList = observer(() => {
    const {apartaments} = useContext(Context)
    const [district, setDistrict] = useState()
    const {id} = useParams()

    useEffect(() => {  
        fetchApartaments(id).then(data =>{
            setDistrict(data.rows)
        })
    }, [])

    if(district){
        return(
            <Row xs={{ cols: 1 }}>
                {district.map((apartament => 
                    <ApartamentItem key={apartament.id} apartament = {apartament}/>
                ))}
            </Row>
        )
    }
})

export default ApartamentList;