import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Error from "../Error/Error";
import Loading from "../Loader/Loader";
import Forecast from "../Forecast/Forecast"
import styles from "./Page.module.css";
import useForecast from "../../hooks/useForecast";   // custom hook

const Page = () => {
  const {isError, isLoading, forecast, submitReq} = useForecast();

  const submitSearch = (location) => {
    submitReq(location);
  }
  return (
    <>
      <Header />
      {!forecast && <div className={`${styles.box} position-relative`}>
        {!isLoading && <Form submitSearch={submitSearch}/>}
        {isError && <Error message={isError}/>}
        {isLoading && <Loading/>}
      </div>}
      {forecast && <Forecast forecast={forecast}/>}
    </>
  );
};

export default Page;
