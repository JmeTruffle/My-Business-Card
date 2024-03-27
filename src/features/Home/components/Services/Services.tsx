import { FC } from 'react'

import { services } from '../../../../app/data/services'
import { Card } from '../../../../shared/components/Services/Card/Card'
import styles from './Services.module.scss'

export const Services: FC = () => {
  return (
    <section className={styles.wrapper} id='services'>
      <h2 className={styles.title}>Сервисы</h2>
      <div className={styles.data}>
        {services.map(item => {
          return (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
    </section>
  )
}
