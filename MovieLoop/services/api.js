export async function getTrending(type, getRandom) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${import.meta.env.VITE_TMDB_KEY}`
    }
  };
  const res = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch movies",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  const midiaAmount = getRandom >= 0 ?  data.results[getRandom] :  data.results
  return midiaAmount
}
