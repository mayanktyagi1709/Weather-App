import { useState } from "react";
import axios from "axios";

import todayForecast from '../helpers/todayForecast';
import forecastDetails from '../helpers/forecastDetails';
import upcomingDayForecast from '../helpers/upcomingDayForecast';

const useForecast = () => {
  const BASE_URL = "https://www.metaweather.com/api/location";
  const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
  const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });
    if (!data || data.length === 0) {
      setError("Location does not exist");
      setLoading(false);
      return;
    }
    return data[0];
  };

  const getForecast = async (woeid) => {
    const data = await axios(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
      setError("Something went wrong");
      setLoading(false);
      return;
    }
    return data;
  };

  const displayForecast = (data) =>
  {
      const currentDay = todayForecast(data.consolidated_weather[0], data.title);
      const details = forecastDetails(data.consolidated_weather[0]);
      const upcomingDetails = upcomingDayForecast(data.consolidated_weather);
  }

  const submitReq = async (location) => {
    setLoading(true);
    setError(false);

    const data = await getWoeid(location);
    if (!data || data.length === 0) return;

    const response = await getForecast(data.woeid);
    if (!response) return;
    console.log(response);

    displayForecast();
  };

  return {
    isError,
    isLoading,
    forecast,
    submitReq,
  };
};

export default useForecast;
