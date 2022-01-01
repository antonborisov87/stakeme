import React from 'react'
import styles from './Nodes.module.css'
import AnimatedDot from '../AnimatedDot/AnimatedDot'

const solanaLink = 'https://www.validators.app/?q=7jmCjQt2D5MVvSz7NhpHLCXGsh8Mu3qeBbA4LJAf3Xsd&network=mainnet&order=&refresh=&commit=Search'
const minaLink = 'https://mina.staketab.com/validator/B62qnMmqkKptkyQPvYmCAAEnbNxjjRkpFZJSJLBgAuDL2bURwZgXe55'
const elixxirLink = 'https://dashboard.xx.network/nodes/lxTDUBG71bKIQkunKHba58-vUxy0rMvxdOvjOsphIW0C'

const solanaNode = '7jmCjQt2D5MVvSz7NhpHLCXGsh8Mu3qeBbA4LJAf3Xsd'
const minaNode = 'B62qnMmqkKptkyQPvYmCAAEnbNxjjRkpFZJSJLBgAuDL2bURwZgXe55'
const elixxirNode = 'lxTDUBG71bKIQkunKHba58-vUxy0rMvxdOvjOsphIW0C'

const Nodes = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                My current nodes in mainnet:
            </div>
            <div className={styles.row}>
                <AnimatedDot />
                <div className={styles.projectName}>solana: </div>
                <a className={styles.projectLink} href={solanaLink}>{solanaNode}</a>
            </div>
            <div className={styles.row}>
                <AnimatedDot />
                <div className={styles.projectName}>mina: </div>
                <a className={styles.projectLink} href={minaLink}>{minaNode}</a>
            </div>
            <div className={styles.row}>
                <AnimatedDot />
                <div className={styles.projectName}>elixxir: </div>
                <a className={styles.projectLink} href={elixxirLink}>{elixxirNode}</a>
            </div>
        </div >
    )
}

export default Nodes