import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import ss from './Home.module.css'

const Home = () => {

    // const navigate = useNavigate()

    const [tab, setTab] = useState(1)
    // let tab = 2

    return (
        <div className={ss.wrap}>
            <img className={ss.mainImg} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1e276f8421639c3849e69759fcc7fc99.jpg' alt='' />
            <img className={ss.logo} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c0c7470f6e8a7a3bdbec2e750c326ff2.png' alt='' />

            <div>
                <p onClick={() => setTab(1)} style={{ textDecoration: tab === 1 ? 'underline' : 'initial' }}>국내호텔 & 리조트</p>
                <p onClick={() => setTab(2)} style={{ textDecoration: tab === 2 ? 'underline' : 'initial' }}>해외리조트 & 풀빌라</p>
            </div>
        </div>

    )
}

export default Home