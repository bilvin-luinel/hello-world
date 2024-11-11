import React, { useState } from 'react'
import ss from './Home.module.css'

const Home = () => {

    return (
        <div className={ss.wrap}>
            <img className={ss.mainImg} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1e276f8421639c3849e69759fcc7fc99.jpg' alt='' />
            <img className={ss.logo} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c0c7470f6e8a7a3bdbec2e750c326ff2.png' alt='' />

            <div className={ss.circle_wrap}>
                <div className={ss.circle_wrap_1}>
                    <p>국내호텔 & 리조트</p>
                    <p>해외리조트 & 풀빌라</p>
                </div>
                <div className={ss.circle_wrap_2}>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/seoul.png' alt='' />
                        <p>서울</p>
                    </div>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/gyeonggi_incheon.png' alt='' />
                        <p>경기도/인천</p>
                    </div>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/gangwon.png' alt='' />
                        <p>강원도</p>
                    </div>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/chungcheong.png' alt='' />
                        <p>충청도</p>
                    </div>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/jeolla.png' alt='' />
                        <p>전라도</p>
                    </div>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/gyeongsang.png' alt='' />
                        <p>경상도</p>
                    </div>
                    <div>
                        <img src='https://euna787878.cafe24.com/images/jeju.png' alt='' />
                        <p>제주도</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home