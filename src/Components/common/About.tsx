'use cilent'

import style from '@/styles/Components/about.module.scss'

export function About() {
    return (
        <>
            <div className={style.aboutWrap}>
                <h3 className={style.contentTitle}>About</h3>
                <div className={style.aboutGridBox}>
                    <div className={style.myPhotoContent}>
                        <figure>
                            <img src="/" alt="" />
                        </figure>
                        <span>おおがきりくと</span>
                        <p>大垣陸斗</p>
                    </div>
                    <div className={style.mySchoolContent}>
                        <p className={style.text}>
                            ECCコンピュータ専門学校<br />
                            マルチメディア学科<br />
                            Webデザインコース
                        </p>
                    </div>
                    <div className={style.myValueContent}>
                        <p className={style.text}>
                            まずはやってみる
                        </p>
                        <p className={style.subText}>
                            新しいことに挑戦するのはとても勇気がいると自分は思っています。
                            それでも恐れず頑張り続けることで、できた、達成したときに
                            自分がまたレベルアップしたと思えるので、
                            まるで自分が主人公のRPGを自分で遊んでいるような楽しい思いになります。
                        </p>
                    </div>
                    <div className={style.myCareerContent}>
                        <ul className={style.subMyCareerContent}>
                            <li>第18回若年者物作り大会 出場</li>
                            <li>
                                長期インターンシップ参加<br />
                                2023 / 2月 〜 2023 / ８月
                            </li>
                            <li>HackU出場経験</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}