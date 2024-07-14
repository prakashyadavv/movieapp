import { useState, useEffect } from "react";
import axios from "axios";

const useContentDetail = (id, type) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&type=${type}`;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setDetails(response.data);
      } catch (error) {
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return { details, loading, error };
};

export default useContentDetail;
