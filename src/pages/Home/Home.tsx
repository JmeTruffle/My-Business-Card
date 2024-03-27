import { FC } from 'react'
import { About } from '../../features/Home/components/About/About'
import { Contacts } from '../../features/Home/components/Contacts/Contacts'
import { Experience } from '../../features/Home/components/Experience/Experience'
import { Main } from '../../features/Home/components/Main/Main'
import { Projects } from '../../features/Home/components/Projects/Projects'
import { Reviews } from '../../features/Home/components/Reviews/Reviews'
import { Services } from '../../features/Home/components/Services/Services'
import { Sidebar } from '../../features/Home/components/Sidebar/Sidebar'
import styles from './Home.module.scss'

export const Home: FC = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.components}>
        <Main />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Reviews />
        <Contacts />
      </main>
    </>
  )
}
