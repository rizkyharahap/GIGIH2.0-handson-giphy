export async function searchGiphyAPI(query = "", limit = 12) {
  return await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=${limit}`
  ).then((response) => response.json());
}
