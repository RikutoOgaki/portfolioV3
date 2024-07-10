'use client'

import style from '@/styles/page.module.scss'

import { Header } from '@/Components/Header'
import { MyName } from '@/Components/MyName'
import { About } from '@/Components/About'

export default function Home() {
  return (
    <>
      <Header />
      <MyName />
      <About />
    </>
  );
}
