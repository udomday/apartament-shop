import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import {Context} from '..'
import { getAdminAllPurchaseOrder, getAllPurchaseOrder } from '../http/userApi'
import { useParams } from 'react-router-dom'
import OrderItem from '../components/orderComponents/OrderItem'
const UserOrder = () => {
    const {user} = useContext(Context)
    const {id} = useParams()

    const [orders, setOrders] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        if(user.user.role === "ADMIN"){
            getAdminAllPurchaseOrder().then(data => {setOrders(data)})
            setCheck(false)
        } else {
            getAllPurchaseOrder(id).then(data => setOrders(data))
            setCheck(false)
        }
    }, [check])

    if(orders.length != 0){
        return(
            <Container>
                {
                    orders.map(order =>
                        <OrderItem key={order.id} order={order} setCheck={setCheck}/>    
                    )
                }
            </Container>
        )
    } else {
        return(
            <Container className='d-flex justify-content-center'>
                <div>
                    <h1 className='mt-5'>Пусто</h1>
                </div> 
            </Container>
        )
    }
}

export default UserOrder