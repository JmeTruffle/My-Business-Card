import { FC } from 'react'
import styles from './Item.module.scss'

interface ItemProps {
  href: string
  iconName: string
}

export const Item: FC<ItemProps> = ({ href, iconName }) => {
  return (
    <li className={styles.item}>
      <a href={href} className={styles.link}>
        <i className={iconName}></i>
      </a>
    </li>
  )
}
