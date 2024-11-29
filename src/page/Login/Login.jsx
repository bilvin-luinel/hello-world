import React from 'react'
import ss from './Login.module.css'

const Login = () => {


    const array = [{ name: 'john', age: 25, job: 'programmer' }, { name: '유제', age: 23, job: 'ceo' }, { name: 'maria', age: 34, job: 'woman' }, { name: 'jane', age: 40, job: '주부' }]
    const array2 = ['watermelon', 'apple', 'grape', 'banana']
    const array3 = [{ name: 'john', age: 20 }, { name: 'amy', age: 21 }, { name: 'dominic', age: 22 }, { name: 'steven', age: 23 }, { name: 'youn', age: 24 }, { name: 'gui', age: 40 }]

    const obj = {
        name: 'amy',
        age: 25,
        hobby: 'game'
    }

    console.log(obj.age)




    return (
        <div className={ss.wrap}>
            {/* <h1>{array2[0]}</h1>
            <h1>{array2[1]}</h1>
            <h1>{array2[2]}</h1>
            <h1>{array2[3]}</h1>
            <h1>{array2[4]}</h1>
            <h1>{array2[5]}</h1>
            <h1>{array2[6]}</h1> */}

            {array3.map((item, idx) => (
                <div key={idx} className={ss.card}>
                    <h1>이름 : {item.name}</h1>
                    <h2>나이 : {item.age}</h2>
                </div>
            ))}



        </div>

    )
}

export default Login