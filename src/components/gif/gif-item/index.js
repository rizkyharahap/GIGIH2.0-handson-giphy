import React from "react";
import "./gif-item.css";

const GifItem = ({
  title = "Title",
  url,
  webp,
  rating,
  uploadedDate,
  ...props
}) => {
  return (
    <picture className="gif-item-wrapper" {...props}>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={url} type="image/gif" />
      <img src={url} alt={title} />
      <span>{title}</span>
      <br />
      <span>Rating : {rating}</span>
      <span>
        Uploaded Date :{" "}
        {new Date(uploadedDate).toLocaleString("id-ID", {
          weekday: "long",
          month: "long",
          year: "numeric",
        })}
      </span>
    </picture>
  );
};

export default GifItem;
