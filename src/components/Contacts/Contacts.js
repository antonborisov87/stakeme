import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>Contacts:</div>
            <div className={styles.row}>
                <div className={styles.title}>telegram: </div>
                <a className={styles.link} href='https://t.me/antonbelarus87'>@antonbelarus87</a>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>discord: </div>
                <a className={styles.link} href='https://discordapp.com/users/436540629049147392/'>RodgerVer#0492</a>
            </div>
        </div>
    )
}

export default Contacts