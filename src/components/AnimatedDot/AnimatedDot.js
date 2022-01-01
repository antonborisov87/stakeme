import React from 'react'
import './AnimatedDot.css'

const AnimatedDot = () => {
    return (
        <svg class='blinking' height="30" width="30" >
            <circle cx="10" cy="12" r="5" fill="green" />
        </svg>
    )
}

export default AnimatedDot