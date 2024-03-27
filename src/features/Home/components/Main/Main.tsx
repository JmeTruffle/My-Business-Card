import { FC } from 'react'

import { HeaderSocials } from '../../../../shared/components/Main/HeaderSocials/HeaderSocials'
import { Shapes } from '../../../../shared/components/Main/Shapes/Shapes'
import { ButtonLink } from '../../../../shared/ui/ButtonLink/ButtonLink'
import styles from './Main.module.scss'

export const Main: FC = () => {
  return (
    <section className={styles.wrapper} id='main'>
      <div className={styles.items}>
        <img
          className={styles.avatar}
          src='/icons/avatars/myAvatar.webp'
          alt='Avatar'
        />
        <h1 className={styles.title}>Трюфилькин Алексей, 20лет</h1>
        <span className={styles.education}>Front-End разработчик</span>
        <HeaderSocials />
        <ButtonLink href='#contacts' title='Связаться со мной' />
      </div>
      <Shapes />
    </section>
  )
}
