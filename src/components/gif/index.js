import React from "react";
import GifItem from "./gif-item";

const Gif = ({ data = [], loading = false, error }) => {
  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      {data?.map(
        (gif) =>
          gif.rating === "g" && (
            <GifItem
              key={gif.id}
              url={gif.images.fixed_width.url}
              webp={gif.images.fixed_width.webp}
              title={gif.title}
              rating={gif.rating}
              uploadedDate={gif.uploadedDate}
            />
          )
      )}
    </>
  );
};

export default Gif;
