import React from 'react'
// import { useNavigate } from 'react-router-dom'
import ss from './Home.module.css'

const Home = () => {

    // const navigate = useNavigate()

    return (
        <div className={ss.wrap}>
            <img className={ss.mainImg} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/1e276f8421639c3849e69759fcc7fc99.jpg' alt='' />
            <img className={ss.logo} src='https://gorgo.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c0c7470f6e8a7a3bdbec2e750c326ff2.png' alt='' />
        </div>

    )
}

export default Home