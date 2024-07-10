'use client'

import style from '@/styles/page.module.scss'

import { Header } from '@/Components/template/Header'
import { MyName } from '@/Components/common/MyName'
import { About } from '@/Components/common/About'

export default function Home() {
  return (
    <>
      <Header />
      <MyName />
      <About />
    </>
  );
}
