const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${import.meta.env.VITE_TMDB_KEY}`
  }
};

export async function getTrending(type, randomNumber) {
  const url = `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch midia",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  const midiaAmount = randomNumber >= 0 ?  data.results[randomNumber] :  data.results
  return midiaAmount
}

export async function getDetails(type, randomNumber) {
  // tv e numero  entre 0 e 19
  const id = (await getTrending(type, randomNumber)).id
  const url = type === 'movie' ? `https://api.themoviedb.org/3/movie/${id}?language=en-US` : `https://api.themoviedb.org/3/tv/${id}?language=en-US` 
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch details",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  return data
}

export async function getMovies(query) {
  let url
  query ==='trending' ? url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US` :
  url = `https://api.themoviedb.org/3/movie/${query}`
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch movie",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  return data.results
}

export async function getShows(query) {
  let url
  query ==='trending' ? url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US` :
  url = `https://api.themoviedb.org/3/tv/${query}`
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch show",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  console.log(data)
  return data.results
}
