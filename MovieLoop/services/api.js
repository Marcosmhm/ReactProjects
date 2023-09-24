export async function getTrending(type) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzk0MzE2M2E0MmYwMzg0ZDdiZTgzNDU5NTY1MDFmYSIsInN1YiI6IjY1MTAwOTRjZTFmYWVkMDExZDVlNGMxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WN37scDQwPXBjLN95yWB-xpw3f58E8OEKw3IlDRyMWc'
    }
  };
  const res = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, options)
  if (!res.ok) {
    throw {
        message: "Failed to fetch vans",
        statusText: res.statusText,
        status: res.status
      }
  }
  const data = await res.json()
  return data.results
}
