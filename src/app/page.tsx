'use client'

import Image from "next/image";
import style from "./page.module.scss";

import { Header } from '@/Components/Header'
import { MyName } from '@/Components/MyName'

export default function Home() {
  return (
    <>
      <Header />
      <MyName />
    </>
  );
}
