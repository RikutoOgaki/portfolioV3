'use client'

import { useState, useEffect } from 'react'
import style from '@/styles/Components/common/skills.module.scss'
import {
    FaHtml5,
    FaCss3,
    FaSass,
    FaPhp,
    FaReact,
    FaPython,
    FaRust,
    FaFigma,
    FaSlack,
    FaDocker,
    FaDiscord,
} from 'react-icons/fa'
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiMysql,
    SiPostgresql,
    SiVisualstudiocode,
    SiNotion,
    SiFlutter,
} from "react-icons/si";



export default function Skills() {

    return (
        <>
            <div className={style.skillsWrap}>
                <h3 className={style.contentTitle}>Skills</h3>
                <div className={style.skillsBox}>
                    <div className={style.skillsItems}>
                        <h4 className={style.skillTitle}>UseSkills</h4>
                        <div className={style.iconBox}>
                            <FaHtml5 className={style.icon} />
                            <FaCss3 className={style.icon} />
                            <FaSass className={style.icon} />
                            <SiJavascript className={style.icon} />
                            <SiTypescript className={style.icon} />
                            <FaReact className={style.icon} />
                            <SiNextdotjs className={style.icon} />
                        </div>
                    </div>
                    <div className={style.skillsItems}>
                        <h4 className={style.skillTitle}>StudySkills</h4>
                        <div className={style.iconBox}>
                            <FaPhp className={style.icon} />
                            <FaPython className={style.icon} />
                            <SiMysql className={style.icon} />
                            <SiPostgresql className={style.icon} />
                            <FaRust className={style.icon} />
                            <SiFlutter className={style.icon} />
                            <FaDocker className={style.icon} />
                        </div>
                    </div>
                    <div className={style.skillsItems}>
                        <h4 className={style.skillTitle}>UseTools</h4>
                        <div className={style.iconBox}>
                            <SiVisualstudiocode className={style.icon} />
                            <FaSlack className={style.icon} />
                            <SiNotion className={style.icon} />
                            <FaFigma className={style.icon} />
                            <FaDiscord className={style.icon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}