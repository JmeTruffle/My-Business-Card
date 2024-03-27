import { FC } from 'react'
import styles from './Card.module.scss'

interface CardProps {
  title: string
  image: string
  category: string
  href: string
}

export const Card: FC<CardProps> = ({ title, image, category, href }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.mask}></div>
      </div>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.title}>{title}</h3>
      <a href={href} target='_blank' className={styles.button}>
        <i className='icon-link'></i>
      </a>
    </div>
  )
}
