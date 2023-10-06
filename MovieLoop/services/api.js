const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${import.meta.env.VITE_TMDB_KEY}`
  }
};

export async function getTrending(type, randomNumber) {
  try {
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
    const mediaAmount = randomNumber >= 0 ? data.results[randomNumber] : data.results
    return mediaAmount
  } catch (e) {
    console.log(e)
  }
}

export async function getDetails(type, randomNumber) {
  try {
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
  } catch (e) {
    console.log(e)
  }
}

export async function getMovies(query, page = 1) {
  try {
    let url
    query === 'trending' ? url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}` :
      url = `https://api.themoviedb.org/3/movie/${query}?&page=${page}`
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

  } catch (e) {
    console.log(e)
  }
}

export async function getSpecificMovie(id) {
  try {
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
  } catch (e) {
    console.log(e)
  }
}

export async function getShows(query, page = 1) {
  try {
    let url
    query === 'trending' ? url = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}` :
      url = `https://api.themoviedb.org/3/tv/${query}?&page=${page}`
    const res = await fetch(url, options)
    if (!res.ok) {
      throw {
        message: "Failed to fetch shows",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    return data.results

  } catch (e) {
    console.log(e)
  }
}

export async function getSpecifiShow(id) {
  try {
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
    return data
  } catch (e) {
    console.log(e)
  }

}

export async function getPersonDetail(id) {
  try {
    const url = `https://api.themoviedb.org/3/person/${id}?append_to_response=combined_credits%2Cexternal_ids%2Cimages&language=en-US`
    const res = await fetch(url, options)
    if (!res.ok) {
      throw {
        message: "Failed to fetch Person",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

export async function getShowSeason(id) {
  const allSeasonData = []
  try {
    const specificShow = await getSpecifiShow(id);
    const seasonCount = specificShow.number_of_seasons;
    for (let season = 1; season <= seasonCount; season++) {
      const url = `https://api.themoviedb.org/3/tv/${id}/season/${season}?language=en-US`;
      const res = await fetch(url, options);
      if (!res.ok) {
        throw {
          message: "Failed to fetch season",
          statusText: res.statusText,
          status: res.status
        }
      }
      const data = await res.json();
      allSeasonData.push(data)
    }
  } catch (e) {
    console.log(e)
  }
  return allSeasonData
}

export async function searchMulti(query) {
  try {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`
    const res = await fetch(url, options)
    if (!res.ok) {
      throw {
        message: "Failed to fetch search",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    return data.results
  } catch (e) {
    console.log(e)
  }
}

export async function getToken() {
  try {
    const url = `https://api.themoviedb.org/3/authentication/token/new`
    const res = await fetch(url, options)
    if (!res.ok) {
      throw {
        message: "Failed to fetch token",
        statusText: res.statusText,
        status: res.status
      }
    }
    const data = await res.json()
    localStorage.setItem('token', data.request_token)
    return data.request_token
  } catch (e) {
    console.log(e)
  }
}

export async function createSession(token) {
  const createSessionOptions = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `${import.meta.env.VITE_TMDB_KEY}`
    },
    body: JSON.stringify({request_token: token})
  };
  try {
    const url = `https://api.themoviedb.org/3/authentication/session/new?request_token${token}`
    const res = await fetch(url, createSessionOptions)
    if(!res.ok) {
      throw {
        message: "Failed to validate token",
        statusText: res.statusText,
        status: res.status
      }
    }  
    const data = await res.json()
    localStorage.setItem('sessionId', data.session_id)
    localStorage.setItem('isLoggedIn', 'true')
    return data.session_id
  } catch (e) {
    console.log(e)  
  }
}

export async function deleteSession(sessionId) {
  const deleteSessionOptions = {
    method: 'Delete',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `${import.meta.env.VITE_TMDB_KEY}`
    },
    body: JSON.stringify({session_id: sessionId})
  };
  try {
    const url = `https://api.themoviedb.org/3/authentication/session`
    const res = await fetch(url, deleteSessionOptions)
    if(!res.ok) {
      throw {
        message: "Failed to validate token",
        statusText: res.statusText,
        status: res.status
      }
    } 
    localStorage.clear() 
    window.location.href = '/'
  } catch (e) {
    console.log(e)  
  }
}

export async function addToFavorite(type, mediaId, sessionId, bool) {
  const favoriteOptions = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `${import.meta.env.VITE_TMDB_KEY}`
    },
    body: JSON.stringify({media_type: type, media_id: mediaId, favorite: bool})
  };
  try {
    const url = `https://api.themoviedb.org/3/account/${sessionId}/favorite`
    const res = await fetch(url, favoriteOptions)
    if(!res.ok) {
      throw {
        message: "Failed to fetch favorites",
        statusText: res.statusText,
        status: res.status
      }
    } 
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

export async function getUserFavorites(sessionId, type) {

  const allFavorites = []
  type === 'movie' ? type = 'movies' : 'tv'
  try {
    const url = `https://api.themoviedb.org/3/account/${sessionId}/favorite/${type}?language=en-US&page=1&sort_by=created_at.asc`
    const res = await fetch(url, options)
    if(!res.ok) {
      throw {
        message: "Failed to fetch favorites",
        statusText: res.statusText,
        status: res.status
      }
    } 
    const data = await res.json()
    console.log('api', data.results)
    return data.results

  } catch (e) {
    console.log(e)
  }
}
