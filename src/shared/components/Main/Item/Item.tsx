import { FC, ReactNode } from 'react'
import styles from './Item.module.scss'

interface ItemProps {
  href: string
  icon: ReactNode
}

export const Item: FC<ItemProps> = ({ href, icon }) => {
  return (
    <a href={href} className={styles.link} target='_blank'>
      {icon}
    </a>
  )
}
