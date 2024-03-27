import { FC } from 'react'
import { experience } from '../../../../app/data/experience'
import { Card } from '../../../../shared/components/Experience/Card/Card'
import styles from './Experience.module.scss'

export const Experience: FC = () => {
  return (
    <section className={styles.wrapper} id='experience'>
      <h2 className={styles.title}>Опыт</h2>
      <div className={styles.experience}>
        <div className={styles.data}>
          {experience.map(item => {
            if (item.category === 'Education') {
              return (
                <Card
                  key={item.id}
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              )
            }
          })}
        </div>
        <div className={styles.data}>
          {experience.map(item => {
            if (item.category === 'Experience') {
              return (
                <Card
                  key={item.id}
                  icon={item.icon}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}
