export async function searchGiphyAPI(query = '', limit = 12) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=${limit}`,
  );

  const data = await response.json();

  console.log('Search Data : ', data);

  return data;
}

export interface Pagination {
  count: number;
  offset: number;
  total_count: number;
}

export interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

export interface AnalyticsItem {
  url: string;
}

export interface ImageItem {
  height: string;
  size: string;
  url: string;
  width: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface TrendingItem {
  analytics: {
    onclick: AnalyticsItem;
    onload: AnalyticsItem;
    onsent: AnalyticsItem;
  };
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: {
    '480w_still': ImageItem;
    downsized: ImageItem;
    downsized_large: ImageItem;
    downsized_medium: ImageItem;
    downsized_small: ImageItem;
    downsized_still: ImageItem;
    fixed_height: ImageItem;
    fixed_height_downsampled: ImageItem;
    fixed_height_small: ImageItem;
    fixed_height_small_still: ImageItem;
    fixed_height_still: ImageItem;
    fixed_width: ImageItem;
    fixed_width_downsampled: ImageItem;
    webp_size: ImageItem;
    fixed_width_small: ImageItem;
    fixed_width_small_still: ImageItem;
    fixed_width_still: ImageItem;
    looping: ImageItem;
    original: ImageItem;
    original_mp4: ImageItem;
    original_still: ImageItem;
    preview: ImageItem;
    preview_gif: ImageItem;
    preview_webp: ImageItem;
  };
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  user: User;
  username: string;
}

export interface TrendingData {
  data: TrendingItem[];
  meta: Meta;
  pagination: Pagination;
}

export async function trendingGiphyAPI(query = '', limit = 12) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=${limit}`,
  );

  const data: TrendingData = await response.json();

  return data;
}
