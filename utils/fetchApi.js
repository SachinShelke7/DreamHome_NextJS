import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      //   "x-rapidapi-key": "4117b52adcmsh0a1496f8d1e38e2p15d6f2jsnf3e18bbab48f",
    },
  });
  return data;
};
