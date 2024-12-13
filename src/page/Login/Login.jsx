import React, { useEffect, useState } from 'react'
import ss from './Login.module.css'

const Login = () => {


    const array = [{ name: 'john', age: 25, job: 'programmer' }, { name: '유제', age: 23, job: 'ceo' }, { name: 'maria', age: 34, job: 'woman' }, { name: 'jane', age: 40, job: '주부' }]
    const array2 = ['watermelon', 'apple', 'grape', 'banana']
    const array3 = [{ name: 'john', age: 20 }, { name: 'amy', age: 21 }, { name: 'dominic', age: 22 }, { name: 'steven', age: 23 }, { name: 'youn', age: 24 }, { name: 'gui', age: 40 }]

    const [color, setColor] = useState('')


    const obj = {
        name: 'amy',
        age: 25,
        hobby: 'game'
    }


    useEffect(() => {
        console.log('color : ', color)
    }, [color])




    return (
        <div className={ss.wrap} style={{ position: 'relative' }}>
            {/* <h1>{array2[0]}</h1>
            <h1>{array2[1]}</h1>
            <h1>{array2[2]}</h1>
            <h1>{array2[3]}</h1>
            <h1>{array2[4]}</h1>
            <h1>{array2[5]}</h1>
            <h1>{array2[6]}</h1> */}

            <div style={{ border: '3px solid blue', width: '120px', height: '70px', margin: '20px 50px' }}>
                hello1
            </div>
            <div style={{ border: '3px solid blue', width: '120px', height: '70px', margin: '20px 50px', position: 'absolute', bottom: '0px', right: '0px' }}>
                hello2
            </div>
            <div style={{ border: '3px solid blue', width: '120px', height: '70px', margin: '20px 50px' }}>
                hello3
            </div>
            <div style={{ border: '3px solid blue', width: '120px', height: '70px', margin: '20px 50px' }}>
                hello4
            </div>
            <div style={{ border: '3px solid blue', width: '120px', height: '70px', margin: '20px 50px' }}>
                hello5
            </div>
        </div>

    )
}

export default Login