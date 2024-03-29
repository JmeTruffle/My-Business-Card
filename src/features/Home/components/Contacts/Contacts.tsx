import 'react-toastify/dist/ReactToastify.css'

import { FC, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

import buttonSubmit from '../../../../shared/ui/ButtonLink/ButtonLink.module.scss'
import styles from './Contacts.module.scss'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

export const Contacts: FC<FormFields> = () => {
  const { handleSubmit, register } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = useCallback(async data => {
    console.log(data)

    return toast.success('Сообщение отправлено')
  }, [])

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fromGroup}>
            <div className={styles.item}>
              <input
                type='text'
                id='name'
                className={styles.formInput}
                placeholder='Имя'
                {...register('name', { required: 'Поле обязательно' })}
              />
            </div>
            <div className={styles.item}>
              <input
                type='email'
                id='email'
                autoComplete='username'
                className={styles.formInput}
                placeholder='Почта'
                {...register('email', { required: 'Поле обязательно' })}
              />
            </div>
          </div>
          <div className={styles.item}>
            <input
              type='text'
              id='subject'
              className={styles.formInput}
              placeholder='Тема'
              {...register('subject', { required: 'Поле обязательно' })}
            />
          </div>
          <div className={styles.formMessageItem}>
            <textarea
              id='message'
              cols={30}
              rows={10}
              placeholder='Сообщение...'
              {...register('message', { required: 'Поле обязательно' })}
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
