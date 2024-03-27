import { FC } from 'react'
import styles from './ScrollDown.module.scss'

export const ScrollDown: FC = () => {
  return (
    <div className={styles.wrapper}>
      <a href='#about' className={styles.link}>
        <span className={styles.scroll}>Прокрутить вниз</span>
        <span className={styles.mouse}>
          <span className={styles.wheel}></span>
        </span>
      </a>
    </div>
  )
}
