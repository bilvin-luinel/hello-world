import React from 'react'
import ss from './Mail.module.css'

const Mail = () => {
    return (
        <div className={ss.wrap}>
            <div>
                <img src='https://img.ezwelfare.net/welfare_corp/css/user/front/renew/images/ico_ask1.png' alt='' />
                <h1>복지SHOP</h1>
                <p className={ss.line1}>상품 제안/신청</p>
                <p className={ss.line2}>신청하기</p>
                <p className={ss.line3}>신청현황보기</p>
            </div>
            <div>
                <img src='https://img.ezwelfare.net/welfare_corp/css/user/front/renew/images/ico_ask2.png' alt='' />
                <h1>서비스 제휴</h1>
                <p className={ss.line1}>서비스 및 광고 제안/신청</p>
                <p className={ss.line2}>신청하기</p>
                <p className={ss.line3}>신청현황보기</p>
            </div>
        </div>
    )
}

export default Mail