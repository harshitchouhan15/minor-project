"use client";

import React from 'react'
import styles from "./singlePost.module.css";
import { useFormState } from 'react-dom';
import { summarizeBlog } from '@/lib/summerize';

const BlogDesc = ({description}) => {
    const [state, action] = useFormState(summarizeBlog,undefined)
  return (
    <form action={action} style={{display:'flex', flexDirection:"column" , gap:9}} >
        <input type="text " defaultValue={description} style={{display:"none"}} name='desc' />
    <button className={styles.summerizeBtn} type='submit' >Summerize</button>

    {
        state
    }
    </form>
  )
}

export default BlogDesc