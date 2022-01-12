import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import styles from "./Error.module.css";

const Error = (props) => {
    return (
        <div className={`${styles.error} alert position-absolute`} role="alert">
            {props.message}
        </div>
    )
}

Error.defaultProps = {
    message: "Loaction not found"
};

export default Error
