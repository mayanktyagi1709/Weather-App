import { useState } from "react";

const useForecast = () => {

    const BASE_URL = "https://www.metaweather.com/api/location";
    const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
    const REQUEST_URL = `${CROSS_DOMAIN/BASE_URL}`;
    
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const submitReq = (value) =>
    {
        console.log(value);
    }

    return {
        isError, isLoading, forecast, submitReq
    };
}

export default useForecast;
