import React, { useState } from 'react'
import ss from './Home.module.css'

const Home = () => {

    const [tab, setTab] = useState(1)

    // const array = [{ location: '후쿠오카', title: '일본 인기도시', url: 'https://gorgo.kr/images/main-promotion-bn1.jpg' },
    // { location: '아시아태평양', title: '포시즌스', url: 'https://gorgo.kr/images/main-promotion-bn2.jpg' },
    // { location: '중화권', title: '포시즌스', url: 'https://gorgo.kr/images/main-promotion-bn2.jpg' },
    // { location: '베트남', title: '포시즌스', url: 'https://gorgo.kr/images/main-promotion-bn2.jpg' },]





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
            <div className={ss.promotion_wrap}>
                <h3>기획전</h3>
                <div className={ss.promotion_mini}>
                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>

                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>

                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>

                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>
                </div>
            </div>

            <div className={ss.promotion_wrap}>
                <h3>기획전</h3>
                <div className={ss.promotion_mini}>
                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>

                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>

                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>

                    <div>
                        <img className={ss.promotion_lv1} src='https://gorgo.kr/images/main-promotion-bn2.jpg' alt='' />
                        <div className={ss.promotion_lv2}>
                            <p>후쿠오카 / 홋카이도 / 오사카 / 교토 / 도쿄</p>
                            <h2>일본 인기도시 추천 호텔</h2>
                        </div>
                        <h3 className={ss.promotion_tag}>기획전</h3>
                    </div>
                </div>
            </div>

            <div className={ss.event_logo_wrap}>
                <img src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b646deec3236d3c7e9775290195bdb67.jpg' alt='' />
                <img src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/fa64239080b3eb19617253091f78b005.jpg' alt='' />
            </div>

            <div className={ss.footer}>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <img src='https://m-img.cafe24.com/images/bi/lguplus/660x94.jpg' alt='' />
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Home