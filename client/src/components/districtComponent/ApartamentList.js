import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import ApartamentItem from './ApartamentItem';
import { Context } from '../..';

const ApartamentList = observer(() => {
    const {apartaments} = useContext(Context)
    return(
        <Row xs={{ cols: 1 }}>
            {apartaments.apartaments.map((apartament => 
                <ApartamentItem key={apartament.id} apartament = {apartament}/>
            ))}
        </Row>
    )
})

export default ApartamentList;