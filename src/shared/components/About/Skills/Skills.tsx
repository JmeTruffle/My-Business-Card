import { FC } from 'react'

import styles from './Skills.module.scss'

interface SkillsProps {
  name: string
  number: string
  style?: string
}

export const Skills: FC<SkillsProps> = ({ name, number, style }) => {
  return (
    <div className={styles.data}>
      <div className={styles.titles}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.number}>{number}</span>
      </div>
      <div className={styles.bar}>
        <span className={`${styles.percentage} ${style}`} />
      </div>
    </div>
  )
}
