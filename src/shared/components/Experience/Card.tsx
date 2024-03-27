import { FC } from 'react'
import styles from './Card.module.scss'

interface CardProps {
  icon: string
  year: string
  title: string
  description: string
}

export const Card: FC<CardProps> = ({ icon, year, title, description }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <i className={icon}></i>
      </div>
      <span className={styles.year}>{year}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
