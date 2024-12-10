import React, { useState } from 'react'
import ss from './ProductDetail.module.css'
import { useSearchParams } from 'react-router-dom'

const ProductDetail = () => {

    const [searchParam] = useSearchParams()
    const product_id = searchParam.get('product_no')
    const test_value = searchParam.get('test')






    return (
        <div className={ss.wrap}>
            <h1 style={{fontSize:'50px',textAlign:"center"}}>https://nver.com/blog ? id = '값' & id2 = '값'</h1>
            
        </div>
    )
}

export default ProductDetail