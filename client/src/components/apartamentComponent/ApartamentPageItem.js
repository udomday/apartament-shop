import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneApartament } from '../../http/apartamentApi';
import { createPurchaseOrder, getOnePurchaseOrder, getPassport } from '../../http/userApi';
import { Context } from '../..';

const ApartamnetPageItem = observer(() => {
    const {id} = useParams()
    const {user} = useContext(Context)
    const [apartament, setApartament] = useState()
    useEffect(()=>{
        fetchOneApartament(id).then(data => setApartament(data))
    },[])

    const addApartamentOrder = () => {
        if(user.isAuth){
            getOnePurchaseOrder(user.user.id, id).then(data => {
                if(data){
                    alert('Вы уже создали заявку на покупку этой квартиры')
                } else {
                    getPassport(user.user.id).then(data => {
                        if(data){
                            createPurchaseOrder(user.user.id, id, "ОТПРАВЛЕНО").then(data => alert('Заявка создана'))
                        } else {
                            alert("Добавьте паспортные данные в личном кабинете, чтобы создать заявку")
                        }
                    })
                }
            })
        }
    }

    if(apartament){
        return(
            <div style={{width: '100%'}} className='d-flex flex-row mt-2'>
                <Card style={{marginRight: '2%', width: '68%', backgroundColor:'rgb(247, 247, 245)', borderColor: 'rgb(247, 247, 245)'}}>
                    <Image width={'90%'} height={'100%'} src={process.env.REACT_APP_API_URL + apartament.photos[0].linkPhoto}></Image>
                </Card>
                <Card style={{width: '30%', backgroundColor:'rgb(247, 247, 245)', borderColor: 'rgb(247, 247, 245)'}}>
                    <div className='p-2'>
                        <h4>{apartament.type} {apartament.info.find(info => info.title === 'Площадь').description}м²</h4>
                        <div>
                            <div style={{margin:'20px 0 5px 0', fontSize:'28px', lineHeight: '16px', color: 'rgb(255, 65, 20)'}}>{apartament.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</div>
                            <div style={{margin:'0 0 20px 0', fontSize:'14px', lineHeight: '16px', color: 'rgb(185, 185, 185)'}}>{Math.round(apartament.price / parseFloat(apartament.info.find(info => info.title === 'Площадь').description)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽ за м²</div>
                        </div>
                        <Button onClick={addApartamentOrder} style={{ width: '100%', float: 'center', borderColor: 'rgb(255, 65, 20)', backgroundColor: 'rgb(255, 65, 20)', color: "#fff"}}>Купить</Button>
                        {/* <Button style={{marginTop: '20px', width: '100%', float: 'center', borderColor: 'rgb(91, 91, 91)', backgroundColor: 'rgb(91, 91, 91)', color: "#fff"}}>Написать консультанту</Button> */}
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
})

export default ApartamnetPageItem