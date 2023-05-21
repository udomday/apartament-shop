import React, { useContext } from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { DISTRICT_ROUTE } from '../../utils/consts';


const DistrictItem = ({district}) => {
    const history = useNavigate()
    return (
        <Col className={'mt-3'} onClick={()=>history(DISTRICT_ROUTE + '/' + district.id)}>
            <Card style={{width: '100%', cursor: 'pointer', border: 'none'}}>
                <div>
                    <h3>{district.title}</h3>
                    <div>Метро: {district.metro}</div>
                </div>
                <Image src={process.env.REACT_APP_API_URL + district.photos[0].linkPhoto} style={{borderRadius: '10px'}} className='mt-2' width={'100%'} height={350}></Image>
            </Card>
        </Col>
    )
}

export default DistrictItem