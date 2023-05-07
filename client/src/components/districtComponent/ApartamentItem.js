import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './styles/apartamentItem.css'
import { useNavigate } from 'react-router-dom';
import { APARTAMENT_ROUTE } from '../../utils/consts';
const ApartamentItem = ({apartament}) => {
    const history = useNavigate();
    return( 
        <Col onClick={()=>history(APARTAMENT_ROUTE + '/' + apartament.id)}>
            <Card style={{cursor: 'pointer', backgroundColor:'rgb(247, 247, 245)', borderColor: 'rgb(247, 247, 245)'}} className='mt-3 d-flex flex-row'>
                <div style={{width: '15%'}} className='p-2 bd-highlight'>Photo</div>
                <div style={{width: '85%'}} className='p-2 bd-highlight'>
                    <h3>{apartament.type}, {apartament.info.find(info => info.title === 'Площадь').description}</h3>
                    <div style={{width: '100%'}} className='d-flex  mt-2 justify-content-between'>
                        <div style={{width: '30%'}} className='bd-highlight'>
                            <div style={{textAlign: 'left'}}>Стоимость <span style={{float: 'right', fontWeight: 'bold'}}>{apartament.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</span></div>
                            <div style={{textAlign: 'left'}}>Стоимость за м² <span style={{float: 'right', fontWeight: 'bold'}}>{Math.round(apartament.price / parseFloat(apartament.info.find(info => info.title === 'Площадь').description)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</span></div>
                        </div>
                        <span className='stickVert'></span>
                        <div style={{width: '30%'}} className='bd-highlight'>
                            <div>Корпус {apartament.info.find(info => info.title === 'Корпус').description}, Этаж {apartament.info.find(info => info.title === 'Этаж').description}</div>
                            <div>{apartament.info.find(info => info.title === 'Заселение').description}</div>
                        </div>
                        <span className='stickVert'></span>
                        <div style={{width: '30%'}} className='bd-highlight'>
                            <div className='favBttn' style={{float: 'right'}}><svg viewBox="0 0 16 14" fill="none"><path d="M13.8338 2.09496C13.0898 1.38903 12.1279 1 11.1249 1C9.92844 1 8.7 1.66667 7.99999 3C7.3 1.66667 6.07155 1 4.87508 1C3.87211 1 2.91014 1.38903 2.16616 2.09496C1.66618 2.56938 0.852201 3.61074 1.0232 5.25081C1.19819 6.92694 3.00001 9 7.72251 13.4203C7.80651 13.473 7.903 13.5 8 13.5C8.097 13.5 8.19349 13.473 8.27749 13.4203C12.5 9.5 14.8018 6.92694 14.9768 5.25081C15.1478 3.61074 14.3343 2.56986 13.8338 2.09496Z" stroke="#141414" stroke-linejoin="round"></path></svg></div>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default ApartamentItem;