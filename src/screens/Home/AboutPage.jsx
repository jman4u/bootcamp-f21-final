import React from 'react'
import Image from 'next/image'
import styles from './AboutPage.module.css'

export default function HomePage() {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.imageContainer}>
          <Image src="/image/cat.jpg" layout={'fill'} objectFit={'contain'}/>
        </div>
        <div>
          <h2 className={styles.title}> Welcome to Catscout </h2>
          <h3>We are an Atlanta-based nonprofit that aims to find families for stray cats.</h3>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
            </p>
        </div>
      </div>
    </div>
  )
}