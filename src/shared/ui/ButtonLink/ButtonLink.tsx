import { FC } from 'react'

import styles from './ButtonLink.module.scss'

interface ButtonLinkProps {
  title: string
  href: string
  download?: string
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, title, download }) => {
  return (
    <a download={download} href={href} className={styles.button}>
      {title}
    </a>
  )
}
