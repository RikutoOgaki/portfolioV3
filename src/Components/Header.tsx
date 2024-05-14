'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/Components/header.module.scss'

// 型宣言
type headerData = Array<string>

export function Header() {

    // リンク先名データ
    const [headerTags, setHeaderTags] = useState<headerData>([
        'TOP',
        'ABOUT',
        'SKILLS',
        'WORKS'
    ])

    // Scrollが発生すると消え、止めると表示される
    const [hidden, setHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY) {
                setHidden(true)
            } else {
                setHidden(false)
            }

            setLastScrollY(currentScrollY)
        }

        const handleScrollStop = () => {
            setHidden(false)
        }

        const onScroll = () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            handleScroll()
            timeoutId = setTimeout(handleScrollStop, 1000)
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])

    // ここまで

    return (
        <>
            <header className={`${style.headerWrap} ${hidden ? style.headerWrapHidden : ''}`}>
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