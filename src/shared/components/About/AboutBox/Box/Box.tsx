import { FC, ReactNode } from 'react'
import styles from './Box.module.scss'

interface BoxProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export const Box: FC<BoxProps> = ({ title, subtitle, icon }) => {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  )
}
