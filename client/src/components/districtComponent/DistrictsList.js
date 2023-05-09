import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import DistrictItem from './DistrictItem';
import { Context } from '../..';
import { fetchDistricts } from '../../http/apartamentApi';

const DistrictsList = observer(() => {
    const {apartaments} = useContext(Context)

    useEffect(() => {
        fetchDistricts().then(data => apartaments.setDistrict(data))
      }, [])

    return (
        <Row  xs={{ cols: 2 }}>
            {apartaments.districts.map((district => 
                <DistrictItem key ={district.id} district={district}/>
            ))}
        </Row>
    )
})

export default DistrictsList