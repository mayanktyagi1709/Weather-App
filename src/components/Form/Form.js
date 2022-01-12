import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [location, setLocation] = useState('');
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if(!location || location === '')
    {
      return;
    }
    props.submitSearch(location);
  }

  const handleChange = (e) =>
  {
    setLocation(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="location"
        type="text"
        className= {`${styles.input} form-control`}
        placeholder="Search Location"
        required
        value={location}
        onChange={handleChange}
      />

      <button onClick={handleSubmit} type="submit" className={styles.button}>
        SEARCH
      </button>
    </form>
  );
};

export default Form;
