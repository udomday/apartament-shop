import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '..';
import { Pagination } from 'react-bootstrap';

const Pages = observer(() => {
    const {apartaments} = useContext(Context)
    const pageCount = Math.ceil(apartaments.districtTotalCount / apartaments.districtLimit)
    const pages = []

    for(let i = 0; i < pageCount; i++){
        pages.push(i+1)
    }
    console.log(apartaments.districtTotalCount, apartaments.districtLimit)
    return(
        <Pagination className='mt-5 justify-content-center'>
            <Pagination.First onClick={()=>apartaments.setDistrictPage(1)}/>
            <Pagination.Prev onClick={()=>{if(apartaments.districtPage > 1)apartaments.setDistrictPage(apartaments.districtPage-1)}}/>
            {
                pages.map(page =>
                    <Pagination.Item
                        key ={page}
                        active={apartaments.districtPage === page}
                        onClick={()=>apartaments.setDistrictPage(page)}
                    >
                        {page}
                    </Pagination.Item>    
                )
            }
            <Pagination.Next onClick={()=>{if(apartaments.districtPage < pageCount)apartaments.setDistrictPage(apartaments.districtPage+1)}}/>
            <Pagination.Last onClick={()=>apartaments.setDistrictPage(pageCount)}/>
        </Pagination>
    )
})

export default Pages
