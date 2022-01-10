import React from 'react'
import styles from './Header.module.css';
const header = () => {
    return (
        <h1 className={styles.heading}>
            <span className={styles.firstWord}>Weather </span>Forecast
        </h1>
    )
}

export default header
