import { FC } from 'react'

import buttonSubmit from '../../../../shared/ui/ButtonLink/ButtonLink.module.scss'
import styles from './Contacts.module.scss'

export const Contacts: FC = () => {
  return (
    <section className={styles.wrapper} id='contacts'>
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.contactTitle}>Открыт к предложениям 👋</h3>
          <p className={styles.contactDetails}>
            Буду рад рассмотреть любые интересные проекты и обсудить, как я могу
            внести свой вклад. Не стесняйтесь связаться со мной для обсуждения
            возможных вариантов сотрудничества или предложений.
          </p>
        </div>
        <form action='' className={styles.form}>
          <div className={styles.fromGroup}>
            <div className={styles.item}>
              <input
                type='text'
                name='name'
                className={styles.formInput}
                placeholder='Имя'
              />
            </div>
            <div className={styles.item}>
              <input
                type='email'
                name='email'
                className={styles.formInput}
                placeholder='Почта'
              />
            </div>
          </div>
          <div className={styles.item}>
            <input
              type='text'
              name='subject'
              className={styles.formInput}
              placeholder='Тема'
            />
          </div>
          <div className={styles.formMessageItem}>
            <textarea
              name='message'
              id=''
              cols={30}
              rows={10}
              placeholder='Сообщение...'
              className={styles.formMessage}
            />
          </div>
          <button type='submit' className={buttonSubmit.button}>
            Отправить
          </button>
        </form>
      </div>
    </section>
  )
}
