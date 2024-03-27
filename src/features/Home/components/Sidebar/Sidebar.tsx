import { FC, useState } from 'react'
import { sidebarIcons } from '../../../../app/data/sidebarIcons'
import { Item } from '../../../../shared/components/Sidebar/Item/Item'
import styles from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <aside
        className={
          show ? `${styles.wrapper} ${styles.showMenu}` : `${styles.wrapper}`
        }
      >
        <a href='#main' className={styles.navLogo}>
          <img src='/icons/logo.svg' alt='Logo' />
        </a>
        <nav className={styles.nav}>
          <div className={styles.navMenu}>
            <ul className={styles.navList}>
              {sidebarIcons.map(item => {
                return (
                  <Item
                    key={item.id}
                    href={item.href}
                    iconName={item.iconName}
                  />
                )
              })}
            </ul>
          </div>
        </nav>
        <div className={styles.footer}>
          <span className={styles.copyright}>&copy; 2023 - 2024</span>
        </div>
      </aside>
      <div
        className={
          show ? `${styles.toggle} ${styles.toggleOpen}` : `${styles.toggle}`
        }
        onClick={() => setShow(!show)}
      >
        <i className='icon-menu'></i>
      </div>
    </>
  )
}
