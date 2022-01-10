import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import styles from "./Page.module.css";

const Page = () => {
  return (
    <>
      <Header />
      <div className={styles.box}>
        <Form/>
      </div>
    </>
  );
};

export default Page;
