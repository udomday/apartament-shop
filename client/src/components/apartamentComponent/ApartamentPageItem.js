import React from 'react'
import { Button, Card, Row } from 'react-bootstrap';

const ApartamnetPageItem = () => {
    const apartament = {id: 1, type: 'Студия', price: '123321323', districtDistrictId: 1, info: 
    [{id: 1, title: 'Площадь', description: '19.87'},
    {id: 2, title: 'Этаж', description: '2'},
    {id: 3, title: 'Заселение', description: 'Заселение до 25 марта 2025'},
    {id: 4, title: 'Корпус', description: '1.1'},
    ]}
    return(
        <div style={{width: '100%'}} className='d-flex flex-row mt-2'>
            <Card style={{marginRight: '2%', width: '68%', backgroundColor:'rgb(247, 247, 245)', borderColor: 'rgb(247, 247, 245)'}}>
                PHOTO
            </Card>
            <Card style={{width: '30%', backgroundColor:'rgb(247, 247, 245)', borderColor: 'rgb(247, 247, 245)'}}>
                <div className='p-2'>
                    <h4>{apartament.type} {apartament.info.find(info => info.title === 'Площадь').description}м²</h4>
                    <div>
                        <div style={{margin:'20px 0 5px 0', fontSize:'28px', lineHeight: '16px', color: 'rgb(255, 65, 20)'}}>{apartament.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</div>
                        <div style={{margin:'0 0 20px 0', fontSize:'14px', lineHeight: '16px', color: 'rgb(185, 185, 185)'}}>{Math.round(apartament.price / parseFloat(apartament.info.find(info => info.title === 'Площадь').description)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽ за м²</div>
                    </div>
                    <Button style={{ width: '100%', float: 'center', borderColor: 'rgb(255, 65, 20)', backgroundColor: 'rgb(255, 65, 20)', color: "#fff"}}>Купить</Button>
                    <Button style={{marginTop: '20px', width: '100%', float: 'center', borderColor: 'rgb(91, 91, 91)', backgroundColor: 'rgb(91, 91, 91)', color: "#fff"}}>Написать консультанту</Button>
                </div>
                <div className='p-2'>
                    {apartament.info.map((info => 
                    <div key={info.id} style={{textAlign: 'left'}}>
                        {info.title} <span style={{float: 'right'}}>{info.description}</span>
                        <hr/>
                    </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default ApartamnetPageItem