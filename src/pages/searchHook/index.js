import { useState } from "react";
import Container from "../../components/container";
import Giv from "../../components/gif";
import { searchGiphyAPI } from "../../service/api";

const SearchHook = () => {
  const [query, setQuey] = useState("");
  const [gifs, setGifs] = useState({
    data: [],
    error: "",
    loading: false,
  });

  const handleSearch = async () => {
    try {
      // set loading to true
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

  // Handle
  const handleChangeInput = (e) => {
    setQuey(e.target.value);
  };

  let gifsComponent;

  if (gifs.loading) gifsComponent = <p>Loading...</p>;
  else if (gifs.error)
    gifsComponent = <p style={{ color: "red" }}>{gifs.error}</p>;
  else
    gifsComponent = gifs.data?.map(
      (gif) =>
        gif.rating === "g" && (
          <Giv
            key={gif.id}
            url={gif.images.fixed_width.url}
            webp={gif.images.fixed_width.webp}
            title={gif.title}
            rating={gif.rating}
            uploadedDate={gif.uploadedDate}
          />
        )
    );

  return (
    <Container>
      <div className="search">
        <input
          type="search"
          placeholder="Search Here..."
          onChange={handleChangeInput}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="grid-view">{gifsComponent}</div>
    </Container>
  );
};

export default SearchHook;
