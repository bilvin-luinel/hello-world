import React, { useState } from 'react'
import ss from './Login.module.css'
import img_main from '../../img/img.jpg'

const Login = () => {

    const [test, setTest] = useState('apple')


    const testFunction = (fruit) => {
        setTest(fruit)
        alert(`바꾼 과일의 이름은 ${fruit}입니다.`)
        alert('바꾼 과일의 이름은' + fruit + '입니다.')
        window.location.reload()
    }

    const test2 = () => {
        console.log('hello')
    }




    return (
        <div className={ss.wrap}>
            {/* <h1 onClick={() => testFunction()}>{test}</h1> */}
            {/* <h1>{test2}</h1> */}
            {/* <div className={ss.mini}>
                <p onClick={() => testFunction('apple')}>apple로 바꾸기</p>
                <p onClick={() => testFunction('banana')}>banana로 바꾸기</p>
                <p onClick={() => testFunction('orange')}>orange로 바꾸기</p>
            </div> */}
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
        </div>
    )
}

export default Login