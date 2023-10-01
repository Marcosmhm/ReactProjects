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
        message: "Failed to fetch media",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  const mediaAmount = randomNumber >= 0 ?  data.results[randomNumber] :  data.results
  return mediaAmount
}

export async function getDetails(type, randomNumber) {
  const id = (await getTrending(type, randomNumber)).id
  const url = type === 'movie' ? `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos&?language=en-US` : `https://api.themoviedb.org/3/tv/${id}?append_to_response=videos&?language=en-US` 
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
        message: "Failed to fetch movies",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  return data.results
}

export async function getSpecificMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=watch/providers%2Cvideos%2Ccredits%2Cimages%2Crecommendations&language=en-US&include_image_language=en,null`
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch Movie",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  return data
}

export async function getShows(query) {
  let url
  query ==='trending' ? url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US` :
  url = `https://api.themoviedb.org/3/tv/${query}`
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch shows",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  console.log(data.results)
  return data.results
}

export async function getSpecifiShow(id) {
  const url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=watch/providers%2Cvideos%2Ccredits%2Cimages%2Crecommendations&language=en-US&include_image_language=en,null`
  const res = await fetch(url, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch Show",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  console.log(data)
  return data
}

export async function getShowSeason(id) {
  const allSeasonData = []
  try {
    const specificShow = await getSpecifiShow(id);
    const seasonCount = specificShow.number_of_seasons;
    for (let season = 1; season <= seasonCount; season++) {
      const url = `https://api.themoviedb.org/3/tv/${id}/season/${season}?language=en-US`;
      const res = await fetch(url, options);
      const data = await res.json();
      allSeasonData.push(data)
    }
  } catch(e) {
    console.log(e)
  } 
  return allSeasonData
}


