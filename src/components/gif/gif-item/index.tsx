import './gif-item.css';
import { FC } from 'react';

export interface GifItemProps {
  /** The user's name */
  title: string;
  /** Should the name be rendered in bold */
  url: string;
  webp: string;
  rating: string;
  uploadedDate: string;
}

const GifItem: FC<GifItemProps> = ({ title = 'Title', url, webp, rating, uploadedDate }) => {
  return (
    <picture className="gif-item-wrapper">
      <source srcSet={webp} type="image/webp" />
      <source srcSet={url} type="image/gif" />
      <img src={url} alt={title} />
      <span>{title}</span>
      <br />
      <span>Rating : {rating}</span>
      <span>
        Uploaded Date :{' '}
        {new Date(uploadedDate).toLocaleString('id-ID', {
          weekday: 'long',
          month: 'long',
          year: 'numeric',
        })}
      </span>
    </picture>
  );
};

export default GifItem;
