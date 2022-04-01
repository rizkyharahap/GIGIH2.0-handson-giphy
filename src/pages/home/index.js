import React from "react";
import Container from "../../components/container";
import Giv from "../../components/gif";
import Search from "../../components/searchBar";

import images from "../../assets/data/images";

const Home = () => {
  return (
    <Container>
      <Search placeholder="Search here..." buttonText="Search" />

      {/* <Search
        placeholder="Custom search..."
        buttonText="Custom search"
        styled={{ padding: "30px", background: "red" }}
      /> */}

      {/* Filltering first */}
      {/* {images
        .filter((image) => image.rating === "g")
        .map((image) => (
          <Giv
            key={image.id}
            url={image.url}
            webp={image.webp}
            title={image.title}
            rating={image.rating}
            uploadedDate={image.uploadedDate}
          />
        ))} */}

      <div className="grid-view">
        {images.map(
          (image) =>
            image.rating === "g" && (
              <Giv
                key={image.id}
                url={image.url}
                webp={image.webp}
                title={image.title}
                rating={image.rating}
                uploadedDate={image.uploadedDate}
              />
            )
        )}
      </div>
    </Container>
  );
};

export default Home;
