import React, { useEffect, useState } from 'react'
import ss from './Login.module.css'

const Login = () => {




    return (
        <div className={ss.wrap}>
            <li className={ss.trigger}>
                <p>menu1</p>
                <div className={ss.hidden_wrap}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
            </li>
            <li className={ss.trigger}>
                <p>menu2</p>
                <div className={ss.hidden_wrap}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
            </li>
            <li className={ss.trigger}>
                <p>menu3</p>
                <div className={ss.hidden_wrap}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
            </li>
            <li className={ss.trigger}>
                <p>menu4</p>
                <div className={ss.hidden_wrap}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
            </li>

        </div>

    )
}

export default Login