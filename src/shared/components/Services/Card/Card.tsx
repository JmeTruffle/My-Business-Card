import { FC } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  image: string
  title: string
  description: string
}

export const Card: FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
