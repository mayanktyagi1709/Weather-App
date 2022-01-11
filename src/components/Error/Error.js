import React from 'react'
import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={`${styles.error} alert position-absolute`} role="alert">
            Location not found!
        </div>
    )
}

export default Error
