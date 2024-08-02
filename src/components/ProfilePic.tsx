import React, { ReactElement } from 'react'
import styles from '../styles/components/ProfilePic.module.scss'
import Image from 'next/image'

interface Props {}

function ProfilePic({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Image
        src='/images/Ismail.jpg'
        className={`${styles.secondary} ${styles.left}`}
        alt='Myself'
        width={300}
        height={300}
      />
      <Image
        src='/images/Ismail.jpg'
        className={`${styles.secondary} ${styles.right}`}
        alt='Myself'
        width={300}
        height={300}
      />

      <Image
        src='/images/bardach.jpg'
        alt='Small doodle of myself'
        width={500}
        height={500}
      />

      <Image
        src='/images/bardach.jpg'
        alt='Alternative doodle of myself'
        className={styles.easterEgg}
        width={500}
        height={500}
      />
    </div>
  )
}

export default ProfilePic
