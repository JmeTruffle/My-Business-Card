import 'react-toastify/dist/ReactToastify.css'

import emailjs from '@emailjs/browser'
import { FC, FormEvent, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import buttonSubmit from '../../../../shared/ui/ButtonLink/ButtonLink.module.scss'
import styles from './Contacts.module.scss'

export const Contacts: FC = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm('service_t5xx8pm', 'template_2avy0eh', form.current, {
          publicKey: 'lo0dCovE3KKlTVJKX',
        })
        .then(
          () => {
            toast.success('Сообщение отправлено')
          },
          error => {
            toast.success('Сообщение не отправлено')
          },
        )
    }

    e.currentTarget.reset()
  }

  return (
    <section className={styles.wrapper} id='contacts'>
      <ToastContainer position='top-right' limit={1} />
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
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.fromGroup}>
            <div className={styles.item}>
              <input
                required
                className={styles.formInput}
                type='text'
                id='name'
                name='user_name'
                placeholder='Имя'
              />
            </div>
            <div className={styles.item}>
              <input
                required
                className={styles.formInput}
                type='email'
                id='email'
                name='user_email'
                placeholder='Почта'
              />
            </div>
          </div>
          <div className={styles.item}>
            <input
              required
              className={styles.formInput}
              type='text'
              id='subject'
              name='subject'
              placeholder='Тема'
            />
          </div>
          <div className={styles.formMessageItem}>
            <textarea
              required
              className={styles.formMessage}
              name='message'
              placeholder='Сообщение...'
              cols={30}
              rows={10}
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
