import React from 'react'
import ss from './Login.module.css'

const Login = () => {


    // const array = [{ name: 'john', age: 25, job: 'programmer' }, { name: '유제', age: 23, job: 'ceo' }, { name: 'maria', age: 34, job: 'woman' }, { name: 'jane', age: 40, job: '주부' }]
    const array2 = [1, 2, 3, 4, 'apple', 999, 'banana']


    return (
        <div className={ss.wrap}>
            <h1>{array2[0]}</h1>
            <h1>{array2[1]}</h1>
            <h1>{array2[2]}</h1>
            <h1>{array2[3]}</h1>
            <h1>{array2[4]}</h1>
            <h1>{array2[5]}</h1>
            <h1>{array2[6]}</h1>

            {array2.map((item, idx) => (
                <div>
                    <h1>{item}</h1>
                </div>
            ))}

        </div>

    )
}

export default Login