import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.navbar}>
          <h1> Animal Shelter </h1>
          <nav>
            <Link href="/"><a> About </a></Link>
            <Link href="/adopt"><a> Adopt </a></Link>
            <Link href="/admin"><a> Admin </a></Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}
