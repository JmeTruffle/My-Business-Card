import { FC } from 'react'
import { AiOutlineFire } from 'react-icons/ai'
import { GoPeople } from 'react-icons/go'
import { PiCoffeeLight } from 'react-icons/pi'
import styles from './AboutBox.module.scss'
import { Box } from './Box/Box'

export const AboutBox: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Box
        title='25+'
        subtitle='Завершенных проектов'
        icon={<AiOutlineFire />}
      />
      <Box title='10+' subtitle='Довольных клиентов' icon={<GoPeople />} />
      <Box
        title='2 500+'
        subtitle='Выпитых чашек кофе'
        icon={<PiCoffeeLight />}
      />
    </div>
  )
}
