import React from 'react'
import ss from './Product.module.css'

const Product = () => {

    const array = [
        {
            url: 'https://gorgo.kr/web/product/medium/202408/b8f1cd6c7ac2a22df583e30d09659dbf.png',
            title: '다이아윙스 고반발 국제공인구 M5 골프공(30구)',
            price1: 98000,
            price2: 59000,
        },
        {
            url: 'https://gorgo.kr/web/product/medium/202408/f51bec4880fe52e2d6309611166feb26.png',
            title: '다이아윙스 고반발 국제공인구 M3 골프공(30구)',
            price1: 98000,
            price2: 59000,
        },
        {
            url: 'https://gorgo.kr/web/product/medium/202408/e586f2dcedda1b7e524e672fb4a5ebd6.png',
            title: '다이아윙스 고반발 국제공인구 M5 골프공(50구)',
            price1: 1580000,
            price2: 200000,
        },
        {
            url: 'https://gorgo.kr/web/product/medium/202408/9bf994be8ce15885b1a2dbe8f9ad7dc0.png',
            title: '다이아윙스 고반발 국제공인구 M3 골프공(50구)',
            price1: 158000,
            price2: 95000,
        },
    ]

    const target = 12323423456
    return (
        <div className={ss.wrap}>
            <div className={ss.lv1}></div>
            <div className={ss.lv2}>
                {array.map((item, idx) => (
                    <div className={ss.card}>
                        <img src={item.url} alt='' />
                        <h3>{item.title}</h3>
                        <p>
                            <span className={ss.description1}>{item.price1.toLocaleString()}원</span>
                            <span className={ss.description2}>{item.price2.toLocaleString()}원</span>
                            <span className={ss.description3}>{Math.round(100 - (item.price2 / item.price1 * 100))}%</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product