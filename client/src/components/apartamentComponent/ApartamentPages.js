import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '../..';
import { Pagination } from 'react-bootstrap';

const ApartamentPages = observer(() => {
    const {apartaments} = useContext(Context)
    const pageCount = Math.ceil(apartaments.apartamentTotalCount / apartaments.apartamentLimit)
    const pages = []

    for(let i = 0; i < pageCount; i++){
        pages.push(i+1)
    }

    return(
        <Pagination className='mt-5 justify-content-center'>
            <Pagination.First onClick={()=>apartaments.setApartamentPage(1)}/>
            <Pagination.Prev onClick={()=>{if(apartaments.apartamentPage > 1)apartaments.setApartamentPage(apartaments.apartamentPage-1)}}/>
            {
                pages.map(page =>
                    <Pagination.Item
                        key ={page}
                        active={apartaments.apartamentPage === page}
                        onClick={()=>apartaments.setApartamentPage(page)}
                    >
                        {page}
                    </Pagination.Item>    
                )
            }
            <Pagination.Next onClick={()=>{if(apartaments.apartamentPage < pageCount)apartaments.setApartamentPage(apartaments.apartamentPage+1)}}/>
            <Pagination.Last onClick={()=>apartaments.setApartamentPage(pageCount)}/>
        </Pagination>
    )
})

export default ApartamentPages
