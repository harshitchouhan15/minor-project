"use client";


import styles from "@/app/home.module.css";
import Image from "next/image";


import React, { useEffect, useState } from 'react'

const ImageContainer = () => {


    const [index, setIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex(p=>p<4?p+1:0)
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[setIndex])

  return (
      <div className={styles.imgContainer}>
        <Image src={images[index]} alt="img" fill className={styles.heroImg}/>
      </div>
  )
}

export default ImageContainer;


const images = ["/hero.gif", "/hero.gif", "/hero.gif", "/hero.gif", "/hero.gif"]