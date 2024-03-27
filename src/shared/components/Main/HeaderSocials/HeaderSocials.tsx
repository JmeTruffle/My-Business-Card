import { FC } from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { LiaTelegramPlane } from 'react-icons/lia'
import { RxDiscordLogo } from 'react-icons/rx'

import {
  myDiscord,
  myGithub,
  myInstagram,
  myTelegram,
} from '../../../../app/data/links'
import { Item } from '../Item/Item'
import styles from './HeaderSocials.module.scss'

export const HeaderSocials: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Item
        href={myTelegram}
        icon={<LiaTelegramPlane className={styles.icon} />}
      />
      <Item href={myInstagram} icon={<FaInstagram className={styles.icon} />} />
      <Item href={myDiscord} icon={<RxDiscordLogo className={styles.icon} />} />
      <Item href={myGithub} icon={<FiGithub className={styles.icon} />} />
    </div>
  )
}
