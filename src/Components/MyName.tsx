'use client'

import style from '@/styles/Components/myname.module.scss'
import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6'

export function MyName() {
    return (
        <>
            <div className={style.myNameWrap}>
                <h1 className={style.title}>RikutoOgaki</h1>
                <p className={style.text}>Full Stack Engineer</p>
                <div className={style.iconBox}>
                    <FaXTwitter className={style.icon} onClick={() => location.href = 'https://twitter.com/Rikuto_Ogaki'} />
                    <FaGithub className={style.icon} onClick={() => location.href = 'https://github.com/RikutoOgaki'} />
                    <FaInstagram className={style.icon} onClick={() => location.href = 'https://www.instagram.com/rikut0_0531/'} />
                </div>
            </div>
        </>
    )
}