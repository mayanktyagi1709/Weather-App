import { useState } from "react";
import axios from "axios";

const useForecast = () => {

    const BASE_URL = "https://www.metaweather.com/api/location";
    const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
    const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const submitReq = async (location) =>
    {
        const {data} = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        console.log({data});

        if(!data || data.length === 0)
        {
            setError("Location does not exist");
        }
    }

    return {
        isError, isLoading, forecast, submitReq
    };
}

export default useForecast;
