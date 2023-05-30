import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Context } from '..';
import { getAllFavItems, getFavList } from '../http/userApi';
import ApartamentItem from '../components/districtComponent/ApartamentItem';
import { observer } from 'mobx-react-lite';


const FavoritePage = observer(() => {
    const {user} = useContext(Context)

    const [favItems, setFavItems] = useState([])

    const [update, setUpdate] = useState(true)

    useEffect(()=>{
        getFavList(user.user.id).then(data => {
            if(data){
                getAllFavItems(data.id).then(data => setFavItems(data))
            }
        })
        setUpdate(true)
    },[update])

    if(favItems.length != 0){
        return (
            <Container>
                {
                    favItems.map(favItem => 
                        <ApartamentItem key={favItem.id} apartament={favItem.apartament}  setupdate={setUpdate} />    
                    )
                }
            </Container>
        );
    } else {
        return (
            <Container className='d-flex justify-content-center'>
                <div>
                    <h1 className='mt-5'>Пусто</h1>
                </div> 
            </Container>
        );
    }
})

export default FavoritePage;