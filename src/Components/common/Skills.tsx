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
                            <FaHtml5 />
                            <FaCss3 />
                            <FaSass />
                            <SiJavascript />
                            <SiTypescript />
                            <FaReact />
                            <SiNextdotjs />
                        </div>
                    </div>
                    <div className={style.skillsItems}>
                        <h4 className={style.skillTitle}>StudySkills</h4>
                        <div className={style.iconBox}>
                            <FaPhp />
                            <FaPython />
                            <SiMysql />
                            <SiPostgresql />
                            <FaRust />
                            <SiFlutter />
                            <FaDocker />
                        </div>
                    </div>
                    <div className={style.skillsItems}>
                        <h4 className={style.skillTitle}>UseTools</h4>
                        <div className={style.iconBox}>
                            <SiVisualstudiocode />
                            <FaSlack />
                            <SiNotion />
                            <FaFigma />
                            <FaDiscord />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}