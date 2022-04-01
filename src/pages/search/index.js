import React, { Component } from "react";
import Container from "../../components/container";
import Giv from "../../components/gif";
import "../../components/searchBar/search.css";
import { searchGiphyAPI } from "../../service/api";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      gifs: [],
      error: "",
      loading: false,
    };
  }

  handleSearch = async () => {
    try {
      this.setState({ loading: true });
      const gifsResponse = await searchGiphyAPI(this.state.query);

      // Throw error if no gifs found
      if (!gifsResponse || gifsResponse.data.length === 0)
        throw new Error("Gifs not found");

      this.setState({
        gifs: gifsResponse.data,
        error: "",
      });
    } catch (error) {
      this.setState({
        gifs: [],
        error: error.message,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  // Handle
  handleChangeInput = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    let gifsComponent;

    if (this.state.loading) gifsComponent = <p>Loading...</p>;
    else if (this.state.error)
      gifsComponent = <p style={{ color: "red" }}>{this.state.error}</p>;
    else
      gifsComponent = this.state.gifs?.map(
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
            onChange={this.handleChangeInput}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>

        <div className="grid-view">{gifsComponent}</div>
      </Container>
    );
  }
}

export default Search;
