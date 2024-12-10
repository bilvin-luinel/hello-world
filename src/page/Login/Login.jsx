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
        <div className={ss.wrap}>
            {/* <h1>{array2[0]}</h1>
            <h1>{array2[1]}</h1>
            <h1>{array2[2]}</h1>
            <h1>{array2[3]}</h1>
            <h1>{array2[4]}</h1>
            <h1>{array2[5]}</h1>
            <h1>{array2[6]}</h1> */}

            <select className={ss.select_wrap} onChange={(e) => setColor(e.target.value)}>
                <option value={''}>- [필수] 옵션을 선택해 주세요.</option>
                <option value={'white'}>화이트</option>
                <option value={'yellow'}>옐로우</option>
                <option value={'orange'}>오렌지</option>
            </select>


            <h3 onClick={() => alert(color)}>클릭</h3>


            <select>
                <option>1번</option>
                <option>2번</option>
                <option>3번</option>
            </select>
        </div>

    )
}

export default Login