import React from 'react'
import styles from './header.module.css'
const Header = ({children , style}) => {
  return (
    <div className={styles.title}>
      {children}
    </div>
  )
}

export default Header
