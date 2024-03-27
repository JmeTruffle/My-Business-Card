import { FC } from 'react'

import styles from './ButtonLink.module.scss'

interface ButtonLinkProps {
  title: string
  href: string
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, title }) => {
  return (
    <a href={href} className={styles.button}>
      {title}
    </a>
  )
}
