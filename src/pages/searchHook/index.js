import { useState } from "react";
import Container from "../../components/container";
import Gif from "../../components/gif";
import SearchBar from "../../components/searchBar";
import { searchGiphyAPI } from "../../service/api";

const SearchHook = () => {
  const [query, setQuey] = useState("");
  const [gifs, setGifs] = useState({
    data: [],
    error: "",
    loading: false,
  });

  // Handle
  const handleChangeInput = (e) => {
    setQuey(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // set loading to
      setGifs((prev) => ({
        ...prev,
        loading: true,
      }));

      const gifsResponse = await searchGiphyAPI(query);

      // Throw error if no gifs found
      if (!gifsResponse || gifsResponse.data.length === 0)
        throw new Error("Gifs not found");

      setGifs((prev) => ({
        ...prev,
        data: gifsResponse.data,
        error: "",
      }));
    } catch (error) {
      // Set error message
      setGifs((prev) => ({
        ...prev,
        data: [],
        error: error.message,
      }));
    } finally {
      // Set loading to false
      setGifs((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  return (
    <Container>
      <div className="search">
        <SearchBar onChange={handleChangeInput} onSubmit={handleSearch} />
      </div>

      <div className="grid-view">
        <Gif {...gifs} />
      </div>
    </Container>
  );
};

export default SearchHook;
