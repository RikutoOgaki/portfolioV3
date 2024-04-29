'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/Components/header.module.scss'

// 型宣言
type headerData = Array<string>

export function Header() {

    const [headerTags, setHeaderTags] = useState<headerData>([
        'TOP',
        'ABOUT',
        'SKILLS',
        'WORKS'
    ])

    return (
        <>
            <header className={style.headerWrap}>
                <nav className={style.navigationBox}>
                    <ul className={style.navigationSubBox}>
                        {headerTags.map((v, idx) =>
                            <li key={idx} className={style.navigationItem}>{v}</li>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    )
}