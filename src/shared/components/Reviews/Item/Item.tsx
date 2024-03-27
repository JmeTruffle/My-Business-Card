import { FC } from 'react'
import styles from './Item.module.scss'

interface ItemProps {
  id: number
  name: string
  avatar: string
  title: string
  review: string
}

export const Item: FC<ItemProps> = ({ id, avatar, title, review, name }) => {
  return (
    <div key={id} className={styles.item}>
      <div className={styles.thumb}>
        <img className={styles.avatar} src={avatar} alt={title} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.title}>{title}</span>
      <p className={styles.review}>{review}</p>
    </div>
  )
}
