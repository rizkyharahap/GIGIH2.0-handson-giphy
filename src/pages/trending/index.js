import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../../components/container";
import Gif from "../../components/gif";
import { trendingGiphyAPI } from "../../service/api";
import { useSelector } from "react-redux";

const Trending = () => {
  const { goBack } = useHistory();

  const [trendingGifs, setTrendingGifs] = useState({
    data: [],
    error: "",
    loading: false,
  });

  const getTrendingGifs = async () => {
    try {
      // set loading to
      setTrendingGifs((prev) => ({
        ...prev,
        loading: true,
      }));

      const gifsResponse = await trendingGiphyAPI();

      // Throw error if no gifs found
      if (!gifsResponse || gifsResponse.data.length === 0)
        throw new Error("Gifs not found");

      setTrendingGifs((prev) => ({
        ...prev,
        data: gifsResponse.data,
        error: "",
      }));
    } catch (error) {
      // Set error message
      setTrendingGifs((prev) => ({
        ...prev,
        data: [],
        error: error.message,
      }));
    } finally {
      // Set loading to false
      setTrendingGifs((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    getTrendingGifs();
  }, []);

  return (
    <Container>
      <button onClick={goBack}>Back</button>
      <h1>Trending</h1>

      <div className="grid-view">
        <Gif {...trendingGifs} />
      </div>
    </Container>
  );
};

export default Trending;
