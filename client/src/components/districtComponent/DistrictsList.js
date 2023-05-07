import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import DistrictItem from './DistrictItem';
import { Context } from '../..';

const DistrictsList = observer(() => {
    const {apartaments} = useContext(Context)
    return (
        <Row  xs={{ cols: 2 }}>
            {apartaments.districts.map((district => 
                <DistrictItem key ={district.id} district={district}/>
            ))}
        </Row>
    )
})

export default DistrictsList