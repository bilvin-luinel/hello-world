import React, { useState } from 'react'
import ss from './Login.module.css'
import img_main from '../../img/img.jpg'

const Login = () => {

    const [test, setTest] = useState('apple')


    return (
        <div className={ss.wrap}>
            <div className={ss.mini}>
                <h1>기획전</h1>
            </div>


            {/* <img src='https://gorgo.kr/images/main-promotion-bn1.jpg' alt='' />
            <h1 style={{ fontSize: '50px',marginBottom:'30px' }}>hello</h1>
            <h3 style={{ fontSize: '50px' }}>world</h3> */}
        </div>

    )
}

export default Login