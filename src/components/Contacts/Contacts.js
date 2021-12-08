import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>Contacts:</div>
            <a className={styles.link} href='https://t.me/antonbelarus87'>Telegram</a>
            <a className={styles.link} href='https://discordapp.com/users/436540629049147392/'>Discord</a>
        </div>
    )
}

export default Contacts