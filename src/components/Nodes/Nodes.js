import React from 'react'
import styles from './Nodes.module.css'
import AnimatedDot from '../AnimatedDot/AnimatedDot'

const solanaLink = 'https://www.validators.app/validators?q=7jmCjQt2D5MVvSz7NhpHLCXGsh8Mu3qeBbA4LJAf3Xsd&network=mainnet&order=&refresh=&commit=Search'
const elixxirLink = 'https://dashboard.xx.network/nodes/lxTDUBG71bKIQkunKHba58-vUxy0rMvxdOvjOsphIW0C'
const graphLink = 'https://thegraph.com/explorer/profile/0x34b432d0715e215805411745910600c8bd47f91b?view=Overview'

const solanaNode = '7jmCjQt2D5MVvSz7NhpHLCXGsh8Mu3qeBbA4LJAf3Xsd'
const elixxirNode = 'lxTDUBG71bKIQkunKHba58-vUxy0rMvxdOvjOsphIW0C'
const graphNode = 'necronn.eth'

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
                <div className={styles.projectName}>elixxir: </div>
                <a className={styles.projectLink} href={elixxirLink}>{elixxirNode}</a>
            </div>
            <div className={styles.row}>
                <AnimatedDot />
                <div className={styles.projectName}>graph: </div>
                <a className={styles.projectLink} href={graphLink}>{graphNode}</a>
            </div>
        </div >
    )
}

export default Nodes