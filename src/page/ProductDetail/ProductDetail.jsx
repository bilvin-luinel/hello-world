import React, { useEffect, useState } from 'react'
import ss from './ProductDetail.module.css'
import { useSearchParams } from 'react-router-dom'

const ProductDetail = () => {

    const [searchParam] = useSearchParams()
    const product_id = searchParam.get('product_no')
    const test_value = searchParam.get('test')

    const [color, setColor] = useState('')
    const [color2, setColor2] = useState('')








    return (
        <div className={ss.wrap}>
            <h1 style={{fontSize:'50px',textAlign:"center"}}>https://nver.com/blog ? id = '값' & id2 = '값'</h1>
            <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} style={{marginLeft:'500px'}} />
            <input type='text' value={color2} onChange={(e)=>setColor2(e.target.value)} style={{marginLeft:'500px'}} />
            <p style={{padding:'10px', border:'1px solid black', cursor:'pointer',width:'fit-content',marginLeft:'500px'}} onClick={()=>alert(`${color} ${color2}`)}>확인</p>
        </div>
    )
}

export default ProductDetail