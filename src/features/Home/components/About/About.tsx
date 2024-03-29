import { FC } from 'react'

import { myResumePDF } from '../../../../app/data/files'
import { AboutBox } from '../../../../shared/components/About/AboutBox/AboutBox'
import { Skills } from '../../../../shared/components/About/Skills/Skills'
import { ButtonLink } from '../../../../shared/ui/ButtonLink/ButtonLink'
import styles from './About.module.scss'

export const About: FC = () => {
  return (
    <section className={styles.wrapper} id='about'>
      <h2 className={styles.title}>Обо мне</h2>
      <div className={styles.about}>
        <img
          className={styles.avatar}
          src='/icons/avatars/aboutAvatar.webp'
          alt='AboutAvatar'
        />
        <div className={styles.data}>
          <div className={styles.info}>
            <p className={styles.description}>
              Я веб-разработчик, базирующийся в Москве, с обширным опытом в
              создании веб-сайтов и тонкой настройке их функциональности. Мое
              портфолио отличается множеством успешно реализованных проектов,
              подчеркивающих мои навыки в области веб-разработки.
            </p>
            <ButtonLink
              download='Резюме Трюфилькин Алексей'
              href={myResumePDF}
              title='Скачать резюме'
            />
          </div>
          <div className={styles.skills}>
            <Skills
              name='Веб разработка'
              number='80%'
              style={styles.development}
            />
            <Skills
              name='Оптимизация сайтов'
              number='95%'
              style={styles.optimization}
            />
            <Skills name='UI/UX дизайн' number='75%' style={styles.design} />
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}
