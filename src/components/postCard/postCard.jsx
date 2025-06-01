import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <div className={styles.imgContainer}>
          {
            post.img?
          <Image src={post.img} alt="" fill className={styles.img}/>
          :
          <div style={{display:"flex", height:"100%", alignItems:"center", justifyContent:"center" }} >Image not available!</div>

          }
        </div>
        {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <p style={{marginBottom:20}}  >{ new Date(post.createdAt).toLocaleString() }</p>

        <Link className={styles.link} href={`/blog/${post._id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard