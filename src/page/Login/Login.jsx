import React, { useState } from 'react'
import ss from './Login.module.css'

const Login = () => {

    const [test, setTest] = useState('apple')

    // let test = 'banana'
    // let test2 = 'apple'
    // let test3 = 333

    const testFunction = (fruit) => {
        setTest(fruit)
        alert(`바꾼 과일의 이름은 ${fruit}입니다.`)
        alert('바꾼 과일의 이름은' + fruit + '입니다.')
        window.location.reload()
    }





    return (
        <div className={ss.wrap}>
            <h1 onClick={() => testFunction()}>{test}</h1>
            {/* <h1>{test2}</h1> */}
            <div className={ss.mini}>
                <p onClick={() => testFunction('apple')}>apple로 바꾸기</p>
                <p onClick={() => testFunction('banana')}>banana로 바꾸기</p>
                <p onClick={() => testFunction('orange')}>orange로 바꾸기</p>
            </div>
        </div>
    )
}

export default Login