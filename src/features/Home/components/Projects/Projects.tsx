import { FC, useState } from 'react'
import { projects, titles } from '../../../../app/data/projects'
import { Card } from '../../../../shared/components/Projects/Card/Card'
import styles from './Projects.module.scss'

interface MenuItems {
  id: number
  title: string
  image: string
  category: string
  href: string
}

export const Projects: FC = () => {
  const [items, setItems] = useState<MenuItems[]>(projects)

  const filterItem = (categoryItem: string) => {
    const updatedItems = projects.filter(elem => {
      return elem.category === categoryItem
    })

    setItems(updatedItems)
  }

  return (
    <section className={styles.wrapper} id='projects'>
      <h2 className={styles.title}>Проекты</h2>
      <div className={styles.filters}>
        <span className={styles.item} onClick={() => setItems(projects)}>
          Все
        </span>
        {titles.map(item => {
          return (
            <span
              key={item.id}
              className={styles.item}
              onClick={() => filterItem(item.title)}
            >
              {item.title}
            </span>
          )
        })}
      </div>
      <div className={styles.container}>
        {items.map(item => {
          return (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              category={item.category}
              href={item.href}
            />
          )
        })}
      </div>
    </section>
  )
}
