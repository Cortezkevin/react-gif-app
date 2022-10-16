export const getGifs = async ( category ) => {

    const api_key = '0kpE7y9niZXgR8NGBTHmrQHf1HydsjRx';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=15`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gifs = data.map( gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }))

    return gifs;
};