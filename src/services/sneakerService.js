const apiUrl = 'http://localhost:8000'

const getSneakers = async () => {
  try {
    const res = await fetch(`${apiUrl}/sneakers/`)
    if (!res.ok) {
      throw new Error('Error getting all sneakers')
    }
    return await res.json()
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`)
  }
}

export default {
  getSneakers
}