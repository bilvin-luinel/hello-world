import React from 'react'
import { Outlet } from 'react-router-dom'
import ss from './AppLayout.module.css'

const AppLayout = () => {





    return (
        <div>
            <div className={ss.wrap}>
                <div className={ss.lv1}>
                    <div className={ss.lv1_left}>
                        <img className={ss.logo} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c0c7470f6e8a7a3bdbec2e750c326ff2.png' alt='' />
                        <input className={ss.searchBox} type='text' />
                        <p>인기검색어</p>
                        <span>#공간</span>
                    </div>
                    <div>

                    </div>

                </div>
                <div className={ss.lv2}>
                    <div>
                        <p>국내숙박</p>
                        <p>해외호텔</p>
                        <p>공연기획</p>
                        <p>골프용품</p>
                    </div>
                    <div>
                        <p>이용후기</p>
                        <p>문의하기</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default AppLayout