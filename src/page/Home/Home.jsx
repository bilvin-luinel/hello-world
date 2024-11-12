import React, { useState } from 'react'
import ss from './Home.module.css'

const Home = () => {

    const [tab, setTab] = useState(1)






    return (
        <div className={ss.wrap}>
            <img className={ss.mainImg} onClick={() => window.location.href = 'https://welfare.plusn.co.kr/event/detail_accom.html?no=2606'} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1e276f8421639c3849e69759fcc7fc99.jpg' alt='' />
            <img className={ss.logo} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c0c7470f6e8a7a3bdbec2e750c326ff2.png' alt='' />

            <div className={ss.circle_wrap}>
                <div className={ss.circle_wrap_1}>
                    <p className={tab === 1 && ss.tab_on} onClick={() => setTab(1)}>국내호텔 & 리조트</p>
                    <p className={tab === 2 && ss.tab_on} onClick={() => setTab(2)}>해외리조트 & 풀빌라</p>
                </div>

                {tab === 1 && (
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
                )}

                {tab === 2 && (
                    <div className={ss.circle_wrap_2}>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-01.png' alt='' />
                            <p>나트랑</p>
                        </div>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-03.png' alt='' />
                            <p>다낭</p>
                        </div>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-04.png' alt='' />
                            <p>호이안</p>
                        </div>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-05.png' alt='' />
                            <p>하노이</p>
                        </div>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-06.png' alt='' />
                            <p>호치민</p>
                        </div>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-07.png' alt='' />
                            <p>달랏</p>
                        </div>
                        <div>
                            <img src='https://euna787878.cafe24.com/images/tab2-08.png' alt='' />
                            <p>호짬</p>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default Home