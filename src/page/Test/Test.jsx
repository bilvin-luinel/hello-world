import React from 'react'
import ss from './Test.module.css'
import { ReactComponent as Naver } from '../../svg/Naver.svg'

const Test = () => {


    return (
        <div className={ss.wrap}>
            <h1>로그인</h1>
            <input type='text' className={ss.input_1} />
            <input type='text' className={ss.input_1} />
            <div className={ss.lv1}>
                <input type='checkbox' />
                <p>아이디 저장</p>
                <input type='checkbox' />
                <p>보안접속</p>
            </div>
            <p className={ss.login_bt}>로그인</p>
            <div className={ss.lv2}>
                <p>아이디 찾기</p>
                <p>비밀번호 찾기</p>
                <p>회원가입</p>
            </div>
            <div className={ss.lv3}>
                <Naver />
                <p>네이버 로그인</p>
            </div>
        </div>
    )
}

export default Test