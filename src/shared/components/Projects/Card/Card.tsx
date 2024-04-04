import { FC } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  title: string
  image: string
  category: string
  linkSite: string
  linkGitHub: string
}

export const Card: FC<CardProps> = ({
  title,
  image,
  category,
  linkSite,
  linkGitHub,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.mask} />
      </div>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        {linkSite ? (
          <a
            href={linkSite}
            target='_blank'
            className={styles.site}
            rel='noreferrer'
          >
            <i className='icon-link' />
          </a>
        ) : null}
        {linkGitHub ? (
          <a
            href={linkGitHub}
            target='_blank'
            className={styles.github}
            rel='noreferrer'
          >
            <i className='icon-social-github' />
          </a>
        ) : null}
      </div>
    </div>
  )
}
