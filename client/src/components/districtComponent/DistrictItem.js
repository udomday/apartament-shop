import React, { useContext } from 'react'
import { Card, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { DISTRICT_ROUTE } from '../../utils/consts';


const DistrictItem = ({district}) => {
    const history = useNavigate()
    return (
        <Col className={'mt-2'} onClick={()=>history(DISTRICT_ROUTE + '/' + district.id)}>
            <Card style={{width: '100%', cursor: 'pointer'}} border={'black'}>
                <div>
                    <h3>{district.title}</h3>
                    <div>Метро: {district.metro}</div>
                </div>
                {/* Прикрутить сюда картинку */}
            </Card>
        </Col>
    )
}

export default DistrictItem