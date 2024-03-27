import { FC } from 'react'

import { reviews } from '../../../../app/data/reviews'
import { Item } from '../../../../shared/components/Reviews/Item/Item'
import { CustomSwiper } from '../../../../shared/ui/CustomSwiper/CustomSwiper'
import styles from './Reviews.module.scss'

export const Reviews: FC = () => {
  return (
    <section className={styles.wrapper} id='reviews'>
      <h2 className={styles.title}>Отзывы</h2>
      <CustomSwiper
        loop
        grabCursor
        styles={styles.reviews}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map(item => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              avatar={item.avatar}
              title={item.title}
              review={item.review}
            />
          )
        })}
      </CustomSwiper>
    </section>
  )
}
