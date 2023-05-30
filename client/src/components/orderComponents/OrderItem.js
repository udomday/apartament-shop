import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import CheckOrder from '../modals/orderModals/CheckOrder'
import { observer } from 'mobx-react-lite'

const OrderItem = observer(({order, setCheck}) => {

    const [showOrder, setShowOrder] = useState(false)

    const createOrder = new Date(order.createdAt)

    const updateOrder = new Date(order.updatedAt)

    return(
        <Card className='p-2 mt-3'>
            <div className='d-flex flex-row justify-content-between' style={{cursor:'pointer'}}  onClick={()=>setShowOrder(true)}>
                <div>
                    <div>
                        {order.apartament.title}                    
                    </div>
                    <div className='mt-2'>
                        Дата создания заявки: {createOrder.getDate()}.{createOrder.getMonth()+1 < 10 ? `0${createOrder.getMonth()+1}` : createOrder.getMonth()+1}.{createOrder.getFullYear()} {createOrder.getHours()}:{createOrder.getMinutes()}
                    </div>
                    <div className='mt-2'>
                        Дата обновления статуса заявки: {updateOrder.getDate()}.{updateOrder.getMonth()+1 < 10 ? `0${updateOrder.getMonth()+1}` : updateOrder.getMonth()+1}.{updateOrder.getFullYear()} {updateOrder.getHours()}:{updateOrder.getMinutes()}
                    </div>
                </div>
                <div>
                    <div>
                        Статус заявки: {order.status}
                    </div>
                    <div>
                        Пользователь: {order.user.FIO}
                    </div>
                </div>
            </div>
            <CheckOrder show={showOrder} onHide={()=>setShowOrder(false)} order={order} setCheck={setCheck}/>
        </Card>
    )
})

export default OrderItem