import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './menu.module.css'
import BurgerIcon from '../assets/icons/burgerIcon'


export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.name}>Shobdartho</div>
        </div>
    )
}
